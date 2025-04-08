from django.db import models
from sites.models import Site
from sports.models import Sport

class Competition(models.Model) : 
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    date = models.DateField()
    hour = models.TimeField()

    def __str__(self):
        return self.sport.name
