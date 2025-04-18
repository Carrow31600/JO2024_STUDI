from django.db.models.signals import post_save
from django.dispatch import receiver
from orders.models import Order
from .models import Ticket

@receiver(post_save, sender=Order)
def create_ticket_on_payment(sender, instance, **kwargs):
    # Vérifiez si la commande est payée et qu'un ticket n'existe pas déjà
    if instance.paid and not Ticket.objects.filter(order=instance).exists():
        # Générer la clé du ticket
        userkey = instance.user.username  # ou toute autre clé unique de l'utilisateur
        orderkey = instance.orderkey
        ticketkey = f"{userkey}-{orderkey}"

        # Créer le ticket
        Ticket.objects.create(order=instance, ticketkey=ticketkey)
