from rest_framework import viewsets
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from sports.serializer import SportSerializer
from sports.models import Sport

class SportViewSet(viewsets.ModelViewSet) : 
    queryset = Sport.objects.all()
    serializer_class = SportSerializer
    filterset_fields = ['name']
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['name']
