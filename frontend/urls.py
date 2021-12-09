from django.urls import path, re_path
from . import views


urlpatterns = [
    re_path('(?P<appName>^@.*)', views.client_app ),
    path('mobile', views.mobile ),
    path('landing-page', views.landing_page ),
    path('logo.png', views.logo ),
    path('logo-dark.png', views.logo_dark ),
    path('login', views.login_view ),
    path('logout', views.logout_view ),
    path('', views.index ),
    path('isAuthenticated', views.is_from_authenticated_user),
    path('chat', views.chat),
    path('counter', views.counter),
    path('qrcode', views.qrcodegenerator),
    path('room/<str:room_name>/', views.room, name='room'),
]