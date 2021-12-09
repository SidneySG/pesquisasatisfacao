from dashboardRequests.models import (
    Section, DashboardParameter, DashboardRequest)
from dashboardRequests.serializers import (DashboardParameterSerializer)
from rest_framework.response import Response
from django.http import JsonResponse, StreamingHttpResponse


class CoreFeatures:

    def __init__(self, *args, **kwargs):
        pass

    @staticmethod
    def loadForm(uid):
        dashboardRequest = DashboardRequest.objects.get(uid=uid)
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
