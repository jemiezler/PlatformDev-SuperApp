from django.urls import include, path
from .views import EscalationView

urlpatterns = [
    path('escalate/', EscalationView.as_view(), name='escalate'),
    path('api/chatbot/', include('chatbot.urls')),
]
