from django.db import models
from django.contrib.auth.models import User

class userProfil(models.Model) : 
    account = models.OneToOneField(User,on_delete = models.CASCADE)
    userkey = models.CharField(max_length=15)
