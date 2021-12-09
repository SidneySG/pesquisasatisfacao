import random
import importlib.util
import base64
import sys
import os
import ast
from pathlib import Path
from django.shortcuts import render
from django.db import connection, transaction
from .serializers import (DashboardRequestSerializer)
from dashboardRequests.models import (RequestSet,
                                      DashboardRequest, Section, DashboardParameter, ValidationRuleAttributes)
from dashboardRequests.serializers import (
    DashboardParameterSerializer, SectionSerializer, DashboardRequestSerializer, RequestSetSerializer)
from api.models import (ValidationRule)
from rest_framework import mixins, status
from rest_framework.generics import CreateAPIView, GenericAPIView, ListAPIView
from rest_framework import viewsets, permissions
from url_filter.integrations.drf import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse, StreamingHttpResponse
from django.utils.module_loading import import_string
from rest_framework.decorators import action, api_view, authentication_classes, permission_classes


class RequestSetViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = RequestSet.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = RequestSetSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('uid', 'id', 'name', 'displayName')

    def get_serializer_context(self):
        context = super(RequestSetViewSet,
                        self).get_serializer_context()
        if not self.request.GET.get('fields', None) == None:
            context.update({'fields': self.request.GET.get('fields', None)})
        return context

    def retrieve(self, request, pk=None):
        queryset = RequestSet.objects.all()
        stage = get_object_or_404(queryset, pk=pk)
        serializer = RequestSetSerializer(stage)
        return Response(serializer.data)

    def post(self, request):
        chrs = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        requestSets = []
        for i in range(len(request.data)):
            if "uid" not in request.data[i]:
                is_valid_uid = False
                while not is_valid_uid:
                    uid = ''.join(random.choices(chrs, k=11))
                    if (RequestSet.objects.filter(uid=uid).count() == 0):
                        request.data[i]["uid"] = uid
                        is_valid_uid = True
            requestSet = RequestSet(**request.data[i])
            requestSet.save()
            requestSets.append(requestSet.id)

        requestSet = RequestSet.objects.filter(pk__in=requestSets)
        serializer = RequestSetSerializer(requestSet, many=True)
        return Response(serializer.data)


class DashboardRequestsViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = DashboardRequest.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = DashboardRequestSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('uid', 'id', 'name', 'displayName', 'requestSet')

    def get_serializer_context(self):
        context = super(DashboardRequestsViewSet,
                        self).get_serializer_context()
        if not self.request.GET.get('fields', None) == None:
            context.update({'fields': self.request.GET.get('fields', None)})
        return context

    def retrieve(self, request, pk=None):
        queryset = DashboardRequest.objects.all()
        stage = get_object_or_404(queryset, pk=pk)
        serializer = DashboardRequestSerializer(stage)
        return Response(serializer.data)

    def post(self, request):
        chrs = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        dashboardRequests = []
        for i in range(len(request.data)):
            if "uid" not in request.data[i]:
                is_valid_uid = False
                while not is_valid_uid:
                    uid = ''.join(random.choices(chrs, k=11))
                    if (DashboardRequest.objects.filter(uid=uid).count() == 0):
                        request.data[i]["uid"] = uid
                        is_valid_uid = True
            dashboardRequest = DashboardRequest(**request.data[i])
            dashboardRequest.save()
            dashboardRequests.append(dashboardRequest.id)

        dashboardRequests = DashboardRequest.objects.filter(
            pk__in=dashboardRequests)
        serializer = DashboardRequestSerializer(dashboardRequests, many=True)
        return Response(serializer.data)


@api_view(('POST',))
@transaction.atomic
def createDashboardRequest(request):
    # request.data['username']
    dashboardRequest = None
    chrs = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    dashboardParameterAux = {}
    if "uid" not in request.data:
        is_valid_uid = False
        while not is_valid_uid:
            uid = ''.join(random.choices(chrs, k=11))
            if (DashboardRequest.objects.filter(uid=uid).count() == 0):
                request.data["uid"] = uid
                is_valid_uid = True
        requestSet = RequestSet.objects.get(
            uid=request.data['requestSet']['uid'])
        dashboardRequest = DashboardRequest(requestSet=requestSet, method=request.data['method'], action=request.data['action'],
                                            uid=request.data["uid"], code=request.data['code'], name=request.data['name'], displayName=request.data['displayName'])
        dashboardRequest.save()
        for i in range(len(request.data['sections'])):
            section = Section(displayName=request.data['sections'][i]['displayName'],
                              order=request.data['sections'][i]['order'], dashboardRequest=dashboardRequest)
            section.save()
            for dashboardParameter in request.data['sections'][i]['dashboardParameters']:
                #dashboardParameter["section"] = section.id
                validationRules = dashboardParameter['validationRules'].copy()
                del dashboardParameter['validationRules']
                if not (dashboardParameter['dataSourceParammeters'] == None):
                    dashboardParameter['dataSourceParammeters'] = ','.join([str(dashboardParameterAux[x['name']]) for x in dashboardParameter['dataSourceParammeters']])
                dashboardParameter = DashboardParameter(
                    **dashboardParameter, section=section)
                dashboardParameter.save()
                dashboardParameterAux[dashboardParameter.name] = dashboardParameter.id
                for validationRule in validationRules:
                    validationRule = ValidationRule.objects.get(
                        pk=validationRule["id"])
                    validationRuleAttributes = ValidationRuleAttributes(
                        validationRule=validationRule, dashboardParameter=dashboardParameter)
                    validationRuleAttributes.save()

    if(dashboardRequest == None):
        return Response("Ocorreu um erro na tentativa de criar a requisição", status=500)
    else:
        dashboardRequest = DashboardRequestSerializer(dashboardRequest)
        return Response(dashboardRequest.data, status=200)


@api_view(('POST',))
def uploadDashboardRequestScript(request):
    try:
        with open(os.path.join(Path(__file__).resolve().parent, 'requestFiles', '_'+request.data['uid']+'.py'), "wb") as fh:
            fh.write(base64.b64decode(
                request.data["pythonScript"].split(",")[1]))
    except:
        pass
    request_file = Path(os.path.join(Path(__file__).resolve(
    ).parent, 'requestFiles', '_'+request.data['uid']+'.py'))

    if request_file.is_file():
        return Response("Ficheiro carregado com êxito", status=200)
    else:
        return Response("Infelizmente não conseguimos carregar o ficheiro", status=500)


@api_view(('GET',))
def getRequestSetList(request):
    requestSets = RequestSet.objects.all()
    rqsts = []
    for requestSet in requestSets:
        reqs = DashboardRequest.objects.filter(requestSet=requestSet)
        rq = {'id': requestSet.id, 'code': requestSet.code,
              'uid': requestSet.uid,
              'description': requestSet.code,
              'description': requestSet.uid,
              'displayName': requestSet.displayName,
              'name': requestSet.name}
        rq['dashboardRequests'] = [{'id': x.id, 'uid': x.uid,
                                    'displayName': x.displayName, 'method': x.method,
                                    'name': x.name} for x in reqs]
        rqsts.append(rq)
    return JsonResponse(rqsts, safe=False)


@api_view(('GET', 'POST'))
def resolveDashboardRequest(request, slug=None):
    if(slug == None):
        return Response("Request not defined", status=404)

    request_file = Path(os.path.join(
        Path(__file__).resolve().parent, 'requestFiles', '_'+slug+'.py'))
    if request_file.is_file():
        plugin = import_string(
            'dashboardRequests.requestFiles._'+slug+'.Plugin')
        return plugin.execute('', uid=slug, request=request)
    else:
        return Response("Plugin not found", status=404)


@api_view(('GET',))
def getActionList(request, slug=None):
    if(slug == None):
        return Response("Request not defined", status=404)

    request_file = Path(os.path.join(
        Path(__file__).resolve().parent, 'requestFiles', '_'+slug+'.py'))
    if request_file.is_file():
        source = open(request_file).read()
        functions = [f.name for f in ast.parse(
            source).body if isinstance(f, ast.FunctionDef)]
        return JsonResponse(functions, safe=False)
    else:
        return Response("Plugin not found", status=404)

@api_view(('GET',))
def loadForm(request, slug=None):
    dashboardRequest = DashboardRequest.objects.get(uid=slug)
    if(dashboardRequest == None):
        return Response("Request not found", status=404)
    result = {'name': dashboardRequest.name,
                'code': dashboardRequest.code,
                'displayName': dashboardRequest.displayName,
                'sections': []}
    sections = Section.objects.filter(
        dashboardRequest=dashboardRequest).order_by("order")
    for section in sections:
        dashboardParameters = DashboardParameter.objects.filter(
            section=section).order_by("order")
        dashboardParameters = DashboardParameterSerializer(
            dashboardParameters, many=True)
        dashboardParameters = dashboardParameters.data
        result['sections'].append({'displayName': section.displayName,
                                    'order': section.order,
                                    'dashboardParameters': dashboardParameters})
    return JsonResponse(result, safe=False)
