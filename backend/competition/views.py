from django.shortcuts import render
from rest_framework import viewsets
from competition.filters import CompetitionFilter
from competition.serializer import CompetitionSerializer
from competition.models import Competition
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

class CompetitionViewSet(viewsets.ModelViewSet) : 
    queryset = Competition.objects.all()
    serializer_class = CompetitionSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_class = CompetitionFilter  # Remplace filterset_fields
    search_fields = ['sport__name', 'site__name', 'date']