from rest_framework import  routers

from competition.views import CompetitionViewSet
from competition.serializer import CompetitionSerializer



router = routers.DefaultRouter()
router.register ('competition', CompetitionViewSet)