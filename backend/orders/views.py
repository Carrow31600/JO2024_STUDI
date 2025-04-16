from orders.models import Order
from orders.serializer import OrderSerializer
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend


class OrderViewSet(viewsets.ModelViewSet) : 
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # filterset_fields = ['user']
    # filter_backends = [DjangoFilterBackend]


