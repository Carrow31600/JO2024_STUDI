from django.db import models

from orders.models import Order


class Ticket(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    ticketkey = models.CharField(max_length=100, unique=True)
    status = models.BooleanField(default=False) 
    qr_code = models.ImageField(upload_to='qr_codes/', blank=True, null=True) 
      

    def __str__(self):
        return f"Ticket for Order #{self.order.pk} with key {self.ticketkey}"