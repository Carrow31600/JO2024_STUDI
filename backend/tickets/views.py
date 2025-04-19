from django.shortcuts import render
from django.apps import AppConfig
from rest_framework import viewsets
from tickets.serializer import TicketSerializer
from tickets.models import Ticket




class TicketViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer