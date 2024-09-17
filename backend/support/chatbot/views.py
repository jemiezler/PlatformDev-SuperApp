from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

DEPARTMENT_MAPPING = {
    'admissions': 'Admissions Department',
    'financial': 'Financial Aid Department',
    'tech': 'IT Support',
    'general': 'General Support'
}

class EscalationView(APIView):
    def post(self, request):
        user_message = request.data.get('message', '').lower()

        # Basic keyword-based routing logic
        if 'admission' in user_message:
            department = 'admissions'
        elif 'financial aid' in user_message:
            department = 'financial'
        elif 'technical' in user_message or 'help' in user_message:
            department = 'tech'
        else:
            department = 'general'

        return Response({
            'status': 'escalated',
            'department': DEPARTMENT_MAPPING[department]
        }, status=status.HTTP_200_OK)
