from django.urls import include, path
from rest_framework import routers

from .views import ArticuloViewSet

router = routers.DefaultRouter()
router.register(r'api', ArticuloViewSet)

urlpatterns = [
    path('', include(router.urls))
]
