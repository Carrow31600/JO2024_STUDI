from django.db import models

from orders.models import Order

class Ticket(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    ticketkey = models.CharField(max_length=100, unique=True)
    status = models.BooleanField(default=False)   

    def save(self, *args, **kwargs):
        userkey = self.order.user.userkey  # si order a une FK vers user
        orderkey = self.order.orderkey
        self.ticketkey = f'{userkey}-{orderkey}'
        super().save(*args, **kwargs)    

    def __str__(self):
        return self.ticketkey