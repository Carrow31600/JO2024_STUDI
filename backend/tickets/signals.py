from io import BytesIO
from django.db.models.signals import post_save
from django.dispatch import receiver
import qrcode
from orders.models import Order
from .models import Ticket
from django.core.files import File
from django.core.files.base import ContentFile 

@receiver(post_save, sender=Order)
def create_ticket_on_payment(sender, instance, **kwargs):
    # Vérifiez si la commande est payée et qu'un ticket n'existe pas déjà
    if instance.paid and not Ticket.objects.filter(order=instance).exists():
        # Générer la clé du ticket
        userkey = instance.user.username  # ou toute autre clé unique de l'utilisateur
        orderkey = instance.orderkey
        ticketkey = f"{userkey}-{orderkey}"

        # Créer le ticket
        print("Signal reçu : création de ticket")
        ticket = Ticket.objects.create(order=instance, ticketkey=ticketkey)


        # Générer le QR code
        qr_img = qrcode.make(ticketkey)
        buffer = BytesIO()
        qr_img.save(buffer, format='PNG')

        # Enregistrer le fichier dans le champ ImageField
        file_name = f"qr_{ticketkey}.png"
        ticket.qr_code.save(file_name, ContentFile(buffer.getvalue()), save=False)

        ticket.save()
        print("QR code généré et ticket enregistré")