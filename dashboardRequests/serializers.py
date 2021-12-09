from rest_framework import serializers
from dashboardRequests.models import (DashboardRequest, DashboardParameter, Section, RequestSet)
from api.models import (ValidationRule)

class DynamicFieldsModelSerializer(serializers.ModelSerializer):
    """
    A ModelSerializer that takes an additional `fields` argument that
    controls which fields should be displayed.
    """

    def __init__(self, *args, **kwargs):
        # Don't pass the 'fields' arg up to the superclass
        fields = kwargs.pop('fields', None)
        if 'context' in kwargs:
            if 'fields' in kwargs['context']:
                fields = kwargs['context']['fields'].split(',')

        # Instantiate the superclass normally
        super(DynamicFieldsModelSerializer, self).__init__(*args, **kwargs)

        if fields is not None:
            # Drop any fields that are not specified in the `fields` argument.
            allowed = set(fields)
            existing = set(self.fields)
            for field_name in existing - allowed:
                self.fields.pop(field_name)


class ValidationRuleSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = ValidationRule
        fields = ('name', 'displayName', 'dataType', 'rule',
                  'isRegex', 'helperMessage', 'description')

class DashboardRequestSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = DashboardRequest
        fields = '__all__'

class SectionSerializer(DynamicFieldsModelSerializer):
    dashboardRequest = DashboardRequestSerializer
    class Meta:
        model = Section
        fields = '__all__'

class DashboardParameterSerializer(DynamicFieldsModelSerializer):
    section = SectionSerializer
    validationRules = ValidationRuleSerializer(many=True)
    class Meta:
        model = DashboardParameter
        fields = '__all__'

class RequestSetSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = RequestSet
        fields = '__all__'
