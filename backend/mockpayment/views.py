from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
import uuid
import random

class MockPaymentViewSet(viewsets.ViewSet):

    @action(detail=False, methods=['post'], url_path='create')
    def create_payment(self, request):
        payment_id = str(uuid.uuid4())
        return Response({
            'payment_id': payment_id,
            'status': 'pending',
            'amount': request.data.get('amount'),
            'currency': request.data.get('currency', 'eur')
        }, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['get'], url_path='status')
    def check_status(self, request, pk=None):
        status_list = ['pending', 'succeeded', 'failed']
        return Response({
            'payment_id': pk,
            'status': random.choice(status_list)
        }, status=status.HTTP_200_OK)
