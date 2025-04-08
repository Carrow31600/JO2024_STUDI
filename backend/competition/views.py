from django.shortcuts import render
from rest_framework import viewsets
from competition.serializer import CompetitionSerializer
from competition.models import Competition
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

class CompetitionViewSet(viewsets.ModelViewSet) : 
    queryset = Competition.objects.all()
    serializer_class = CompetitionSerializer
    filterset_fields = ['sport__name', 'site__name']
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['sport__name', 'site__name', 'date']