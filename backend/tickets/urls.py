from rest_framework import  routers

from tickets.views import TicketViewSet


router = routers.DefaultRouter()
router.register ('ticket', TicketViewSet)
