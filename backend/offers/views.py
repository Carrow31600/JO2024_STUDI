from rest_framework import viewsets, permissions
from rest_framework.permissions import BasePermission

from offers.serializer import OfferSerializer
from .models import Offer


# Permission pour l'accès en lecture à tout le monde
# et l'accès en création/modification/suppression uniquement à l'administrateur
class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS: # lecture pour tout le monde
            return True
        return request.user and request.user.is_staff # écriture pour l'aadmin



class OfferViewSet(viewsets.ModelViewSet):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer
    permission_classes = [IsAdminOrReadOnly] # application des permissions personnalisées
