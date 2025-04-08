from django.shortcuts import render
from rest_framework import viewsets
from sites.serializer import SiteSerializer
from sites.models import Site
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

class SiteViewSet(viewsets.ModelViewSet) : 
    queryset = Site.objects.all()
    serializer_class = SiteSerializer
    filterset_fields = ['name', 'postcode', 'city']
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['name', 'city']
