import json

from random import randint
from time import sleep

import datetime
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from api.models import Form, Field, Attribute, AttributeSet, ValueSet, ValueSetAttributeValue, FormSection, Section, SMSInitCommands, SMSSession, SMSSessionField, ValidationRuleAttributes, ValidationRule, AttributeValue
from api.serializers import FormSerializer, FieldSerializer, SectionSerializer, ValidationRuleSerializer, AttributeSerializer
from io import StringIO
import sys
import contextlib
import unidecode

@contextlib.contextmanager
def stdoutIO(stdout=None):
    old = sys.stdout
    if stdout is None:
        stdout = StringIO()
    sys.stdout = stdout
    yield stdout
    sys.stdout = old

def validate(value, attributeID):
    vlas = ValidationRuleAttributes.objects.filter(attribute_id = attributeID)
    vrs = ValidationRule.objects.filter(pk__in=[x.validationRule.id for x in vlas])
    vrs = ValidationRuleSerializer(vrs, many=True)
    vrs = vrs.data
    result = {'isValid': True, 'errors':''}

    for v in vrs:
        # print(v['pythonRule'])
        if(not eval(v['pythonRule'])):
            result['isValid'] = False
            result['errors'] = result['errors']+'\n'+v['helperMessage']
    # for v in vrs:
    #     with stdoutIO() as s:
    #         try:
    #             exec(v['pythonRule'])
    #         except:
    #             print("Something wrong with validation rule")
    #             return False

        # if not s.getvalue():
        #     result['isValid'] = False
        #     result['errors'] = result['errors']+'\n'+v['helperMessage']
    return result


class WSConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

        for i in range(1000):
            self.send(json.dumps({'message':randint(1,100)}))
            sleep(1)

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        phoneNumber = text_data_json['phoneNumber']
        try:
            receivedAt = text_data_json['receivedAt']
        except:
            pass
        value = ""

        """
        Verificar se existe uma secção
        se existir
            identificar o attribute que deve ser preenchido
            validar o dado
            se for invalido
                reenviar a mensagem informando que o campo é inválido
            se for valido
                verificar se é uma opção
                preencher o campo
                adicionar a seccionField
                verificar se é a última mensagem
                se for a última enviar a mensagem de agradecimento
                se não for a última
                    enviar a próxima pergunta
        se não tiver uma seccao
            identificar a ficha atravez do comando
            se a ficha não existir
                notificar o utilizador
            se ela existir
                identificar a primeira pergunta e enviar 
        """
        if(message.lower() == "cancelar"):
            if SMSSession.objects.filter(phoneNumber=phoneNumber, status='opened').count() > 0:
                lastSection = SMSSession.objects.filter(phoneNumber=phoneNumber, status='opened').order_by('-created_at')[0]
                lastSection.status = 'canceled'
                lastSection.save()
                message = 'Sessao cancelada!'
        elif SMSSession.objects.filter(phoneNumber=phoneNumber, status='opened').count() > 0:

                
            lastSection = SMSSession.objects.filter(phoneNumber=phoneNumber, status='opened').order_by('-created_at')[0]
            lastField = None
            if SMSSessionField.objects.filter(session=lastSection).count() > 0:
                lastField = SMSSessionField.objects.filter(session=lastSection).order_by('-created_at')[0]
                lastField = FieldSerializer(lastField.field)
                lastField = lastField.data
              
            fields = []
            form = FormSerializer(lastSection.form)
            form = form.data
            fieldIndex = None
            formSections = FormSection.objects.filter(form_id=form['id'])
            sectionsIds = [x.section_id for x in formSections]
            sections = Section.objects.filter(pk__in=sectionsIds).order_by('order')
            sections = SectionSerializer(sections, many=True)
            sections = sections.data
            for section in form['sections']:
                fieldsIDs = [x['id'] for x in section['fields']]
                flds = Field.objects.filter(pk__in = fieldsIDs).order_by('order')
                flds = FieldSerializer(flds, many=True)
                flds = flds.data
                for field in flds:
                    fields.append(field)

            if lastField == None:
                fieldIndex = 0
                if(len(fields[0]['attribute']['optionSet']['options']) > 0):
                    for v in message.strip().split(' '):
                        for opt in range(len(fields[0]['attribute']['optionSet']['options'])):
                            if(str(int(opt+1)) == str(v.strip())):
                                if(fields[0]['attribute']['control'].lower() == 'checkbox'):
                                    if(value ==""):
                                        value = str(fields[0]['attribute']['optionSet']['options'][opt]['id'])
                                    else:
                                        value = value+',' + str(fields[0]['attribute']['optionSet']['options'][opt]['id'])
                                else:
                                    value = str(fields[0]['attribute']['optionSet']['options'][opt]['id'])
                else:
                    value = message
            else:
                for i in range(len(fields)):
                    if lastField['id'] == fields[i]['id']:
                        #message = fields[field+1].attribute.displayName
                        fieldIndex = i+1
                        if(len(fields[fieldIndex]['attribute']['optionSet']['options']) > 0):
                            for v in message.strip().split(' '):
                                for opt in range(len(fields[fieldIndex]['attribute']['optionSet']['options'])):
                                  
                                    if(str(int(opt+1)) == str(v.strip())):
                                  
                                        if(fields[fieldIndex]['attribute']['control'].lower() == 'checkbox'):
                                            if(value ==""):
                                                value = str(fields[fieldIndex]['attribute']['optionSet']['options'][opt]['id'])
                                            else:
                                                value = value+',' + str(fields[fieldIndex]['attribute']['optionSet']['options'][opt]['id'])
                                        else:
                                            value = str(fields[fieldIndex]['attribute']['optionSet']['options'][opt]['id'])
                        else:
                            value = message
                            break

            #TODO Validar dados
            validationResult = validate(value, fields[fieldIndex]['attribute']['id'])
            if(validationResult['isValid']):
                f = Field.objects.get(pk=int(fields[fieldIndex]['id'])) 
                a = Attribute.objects.get(pk=int(fields[fieldIndex]['attribute']['id'])) 
                smsSessionField = SMSSessionField(phoneNumber=phoneNumber, attribute=a, value=value, session=lastSection, field=f, status="valid")
                smsSessionField.save()
                if(len(fields) == (int(fieldIndex)+1)):
                    lastSection.status = 'closed'
                    lastSection.save()
                    smsSessionFields = SMSSessionField.objects.filter(session=lastSection)
                    #TODO Gravar o valueSet
                    valueSet = {}
                    valueSet["orgUnit"] = lastSection.orgUnit
                    valueSet["formUID"] = form['uid']
                    valueSet["client"] = phoneNumber
                    valueSet["celular"] = phoneNumber
                    valueSet["period"] = f"{datetime.datetime.now():%Y-%m-%d}"
                    valueSet["attributeSet"] = AttributeSet.objects.get(pk=form["attributeSet"]["id"])
                    valueSet = ValueSet(**valueSet)
                    valueSet.save()
                    
                    for s in range(len(smsSessionFields)):
                        attributeValue = AttributeValue(attribute=smsSessionFields[s].attribute, period=valueSet.period, orgUnit=lastSection.orgUnit, value=smsSessionFields[s].value)
                        attributeValue.save()
                        ValueSetAttributeValue.objects.create(valueSet=valueSet, attributeValue=attributeValue)

                    message = unidecode.unidecode(form['successMessage'])
                else:
                    message = unidecode.unidecode(fields[fieldIndex+1]['attribute']['displayName'])
                    if(len(fields[fieldIndex+1]['attribute']['optionSet']['options']) > 0):
                        for opt in range(len(fields[fieldIndex+1]['attribute']['optionSet']['options'])):
                            message = message + '\n '+str(opt+1)+': '+unidecode.unidecode(fields[fieldIndex+1]['attribute']['optionSet']['options'][opt]['displayName'])
            else:
                validationResult
                message = unidecode.unidecode(validationResult['errors']) +'\n'+ unidecode.unidecode(fields[fieldIndex]['attribute']['displayName'])

        else:
            sessionCommand = SMSInitCommands.objects.filter(command__iexact=message.strip().lower())
            if(len(sessionCommand) > 0):
                smsSession = SMSSession(phoneNumber=phoneNumber, status='opened', orgUnit=sessionCommand[0].orgUnit, form=sessionCommand[0].form)
                smsSession.save()
                form = FormSerializer(smsSession.form)

                formSections = FormSection.objects.filter(form_id=form.data['id'])
                sectionsIds = [x.section_id for x in formSections]
                section = Section.objects.filter(pk__in=sectionsIds).order_by('order')[0]
                section = SectionSerializer(section)
                section = section.data
                fieldsIDs = [x['id'] for x in section['fields']]
                field = Field.objects.filter(pk__in = fieldsIDs).order_by('order')[0]
                field = FieldSerializer(field)
                field = field.data

                message = unidecode.unidecode(field['attribute']['displayName'])
                if(len(field['attribute']['optionSet']['options']) > 0):
                    for opt in range(len(field['attribute']['optionSet']['options'])):
                        message = message + '\n'+str(opt+1)+': '+unidecode.unidecode(field['attribute']['optionSet']['options'][opt]['displayName'])
            else:
                message = "Comando inexistente!"
        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': {'message':message, 'phoneNumber':phoneNumber}
            }
        )

    # Receive message from room group
    def chat_message(self, event):
        message = event['message']
        
        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))
