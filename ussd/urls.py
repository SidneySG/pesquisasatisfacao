from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.index ),
    path('clear', views.clear_ussd ),
    path('ussdapp/json/', views.ussd_json_api ),
]