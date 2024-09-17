# support/asgi.py
import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from chatbot import routing as chatbot_routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'support.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            chatbot_routing.websocket_urlpatterns
        )
    ),
})
