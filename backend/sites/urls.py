from rest_framework import  routers
from sites.views import SiteViewSet

router = routers.DefaultRouter()
router.register ('site', SiteViewSet)
