from django.urls import path
from rest_framework import routers
from .views import (DashboardRequestsViewSet, RequestSetViewSet)
from . import views

routers = routers.DefaultRouter(trailing_slash=False)
routers.register('dashboardRequests', DashboardRequestsViewSet, 'dashboardRequests')
routers.register('requestSets', RequestSetViewSet, 'requestSets')

urlpatterns = [*routers.urls,
               path('create', views.createDashboardRequest),
               path('uploadScript', views.uploadDashboardRequestScript),
               path('getRequestSetList', views.getRequestSetList),
               path('loadForm/<slug:slug>', views.loadForm),
               path('getActionList/<slug:slug>', views.getActionList),
               path('get/<slug:slug>', views.resolveDashboardRequest)]