
from django.contrib import admin
from django.conf import settings
from django.urls import include, path
from rest_framework import routers
from offers.urls import router as offers_router
from sites.urls import router as sites_router
from sports.urls import router as sports_router
from competition.urls import router as competition_router
from orders.urls import router as orders_router
from tickets.urls import router as tickets_router
from mockpayment.urls import router as mockpayment_router
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.registry.extend(offers_router.registry)
router.registry.extend(sites_router.registry)
router.registry.extend(competition_router.registry)
router.registry.extend(sports_router.registry)
router.registry.extend(tickets_router.registry)
router.registry.extend(orders_router.registry)
router.registry.extend(mockpayment_router.registry)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('auth/', include('authentication.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)