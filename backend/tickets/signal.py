# tickets/signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from orders.models import Order
from tickets.models import Ticket

@receiver(post_save, sender=Order)
def create_ticket_when_order_paid(sender, instance, created, **kwargs):
    # Vérifie que la commande est payée
    if instance.paid:
        # Vérifie qu’un ticket n’existe pas déjà
        if not Ticket.objects.filter(order=instance).exists():
            Ticket.objects.create(order=instance)
