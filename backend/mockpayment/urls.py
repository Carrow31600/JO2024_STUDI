from rest_framework import  routers
from mockpayment.views import MockPaymentViewSet


router = routers.DefaultRouter()
router.register('mockpayment', MockPaymentViewSet, basename='mockpayment')