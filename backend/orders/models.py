from django.db import models
from utils.securitukey import generate_secure_key
from offers.models import Offer
from competition.models import Competition
from django.contrib.auth.models import User


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    competition = models.ForeignKey(Competition, on_delete=models.CASCADE)
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    paid = models.BooleanField()
    orderkey = models.CharField(max_length=50, blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.pk:  # L'objet existe déjà
            previous = Order.objects.get(pk=self.pk)
            if not previous.paid and self.paid and not self.orderkey:
                self.orderkey = generate_secure_key()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Order #{self.pk} by {self.user.username} – Paid: {self.paid}"
