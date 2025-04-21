from rest_framework import viewsets, status
from rest_framework.response import Response
from tickets.serializer import TicketSerializer
from tickets.models import Ticket


class ControlTicketViewSet(viewsets.ViewSet):
    def list(self, request, *args, **kwargs):
        ticket = Ticket.objects.filter(status=False).first()
        if ticket:
            serializer = TicketSerializer(ticket, context={'request': request})
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"detail": "No available ticket."}, status=status.HTTP_404_NOT_FOUND)
