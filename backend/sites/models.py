from django.db import models

class Site(models.Model):
    name = models.CharField(max_length=100)
    postcode = models.CharField(max_length=20)
    city = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    picture = models.ImageField(upload_to='catalog/sites',blank=True, null=True)

    def __str__(self):
        return self.name
