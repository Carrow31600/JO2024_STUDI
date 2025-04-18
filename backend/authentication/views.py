
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from authentication.serializer import MyTokenObtainPairSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"detail": "Déconnexion réussie."}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({"error": "Token invalide."}, status=status.HTTP_400_BAD_REQUEST)
