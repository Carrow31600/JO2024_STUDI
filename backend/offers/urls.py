from rest_framework import  routers
from offers.views import OfferViewSet




router = routers.DefaultRouter()
router.register ('offer', OfferViewSet)
