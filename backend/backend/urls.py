
from django.contrib import admin
from django.conf import settings
from django.urls import include, path
from rest_framework import routers
from offers.urls import router as offers_router
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.registry.extend(offers_router.registry)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)