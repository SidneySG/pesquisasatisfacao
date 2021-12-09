from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse, StreamingHttpResponse

from api.models import (Attribute, Option, OptionSet, AttributeSet, 
                         ValidationRule, OptionSetOptions, AttributeSetAttribute,
                        OrgUnit, Field, Form, Section, SectionField, FormSection, AttributeValue, Stage,
                        Digitadores, ValueSet, ValueSetAttributeValue,)


def getTabularData(request):
    return Response("Table data: "+request.GET.get('attributes', None))

def getParameters(request):
    return Response("Parameters")

def responseTemplate(request):
    return Response("Action not found")

def getSeries(request):
     attributeSet = AttributeSet.objects.filter(uid=request.GET.get('attributeSet', None))

    selectedParams = ['{}'.format(x) for x in request.GET.get('attributes', None)[1:-1].split(',')]
    sqlFilter = "SELECT * FROM api_attribute WHERE uid IN (" + str(selectedParams)[1:-1] + ")"

    attributes = Attribute.objects.raw(sqlFilter)

    selectedParams = ['{}'.format(x) for x in request.GET.get('orgUnits', None)[1:-1].split(',')]
    sqlFilter = "SELECT * FROM api_orgunit WHERE uid IN (" + str(selectedParams)[1:-1] + ")"
    orgUnits = OrgUnit.objects.raw(sqlFilter)

    if(len(attributeSet) <= 0):
        return Response("AttributeSet not found", status=404)

    if(len(attributes) <= 0):
        return Response("Attribute(s) not found", status=404)

    if(len(orgUnits) <= 0):
        return Response("OrgUnit(s) not found", status=404)

    attributeSet = AttributeSet.objects.get(
        uid=request.GET.get('attributeSet', None))

    attributeSetSerialized = AttributeSetSerializer(attributeSet)
    attributeSetSerialized = attributeSetSerialized.data
    attributesSerialized = AttributeSerializer(attributes, many=True)
    attributesSerialized = attributesSerialized.data

    ouids = []

    for orgUnit in orgUnits:
        ouids.append(orgUnit.id)

    if(not(request.GET.get('startDate', None) == None) and not(request.GET.get('endDate', None) == None)):
        sqlFilter = "SELECT * FROM api_valueset WHERE attributeSet_id = " + str(attributeSetSerialized["id"]) + " AND created_at >= '" + utils.localdate_to_utc(request.GET.get(
            'startDate', None)) + "' AND created_at <= '" + utils.localdate_to_utc(request.GET.get('endDate', None)) + "' AND orgUnit_id IN("+str(ouids)[1:-1]+") ORDER BY created_at DESC"
        valueSets = ValueSet.objects.raw(sqlFilter)
    else:
        sqlFilter = "SELECT * FROM api_valueset WHERE attributeSet_id = " + \
            str(attributeSetSerialized["id"]) + " AND orgUnit_id IN(" + \
            str(ouids)[1:-1]+") ORDER BY created_at DESC"
        valueSets = ValueSet.objects.raw(sqlFilter)

    valores = {}
    headers = []
    info = {'valueSets': len(valueSets), 'frequenciaAcumuladaAttributos':{}}

    for attributeSerialized in attributesSerialized:
        if len(attributeSerialized["optionSet"]["options"]) > 0:
            #comentario = []
            info['frequenciaAcumuladaAttributos'][attributeSerialized['uid']] = 0 
            for opt in range(len(attributeSerialized["optionSet"]["options"])):
                headers.append({'uid': attributeSerialized['uid']+"-"+attributeSerialized["optionSet"]["options"][opt]['uid'], 'attributeUID': attributeSerialized['uid'],
                                'displayName': attributeSerialized["optionSet"]["options"][opt]['displayName'], 'attribute': attributeSerialized['displayName']})

                valores[attributeSerialized['uid']+"-" +
                        attributeSerialized["optionSet"]["options"][opt]['uid']] = 0
        # else:
            #valores = {}

    #resultado = {'headers': headers, 'values': valores}
    # return JsonResponse(resultado, safe=False)

    for valueSet in valueSets:
        for attributeValue in valueSet.attributeValues.all():
            if(attributeValue.attribute.uid in [x for x in request.GET.get('attributes', None)[1:-1].split(',')]):
                for attributeSerialized in attributesSerialized:
                    if attributeValue.attribute.uid == attributeSerialized['uid']:
                        if len(attributeSerialized["optionSet"]["options"]) > 0:
                            info['frequenciaAcumuladaAttributos'][attributeSerialized['uid']] = info['frequenciaAcumuladaAttributos'][attributeSerialized['uid']] + 1
                            for option in range(len(attributeSerialized["optionSet"]["options"])):
                                values = attributeValue.value.split(",")
                                for value in values:
                                    if(str(attributeSerialized["optionSet"]["options"][option]["id"]) == value):
                                        valores[attributeSerialized['uid']+"-"+attributeSerialized["optionSet"]["options"][option]["uid"]
                                                ] = valores[attributeSerialized['uid']+"-"+attributeSerialized["optionSet"]["options"][option]["uid"]] + 1
                        else:
                            if(not request.GET.get('normalize', None) == None):
                                if(attributeValue.attribute.uid in request.GET.get('normalize', None)):
                                    normalizers = request.GET.get(
                                        'normalize', None).split(',')
                                    for normalizer in normalizers:
                                        if(attributeValue.attribute.uid in normalizer):
                                            funcao = normalizer[normalizer.find(
                                                "(")+1:normalizer.find(")")]
                                            novoValor = getattr(personalized_functions, funcao)(
                                                attributeValue.value)
                                            try:
                                                valores[novoValor] = valores[novoValor] + 1
                                            except:
                                                headers.append(
                                                    {'uid': novoValor, 'attributeUID': novoValor, 'displayName': novoValor, 'attribute': novoValor})
                                                valores[novoValor] = 1
                                # else:
                                    # valores.append(attributeValue.value)

    resultado = {'headers': headers, 'values': valores, 'info': info}
    return JsonResponse(resultado, safe=False)

class Plugin:

    def __init__(self, *args, **kwargs):
        pass
    
    def execute(self, request):
        if(request.GET.get('action', None) == None):
            return Response("Action not defined", status=404)
        elif(request.GET.get('action', None) == "getTabularData"):
            return getTabularData(request)
        elif(request.GET.get('action', None) == "getSeries"):
            return getSeries(request)
        
        return Response("Action not found", status=404)
