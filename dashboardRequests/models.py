from django.db import models
#from api.models import ValidationRule


class RequestSet(models.Model):
    uid = models.CharField(max_length=11, unique=True)
    code = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255, unique=True)
    displayName = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class DashboardRequest(models.Model):
    uid = models.CharField(max_length=11, unique=True)
    code = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255, unique=True)
    requestSet = models.ForeignKey(
        RequestSet, on_delete=models.PROTECT, blank=True, null=True)
    action = models.CharField(max_length=255)
    method = models.CharField(max_length=7)
    displayName = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Section(models.Model):
    displayName = models.CharField(max_length=255)
    order = models.IntegerField()
    dashboardRequest = models.ForeignKey(
        DashboardRequest, on_delete=models.PROTECT, blank=True, null=True)


class DashboardParameter(models.Model):
    name = models.CharField(max_length=255)
    displayName = models.CharField(max_length=255)
    control = models.CharField(max_length=255, blank=True)
    key = models.CharField(max_length=255, blank=True, null=True)
    dataSourceParammeters = models.CharField(max_length=255, blank=True, null=True)
    dataSourceKey = models.JSONField(max_length=255, blank=True, null=True)
    optionLabel = models.CharField(max_length=255, blank=True, null=True)
    dataSource = models.CharField(max_length=300, blank=True, null=True)
    order = models.IntegerField()
    defaultValue = models.CharField(
        max_length=255, blank=True, default='', null=True)
    isMultiple = models.BooleanField(default=False)
    description = models.TextField(blank=True, null=True, default='')
    section = models.ForeignKey(
        Section, on_delete=models.PROTECT, blank=True, null=True)
    validationRules = models.ManyToManyField(
        'api.ValidationRule', through='ValidationRuleAttributes')
    onChange = models.CharField(
        max_length=300, blank=True, default='', null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ValidationRuleAttributes(models.Model):
    dashboardParameter = models.ForeignKey(
        DashboardParameter, on_delete=models.PROTECT)
    validationRule = models.ForeignKey(
        'api.ValidationRule', on_delete=models.PROTECT, related_name='validationRules_dashboardParameter')
