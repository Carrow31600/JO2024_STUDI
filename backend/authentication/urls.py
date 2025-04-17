

from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import DeleteAccountView, LogoutView, MyTokenObtainPairView, RegisterView, UserUpdateView

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('update/', UserUpdateView.as_view(), name='user-update'),
    path('delete/', DeleteAccountView.as_view(), name='delete_account'),
]
