from django.db import models
from offers.models import Offer
from competition.models import Competition
from django.contrib.auth.models import User



class Order(models.Model) : 
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    competition = models.ForeignKey(Competition, on_delete=models.CASCADE)
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    paid = models.BooleanField()
    # orderkey = models.CharField(max_length=50,  blank=True, null=True)


