
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.contrib.auth.models import User

from utils.securitukey import generate_secure_key
from .models import userProfil


# Modification du serializer natif pour y ajouter des champs du model user afin de renvoyer les infos
# de l'utilisateur en même temps que le token et éviter de créer une méthode spécifique pour le renvoi des infos user
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['username'] = self.user.username
        data['email'] = self.user.email
        data['first_name'] = self.user.first_name
        data['last_name'] = self.user.last_name
        data['id'] = self.user.id
        return data
    

# POUR LA CREATION D'UN NOUVEL UTILISATEUR
class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()

    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'first_name', 'last_name']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        # La clé userkey sera générée automatiquement lors du save du profil
        user_profil = userProfil.objects.create(account=user)  # La userkey est générée lors du save du profil
        return user
    


# MODIFICATION COMPTE UTILISATEUR

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name']

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
