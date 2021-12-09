from os import name
import datetime
import utils
import base64
from rest_framework.response import Response
from django.http import JsonResponse, HttpResponse
from dashboardRequests.requestFiles.core_features import CoreFeatures
from api.serializers import (AttributeSetSerializer, FormSerializer,
                             UserSerializer, OptionSetSerializer, ValueSetSerializer)

from api.models import (Attribute, OptionSet, AttributeSet, Client, Form,
                        ValueSetColletion, OrgUnit, AttributeValue, ValueSetValueSetColletion,
                        ValueSet, ValueSetAttributeValue)

from django.contrib.auth.models import User, Permission, Group
from django.db import connection
import urllib.request
import json
import qrcode
import qrcode.image.svg
from io import BytesIO


def getTabularData(request):

    data = {'data': [{'wd': 'Mon', 'v': 120},
                     {'wd': 'Tue', 'v': 200},
                     {'wd': 'Wed', 'v': 150},
                     {'wd': 'Thu', 'v': 80},
                     {'wd': 'Fri', 'v': 70},
                     {'wd': 'Sat', 'v': 110},
                     {'wd': 'Sun', 'v': 130}],
            'head': [{'label': 'WD', 'id': 'wd', 'numeric': False, 'disablePadding': False, 'editable': False, 'hide': False},
                     {'label': 'value', 'id': 'v', 'numeric': False, 'disablePadding': False, 'editable': False, 'hide': False}, ]}
    return JsonResponse(data, safe=False)


def responseTemplate(request):
    return Response("Action not found")


# def loadData(request):
#     data = {'data': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
#             'series': [120, 200, 150, 80, 70, 110, 130]}
#     return JsonResponse(data, safe=False)


def loadData(request):
    # data = {'data': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    #         'series': [120, 200, 150, 80, 70, 110, 130]}

    try:
        checkIfIsInt = int(request.GET.get('AttributeSet', None))
        attributeSet = AttributeSet.objects.get(
            id=request.GET.get('AttributeSet', None))
    except:
        attributeSet = AttributeSet.objects.get(
            uid=request.GET.get('attributeSet', None))

    selectedParams = ['{}'.format(x) for x in request.GET.get(
        'orgUnits', None)[1:-1].split(',')]
    sqlFilter = "SELECT * FROM api_orgunit WHERE uid IN (" + str(selectedParams)[
        1:-1] + ")"
    orgUnits = OrgUnit.objects.raw(sqlFilter)

    selectedParams = ['{}'.format(x) for x in request.GET.get(
        'attributes', None)[1:-1].split(',')]
    sqlFilter = "SELECT * FROM api_attribute WHERE uid IN (" + str(selectedParams)[
        1:-1] + ")"
    attributes = Attribute.objects.raw(sqlFilter)

    if(not(request.GET.get('startDate', None) == None) and not(request.GET.get('endDate', None) == None)):
        sqlFilter = "SELECT * FROM api_valueset WHERE attributeSet_id = " + str(attributeSet.id) + " AND created_at >= '" + utils.localdate_to_utc(request.GET.get(
            'startDate', None)) + "' AND created_at <= '" + utils.localdate_to_utc(request.GET.get('endDate', None)) + "' AND orgUnit_id IN("+str([ou.id for ou in orgUnits])[1:-1]+") ORDER BY created_at DESC"
        valueSets = ValueSet.objects.raw(sqlFilter)
    else:
        sqlFilter = "SELECT * FROM api_valueset WHERE attributeSet_id = " + \
            str(attributeSet.id) + " AND orgUnit_id IN(" + \
            str([ou.id for ou in orgUnits])[1:-1]+") ORDER BY created_at DESC"
        valueSets = ValueSet.objects.raw(sqlFilter)

    header = {}
    for a in attributes:
        if(len(a.optionSet.options) > 0):
            for opt in a.optionSet.options:
                header[a.uid+'-'+str(opt.id)] = a.displayName + \
                    '-'+opt.displayName

    data = {}
    for valueSet in valueSets:
        for attributeValue in valueSet.attributeValues.all():
            if(attributeValue.attribute.uid in [x.uid for x in attributes]):
                if(len(attributeValue.attribute.optionSet.options) > 1):
                    for v in attributeValue.value.split(','):
                        data[attributeValue.attribute.uid+'-' +
                             v] = data[attributeValue.attribute.uid+'-'+v] + 1

    return JsonResponse({'header': header, 'data': data}, safe=False)


def getAttributeSets(request):
    attributeSets = AttributeSet.objects.all()
    attributeSetsData = []
    for attributeSet in attributeSets:
        attributeSetsData.append({
            'id': attributeSet.id,
            'uid': attributeSet.uid,
            'displayName': attributeSet.displayName,
            'name': attributeSet.name
        })

    return JsonResponse(attributeSetsData, safe=False)


def getAttributesByAttributeSet(request):
    attributeSet = AttributeSet.objects.get(
        uid=request.GET.get('attributeSet', None))
    attributesData = []
    for attribute in attributeSet.attributes.all():
        attributesData.append({
            'id': attribute.id,
            'uid': attribute.uid,
            'displayName': attribute.displayName,
            'name': attribute.name
        })

    return JsonResponse(attributesData, safe=False)


def getPrecos(request):
    if(ValueSetColletion.objects.filter(uid='APNVumba021').count() <= 0):
        return JsonResponse([], safe=False)

    valueSetColletion = ValueSetColletion.objects.get(uid='APNVumba021')
    valueSetValueSetColletion = ValueSetValueSetColletion.objects.filter(
        valueSetColletion=valueSetColletion)
    result = []
    for vsc in valueSetValueSetColletion:
        try:
            clientData = {'valueSet': vsc.valueSet.id}
            for attributeValue in vsc.valueSet.attributeValues.all():
                if(attributeValue.attribute.uid in request.GET.get('attributes', None).split(',')):
                    #print(attributeValue.attribute.optionSet.displayName )
                    if attributeValue.attribute.optionSet.displayName != 'default':
                        # print(attributeValue.attribute.optionSet.id)
                        optionSet = OptionSet.objects.get(
                            pk=attributeValue.attribute.optionSet.id)
                        optionSet = OptionSetSerializer(optionSet)
                        optionSet = optionSet.data
                        for option in range(len(optionSet['options'])):
                            values = attributeValue.value.split(",")
                            for value in values:
                                if(str(optionSet['options'][option]['id']) == str(value)):
                                    clientData[attributeValue.attribute.uid] = optionSet['options'][option]['displayName']
                    else:
                        clientData[attributeValue.attribute.uid] = attributeValue.longTextValue if len(
                            attributeValue.value) == 11 else attributeValue.value
            if(len(clientData) > 0):
                result.append(clientData)
        except:
            pass
    return JsonResponse(result, safe=False)


def getPrecosByClient(attributes, client):
    if(ValueSetColletion.objects.filter(uid='APNVumba021').count() <= 0):
        return JsonResponse([], safe=False)

    cliente = Client.objects.get(uid=client)
    tabelaPrecos = None
    for attributeValue in cliente.valueSet.attributeValues.all():
        if(attributeValue.attribute.uid == 'SZrHkosJW9d'):
            if(not (attributeValue.value == None) or not (attributeValue.value == '')):
                tabelaPrecos = ValueSet.objects.get(pk=attributeValue.value)

    if tabelaPrecos == None:
        return None

    try:
        clientData = {}
        for attributeValue in tabelaPrecos.attributeValues.all():
            if(attributeValue.attribute.uid in attributes):
                #print(attributeValue.attribute.optionSet.displayName )
                if attributeValue.attribute.optionSet.displayName != 'default':
                    # print(attributeValue.attribute.optionSet.id)
                    optionSet = OptionSet.objects.get(
                        pk=attributeValue.attribute.optionSet.id)
                    optionSet = OptionSetSerializer(optionSet)
                    optionSet = optionSet.data
                    for option in range(len(optionSet['options'])):
                        values = attributeValue.value.split(",")
                        for value in values:
                            if(str(optionSet['options'][option]['id']) == str(value)):
                                clientData[attributeValue.attribute.uid] = optionSet['options'][option]['displayName']
                else:
                    clientData[attributeValue.attribute.uid] = attributeValue.longTextValue if len(
                        attributeValue.value) == 11 else attributeValue.value
        if(len(clientData) > 0):
            return clientData
        else:
            return []
    except:
        pass
    return clientData


def updateClient(request):
    avs = []
    restoAvs = []
    for x in request.data["valueSet"]["attributeValues"]:
        if x['isNew']:
            restoAvs.append(x)
        else:
            avs.append(x)

    sqlFilter = "SELECT * from api_attributevalue WHERE id IN(" + ",".join(
        [str(a['id']) for a in avs]) + ")"
    attributeValues = AttributeValue.objects.raw(sqlFilter)

    for attributeValue in attributeValues:
        for rAttributeValue in avs:
            if rAttributeValue['id'] == attributeValue.id:
                attributeValue.value = rAttributeValue['value']
                attributeValue.save()

    valueSet = ValueSet.objects.get(pk=request.data["valueSet"]["id"])
    for attributeValue in restoAvs:
        try:
            attribute = Attribute.objects.get(
                pk=attributeValue["attribute"]["id"])
            attributeValue = AttributeValue(
                value=attributeValue["value"], attribute=attribute, period=attributeValue["period"])
            attributeValue.save()
            valueSetAttributeValue = ValueSetAttributeValue(
                attributeValue=attributeValue, valueSet=valueSet)
            valueSetAttributeValue.save()
        except Exception as e:
            pass
            # print(e)

    return JsonResponse("Operacao terminada com exito", safe=False)


def setPrecos(request):
    valueSet = {}

    if "orgUnit" in request.data:
        orgUnit = OrgUnit.objects.get(uid=request.data["orgUnit"])
        valueSet["orgUnit"] = orgUnit

    if(ValueSetColletion.objects.filter(uid=request.data["valueSetCollection"]["uid"]).count() > 0):
        valueSetColletion = ValueSetColletion.objects.get(
            uid=request.data["valueSetCollection"]["uid"])
    else:
        valueSetColletion = ValueSetColletion(
            name="Preços Vumba", descricao="", group="precos", orgUnit=orgUnit)
        valueSetColletion.save()

    valueSet["attributeSet"] = AttributeSet.objects.get(
        uid=request.data["attributeSet"]["uid"])
    valueSet["client"] = request.user
    valueSet = ValueSet(**valueSet)
    valueSet.save()

    valueSetValueSetColletion = ValueSetValueSetColletion(
        valueSet=valueSet, valueSetColletion=valueSetColletion)

    valueSetValueSetColletion.save()

    if "values" in request.data:
        name = {}
        attribute = Attribute.objects.get(uid='OworTEkwD7g')
        name["attribute"] = attribute
        name["value"] = request.data["name"]
        name["orgUnit"] = orgUnit
        name = AttributeValue(**name)
        name.save()
        ValueSetAttributeValue.objects.create(
            valueSet=valueSet, attributeValue=name)

        description = {}
        attribute = Attribute.objects.get(uid='NulyuNV26c0')
        description["attribute"] = attribute
        description["value"] = request.data["description"]
        description["orgUnit"] = orgUnit
        description = AttributeValue(**description)
        description.save()
        ValueSetAttributeValue.objects.create(
            valueSet=valueSet, attributeValue=description)

        for i in range(len(request.data["values"])):
            av = {}
            attribute = Attribute.objects.get(
                uid=request.data["values"][i]["uid"])
            av["attribute"] = attribute
            av["longTextValue"] = request.data["values"][i]["value"]
            av["value"] = request.data["values"][i]["attribute"]
            if "orgUnit" in request.data:
                av["orgUnit"] = orgUnit
            attributeValue = AttributeValue(**av)
            attributeValue.save()

            ValueSetAttributeValue.objects.create(
                valueSet=valueSet, attributeValue=attributeValue)

    return JsonResponse("Registo criado com exito", safe=False)


def getRecibo(request):
    form = Form.objects.get(pk=request.data["form"])
    form = FormSerializer(form)
    form = form.data
    attributes = ["ohlIOahj3rT", "LSKgxEa2qjo", "OworTEkwD7g",
                  "NulyuNV26c0", "t5ATW9kx8Fb", "G1AUVkh2tlH",
                  "iREvhNnQghL", "fuRJ0KK9RpI", "OavFpJgcMJy",
                  "t5ATW9kx8Fb"]

    tabelaPrecos = getPrecosByClient(attributes, request.data["client"])

    if tabelaPrecos == None:
        return JsonResponse("Este cliente não está associado a uma Tabela válida", safe=False)

    pedido = {'ohlIOahj3rT': {'producto': 'Água Vumba 1.5L', 'uid': 'rgmDIskEEoP',
                              'preco': 0, 'qtd': 0, 'total': 0},
              'LSKgxEa2qjo': {'producto': 'Água vumba 0.5L', 'uid': 'xd8LWiSauId',
                              'preco': 0, 'qtd': 0, 'total': 0},
              'G1AUVkh2tlH': {'producto': 'Água Vumba 1L', 'uid': '0Ud2GwDmJRP',
                              'preco': 0, 'qtd': 0, 'total': 0},
              'iREvhNnQghL': {'producto': 'Água Vumba 5L', 'uid': 'slkfh4aip08',
                              'preco': 0, 'qtd': 0, 'total': 0},
              'fuRJ0KK9RpI': {'producto': 'Fonte pura 6L', 'uid': '8SjVVMNOvLb',
                              'preco': 0, 'qtd': 0, 'total': 0},
              'OavFpJgcMJy': {'producto': 'Fonte pura 6L (caixa 2x6L)', 'uid': 'dN064vGrK01',
                              'preco': 0, 'qtd': 0, 'total': 0},
              't5ATW9kx8Fb': {'producto': 'Fonte pura garafão 18.9L', 'uid': '43LjIJIvE87',
                              'preco': 0, 'qtd': 0, 'total': 0}}

    attributeSet = AttributeSet.objects.get(pk=form["attributeSet"]["id"])
    attributeSet = AttributeSetSerializer(attributeSet)
    attributeSet = attributeSet.data

    for a in attributeSet["attributes"]:
        try:
            for p in pedido:
                if a["uid"] == pedido[p]["uid"]:
                    pedido[p]['qtd'] = float(
                        request.data["values"][str(a["id"])])
                    for pr in json.loads(tabelaPrecos[p]):
                        if(eval(str(pedido[p]['qtd'])+' '+pr['operador']+' '+pr['qtd'])):
                            pedido[p]['preco'] = pr['preco']

                pedido[p]['total'] = float(
                    pr['preco']) * float(pedido[p]['qtd'])

        except:
            #vals[a["uid"]] = 0
            pass

    return JsonResponse(pedido, safe=False)


def getReciboByValueSet(request):

    base64_bytes = request.GET.get('client', None).encode("ascii")
    sample_string_bytes = base64.b64decode(base64_bytes)
    sample_string = sample_string_bytes.decode("ascii")
    client = Client.objects.get(uid=sample_string.split('-')[0])
    form = Form.objects.get(uid=sample_string.split('-')[1])


    if(not (sample_string.split('-')[2] == client.password)):
        return Response("Unauthorized", status=401)

    if(not (str(form.id) in client.forms.split(','))):
        return Response("Unauthorized", status=401)

    attributes = ["ohlIOahj3rT", "LSKgxEa2qjo", "OworTEkwD7g",
                  "NulyuNV26c0", "t5ATW9kx8Fb", "G1AUVkh2tlH",
                  "iREvhNnQghL", "fuRJ0KK9RpI", "OavFpJgcMJy",
                  "t5ATW9kx8Fb"]

    tabelaPrecos = getPrecosByClient(attributes, client.uid)
    print(tabelaPrecos)

    if tabelaPrecos == None:
        return JsonResponse("Este cliente não está associado a uma Tabela válida", safe=False)

    pedido = {'ohlIOahj3rT': {'producto': 'Água Vumba 1.5L', 'uid': 'rgmDIskEEoP',
                              'preco': 0, 'qtd': 0, 'total': 0},
              'LSKgxEa2qjo': {'producto': 'Água vumba 0.5L', 'uid': 'xd8LWiSauId',
                              'preco': 0, 'qtd': 0, 'total': 0},
              'G1AUVkh2tlH': {'producto': 'Água Vumba 1L', 'uid': '0Ud2GwDmJRP',
                              'preco': 0, 'qtd': 0, 'total': 0},
              'iREvhNnQghL': {'producto': 'Água Vumba 5L', 'uid': 'slkfh4aip08',
                              'preco': 0, 'qtd': 0, 'total': 0},
              'fuRJ0KK9RpI': {'producto': 'Fonte pura 6L', 'uid': '8SjVVMNOvLb',
                              'preco': 0, 'qtd': 0, 'total': 0},
              'OavFpJgcMJy': {'producto': 'Fonte pura 6L (caixa 2x6L)', 'uid': 'dN064vGrK01',
                              'preco': 0, 'qtd': 0, 'total': 0},
              't5ATW9kx8Fb': {'producto': 'Fonte pura garafão 18.9L', 'uid': '43LjIJIvE87',
                              'preco': 0, 'qtd': 0, 'total': 0}}


    valueSet = ValueSet.objects.get(pk= request.GET.get('id', None))
    try:
        for attributeValue in valueSet.attributeValues.all():
            try:
                for p in pedido:
                    if(attributeValue.attribute.uid in ["rgmDIskEEoP", "xd8LWiSauId", "0Ud2GwDmJRP", "slkfh4aip08", "8SjVVMNOvLb", "dN064vGrK01", "dN064vGrK01", "43LjIJIvE87"]):
                        if attributeValue.attribute.uid == pedido[p]["uid"]:
                            pedido[p]['qtd'] = float(attributeValue.value)
                            for pr in json.loads(tabelaPrecos[p]):
                                if(eval(str(pedido[p]['qtd'])+' '+pr['operador']+' '+pr['qtd'])):
                                    pedido[p]['preco'] = pr['preco']
                                    pedido[p]['total'] = float(pr['preco']) * float(pedido[p]['qtd'])
            except:
                pass
    except:
        pass

    return JsonResponse(pedido, safe=False)


def getSeries(request):
    resultado = {'result': request.GET.get('action', None)}
    return JsonResponse(resultado, safe=False)


def setEntregue(request):
    attributeSet = request.GET.get('attributeSet', None)
    valueSet = request.GET.get('valueSet', None)

    resultado = {'result': request.GET.get('action', None)}
    return JsonResponse(resultado, safe=False)


def setFieldValue(request):
    request.GET.get('attributeSet', None)
    request.GET.get('valueSet', None)
    resultado = {'result': request.GET.get('action', None)}
    return JsonResponse(resultado, safe=False)

def encomendaRecebida(request):

    base64_bytes = request.GET.get('client', None).encode("ascii")
    sample_string_bytes = base64.b64decode(base64_bytes)
    sample_string = sample_string_bytes.decode("ascii")
    client = Client.objects.get(uid=sample_string.split('-')[0])
    form = Form.objects.get(uid=sample_string.split('-')[1])

    if(not (sample_string.split('-')[2] == client.password)):
        return Response("Unauthorized", status=401)

    if(not (str(form.id) in client.forms.split(','))):
        return Response("Unauthorized", status=401)

    valueSet = ValueSet.objects.get(pk=request.GET.get('valueSet', None))
    attribute = Attribute.objects.get(uid=request.GET.get('attribute', None))
    attributeValue = AttributeValue(value=datetime.datetime.now(), attribute=attribute)
    attributeValue.save()
    valueSetAttributeValue = ValueSetAttributeValue(valueSet=valueSet, attributeValue=attributeValue)
    valueSetAttributeValue.save()
    
    return JsonResponse('Operação executada com exito', safe=False)


def getMyHistory(request):

    base64_bytes = request.GET.get('client', None).encode("ascii")
    sample_string_bytes = base64.b64decode(base64_bytes)
    sample_string = sample_string_bytes.decode("ascii")
    client = Client.objects.get(uid=sample_string.split('-')[0])
    form = Form.objects.get(uid=sample_string.split('-')[1])

    if(not (sample_string.split('-')[2] == client.password)):
        return Response("Unauthorized", status=401)

    if(not (str(form.id) in client.forms.split(','))):
        return Response("Unauthorized", status=401)

    if(not(request.GET.get('startDate', None) == None) and not(request.GET.get('endDate', None) == None)):
        sqlFilter = "SELECT * FROM api_valueset WHERE client = '" + sample_string.split('-')[0] + "' AND attributeSet_id = " + str(form.attributeSet.id) + " AND created_at >= '" + request.GET.get(
            'startDate', None) + "' AND created_at <= '" + request.GET.get('endDate', None) + "'"

        valueSets = ValueSet.objects.raw(sqlFilter)
    else:
        sqlFilter = "SELECT * FROM api_valueset WHERE client = '" + \
            sample_string.split(
                '-')[0] + "' AND attributeSet_id = " + str(form.attributeSet.id)
        valueSets = ValueSet.objects.raw(sqlFilter)

    result = []
    for valueSet in valueSets:
        # try:
        vss = ValueSetSerializer(valueSet)
        clientData = {'created_at': valueSet.created_at,
                      'id': valueSet.id,
                      'validationResult': valueSet.validationResult,
                      'validatedBy': vss.data['validatedBy']}

        for attributeValue in valueSet.attributeValues.all():
            if(attributeValue.attribute.uid in request.GET.get('attributes', None).split(',')):

                if attributeValue.attribute.optionSet.displayName != 'default':
                    optionSet = OptionSet.objects.get(
                        pk=attributeValue.attribute.optionSet.id)
                    optionSet = OptionSetSerializer(optionSet)
                    optionSet = optionSet.data
                    for option in range(len(optionSet['options'])):
                        values = attributeValue.value.split(",")
                        for value in values:
                            if(str(optionSet['options'][option]['id']) == str(value)):
                                clientData[attributeValue.attribute.uid] = optionSet['options'][option]['displayName']
                else:
                    clientData[attributeValue.attribute.uid] = attributeValue.value
        if(len(clientData) > 0):
            result.append(clientData)

    return JsonResponse(result, safe=False)


def getClientes(request):
    sqlFilter = "SELECT * FROM api_client WHERE forms IN (" + request.GET.get(
        'forms', None) + ")"
    clientes = Client.objects.raw(sqlFilter)
    result = []
    for cliente in clientes:
        try:
            clientData = {'name': cliente.name, 'uid': cliente.uid,
                          'id': cliente.id, 'pwd': cliente.password}
            for attributeValue in cliente.valueSet.attributeValues.all():
                if(attributeValue.attribute.uid in request.GET.get('attributes', None).split(',')):
                    #print(attributeValue.attribute.optionSet.displayName )
                    if attributeValue.attribute.optionSet.displayName != 'default':
                        # print(attributeValue.attribute.optionSet.id)
                        optionSet = OptionSet.objects.get(
                            pk=attributeValue.attribute.optionSet.id)
                        optionSet = OptionSetSerializer(optionSet)
                        optionSet = optionSet.data
                        for option in range(len(optionSet['options'])):
                            values = attributeValue.value.split(",")
                            for value in values:
                                if(str(optionSet['options'][option]['id']) == str(value)):
                                    clientData[attributeValue.attribute.uid] = optionSet['options'][option]['displayName']
                    else:
                        clientData[attributeValue.attribute.uid] = attributeValue.value
            if(len(clientData) > 0):
                result.append(clientData)
        except:
            pass
    return JsonResponse(result, safe=False)


def getClienteDetails(uid, attributes, includePWD=True):
    cliente = Client.objects.get(uid=uid)
    result = {}
    try:
        if(includePWD):
            clientData = {'name': cliente.name, 'uid': cliente.uid,
                          'id': cliente.id, 'pwd': cliente.password}
        else:
            clientData = {'name': cliente.name,
                          'uid': cliente.uid, 'id': cliente.id}
        for attributeValue in cliente.valueSet.attributeValues.all():
            if(attributeValue.attribute.uid in attributes):
                if attributeValue.attribute.optionSet.displayName != 'default':
                    optionSet = OptionSet.objects.get(
                        pk=attributeValue.attribute.optionSet.id)
                    optionSet = OptionSetSerializer(optionSet)
                    optionSet = optionSet.data
                    for option in range(len(optionSet['options'])):
                        values = attributeValue.value.split(",")
                        for value in values:
                            if(str(optionSet['options'][option]['id']) == str(value)):
                                clientData[attributeValue.attribute.uid] = optionSet['options'][option]['displayName']
                else:
                    clientData[attributeValue.attribute.uid] = attributeValue.value
        if(len(clientData) > 0):
            result = clientData

    except:
        pass
    return result


def getCostumerFormAndData(request):
    client = Client.objects.get(uid=request.GET.get('uid', None))
    client_serializer = ValueSetSerializer(client.valueSet)
    return JsonResponse(client_serializer.data, safe=False)


def getUsers(request):
    sqlFilter = "SELECT * FROM auth_user, api_orgunit_users, api_orgunit WHERE auth_user.is_superuser = 0 AND api_orgunit_users.orgunit_id = api_orgunit.id AND auth_user.id = api_orgunit_users.user_id AND api_orgunit.uid = 'u5hAlwyLbpP'"
    users = User.objects.raw(sqlFilter)
    users = UserSerializer(users, many=True)
    users = users.data
    return JsonResponse(users, safe=False)


def getAgregatedData(request):
    attributeSet = AttributeSet.objects.get(
        uid=request.GET.get('attributeSet', None))

    # get attributes
    if(not(request.GET.get('category', None) == None)):
        attributes = request.GET.get('attributes', None)
        attributes = attributes + ','+request.GET.get('category', None)
        attributes = Attribute.objects.filter(uid__in=attributes.split(','))
    else:
        attributes = Attribute.objects.filter(
            uid__in=request.GET.get('attributes', None).split(','))

    if(not(request.GET.get('startDate', None) == None) and not(request.GET.get('endDate', None) == None)):
        sqlFilter = "SELECT * FROM api_valueset WHERE attributeSet_id = " + str(attributeSet.id) + " AND created_at >= '" + request.GET.get(
            'startDate', None) + "' AND created_at <= '" + request.GET.get('endDate', None) + "'"

        valueSets = ValueSet.objects.raw(sqlFilter)
    else:
        sqlFilter = "SELECT * FROM api_valueset WHERE attributeSet_id = " + \
            str(attributeSet.id)
        valueSets = ValueSet.objects.raw(sqlFilter)

    header = {}
    result = {}

    optionSetMap = {}

    if(not(request.GET.get('category', None) == None)):
        category = None
        for attribute in attributes:
            if(attribute.uid == request.GET.get('category', None)):
                category = attribute
                break

        if(category == None):
            return Response("Category not found", status=404)

        optionSet = OptionSet.objects.get(pk=category.optionSet.id)
        optionSet = OptionSetSerializer(optionSet)
        optionSet = optionSet.data
        for option in range(len(optionSet['options'])):
            optionSetMap[optionSet['options'][option]['id']
                         ] = optionSet['options'][option]['uid']
            result[optionSet['options'][option]['uid']] = {}
            header[optionSet['options'][option]['uid']] = {
                'displayName': optionSet['options'][option]['displayName']}
            for attribute in attributes:
                result[optionSet['options'][option]['uid']][attribute.uid] = 0
                header[optionSet['options'][option]['uid']
                       ][attribute.uid] = attribute.displayName

    else:
        for attribute in attributes:
            header[attribute.uid] = attribute.displayName
            result[attribute.uid] = 0

    for valueSet in valueSets:
        chave = None

        if(not(request.GET.get('category', None) == None)):
            for attributeValue in valueSet.attributeValues.all():
                # print(attributeValue.value)
                if(attributeValue.attribute.uid == request.GET.get('category', None)):
                    # print(attributeValue.value)
                    chave = optionSetMap[attributeValue.value]
                   # break

        # print(optionSetMap)
        for attributeValue in valueSet.attributeValues.all():
            if(attributeValue.attribute.uid in request.GET.get('attributes', None).split(',')):
                if attributeValue.attribute.optionSet.displayName == 'default':
                    if(not(request.GET.get('category', None) == None)):
                        result[chave][attributeValue.attribute.uid] = result[chave][attributeValue.attribute.uid] + \
                            float(attributeValue.value)
                    else:
                        result[attributeValue.attribute.uid] = result[attributeValue.attribute.uid] + \
                            float(attributeValue.value)
    return JsonResponse({'header': header, 'data': result}, safe=False)


def postUser(request):
    permissions = request.data['user_permissions'].copy()
    groups = request.data['groups'].copy()
    #orgUnits = request.data['orgUnits'].copy()

    del request.data['user_permissions']
    del request.data['groups']
    del request.data['orgUnits']

    user = User(**request.data)
    user.set_password(request.data['password'])
    user.save()

    with connection.cursor() as cursor:
        cursor.execute(
            "INSERT INTO api_orgunit_users (id, orgunit_id, user_id) VALUES (NULL, 54, "+str(user.id)+")")

    for i in range(len(permissions)):
        permission = Permission.objects.get(pk=permissions[i]['id'])
        user.user_permissions.add(permission)

    for i in range(len(groups)):
        group = Group.objects.get(pk=groups[i]['id'])
        user.groups.add(group)

    serializer = UserSerializer(user)
    return Response(serializer.data)


def getClientQrCode(request):
    client = Client.objects.get(uid=request.GET.get('client', None))

    sample_string_bytes = client.uid+'-' + \
        request.GET.get('ficha', None)+'-'+client.password + \
        '-'+str(request.GET.get('orgUnit', None))

    base64_bytes = base64.b64encode(sample_string_bytes.encode("ascii"))
    base64_string = base64_bytes.decode("ascii")

    factory = qrcode.image.svg.SvgPathImage
    img = qrcode.make('https://atendimento.co.mz/#/@vumba/client/' +
                      base64_string, image_factory=factory, box_size=20)
    stream = BytesIO()
    img.save(stream)

    # stream.getvalue().decode()

    response = HttpResponse(stream.getvalue().decode(),
                            content_type="image/svg+xml")
    response['Content-Disposition'] = 'attachment; filename=' + \
        client.name+'.svg'
    return response


def getClienteRequest(request):
    attributeSet = AttributeSet.objects.get(
        uid=request.GET.get('attributeSet', None))
    if(not(request.GET.get('startDate', None) == None) and not(request.GET.get('endDate', None) == None)):
        sqlFilter = "SELECT * FROM api_valueset WHERE attributeSet_id = " + str(attributeSet.id) + " AND created_at >= '" + request.GET.get(
            'startDate', None) + "' AND created_at <= '" + request.GET.get('endDate', None) + "'"

        valueSets = ValueSet.objects.raw(sqlFilter)
    else:
        sqlFilter = "SELECT * FROM api_valueset WHERE attributeSet_id = " + \
            str(attributeSet.id)
        valueSets = ValueSet.objects.raw(sqlFilter)

    result = []
    for valueSet in valueSets:
        # try:
        client = getClienteDetails(
            valueSet.client, request.GET.get('clientFields', None).split(','))
        vss = ValueSetSerializer(valueSet)
        clientData = {'client': client, 'created_at': valueSet.created_at,
                      'id': valueSet.id,
                      'validationResult': valueSet.validationResult,
                      'validatedBy': vss.data['validatedBy']}

        for attributeValue in valueSet.attributeValues.all():
            if(attributeValue.attribute.uid in request.GET.get('attributes', None).split(',')):

                if attributeValue.attribute.optionSet.displayName != 'default':
                    optionSet = OptionSet.objects.get(
                        pk=attributeValue.attribute.optionSet.id)
                    optionSet = OptionSetSerializer(optionSet)
                    optionSet = optionSet.data
                    for option in range(len(optionSet['options'])):
                        values = attributeValue.value.split(",")
                        for value in values:
                            if(str(optionSet['options'][option]['id']) == str(value)):
                                clientData[attributeValue.attribute.uid] = optionSet['options'][option]['displayName']
                else:
                    clientData[attributeValue.attribute.uid] = attributeValue.value
        if(len(clientData) > 0):
            result.append(clientData)
        # except:
        #    pass

    return JsonResponse(result, safe=False)


class Plugin(CoreFeatures):

    def __init__(self, *args, **kwargs):
        pass

    def execute(self, uid, request):
        if(request.GET.get('action', None) == None):
            return Response("Action not defined", status=404)
        elif(request.GET.get('action', None) == 'loadForm'):
            return CoreFeatures.loadForm(uid)
        try:
            return globals()[request.GET.get('action', None)](request)
        except KeyError:
            return Response("Action not found", status=404)
