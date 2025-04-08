from django.db import models

class Sport(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    picture = models.ImageField(upload_to='catalog/sports',blank=True, null=True)

    def __str__(self):
        return self.name
