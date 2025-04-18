from orders.models import Order
from orders.serializer import OrderSerializer
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated


class OrderViewSet(viewsets.ModelViewSet) : 
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]  # Assurez-vous que l'utilisateur est authentifié

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:  # Vérifiez si l'utilisateur est un administrateur
            return Order.objects.all()  # Les administrateurs peuvent voir toutes les commandes
        else:
            return Order.objects.filter(user=user)  # Les utilisateurs réguliers ne voient que leurs commandes


