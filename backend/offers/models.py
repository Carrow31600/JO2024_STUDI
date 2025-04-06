from django.db import models

class Offer(models.Model) : 
    name = models.CharField(max_length=100)
    unitprice = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=150)
    picture = models.ImageField(upload_to='offers',blank=True, null=True)
    quantity = models.IntegerField()

    def __str__(self):
        return self.name # pour l'affichage par nom d'offre dans l'interface admin
