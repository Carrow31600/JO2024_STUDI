from rest_framework.routers import DefaultRouter
from .views import ControlTicketViewSet

router = DefaultRouter()
router.register(r'controleticket', ControlTicketViewSet, basename='controleticket')

urlpatterns = router.urls
