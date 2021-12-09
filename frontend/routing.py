from django.urls import re_path, path

from .consumers import ChatConsumer, WSConsumer

websocket_urlpatterns = [
    #re_path(r'ws/chat/(?P<room_name>\w+)/$', ChatConsumer.as_asgi()),
    path('ws/same_url', WSConsumer.as_asgi()),
]