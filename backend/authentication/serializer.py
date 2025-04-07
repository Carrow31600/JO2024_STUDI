
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# Modification du serializer natif pour y ajouter des champs du model user afin de renvoyer les infos
# de l'utilisateur en même temps que le token et éviter de créer une méthode spécifique pour le renvoi des infos user
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['username'] = self.user.username
        data['email'] = self.user.email
        data['first_name'] = self.user.first_name
        data['last_name'] = self.user.last_name
        return data