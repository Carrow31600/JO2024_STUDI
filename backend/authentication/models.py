from django.db import models
from django.contrib.auth.models import User
from utils.securitukey import generate_secure_key

class userProfil(models.Model) : 
    account = models.OneToOneField(User,on_delete = models.CASCADE)
    userkey = models.CharField(max_length=50)

    def save(self, *args, **kwargs):
            # Si la userkey n'a pas encore été générée, on la génère
            if not self.userkey:
                self.userkey = generate_secure_key()
            super().save(*args, **kwargs)  # Appel à la méthode `save` d'origine pour enregistrer l'objet