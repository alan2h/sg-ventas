from django.urls import include, path
from rest_framework import routers

from .views import ProveedorViewSet

router = routers.DefaultRouter()

router.register(r'api', ProveedorViewSet, basename='Proveedor')

urlpatterns = [
    path('', include(router.urls))
]

urlpatterns += router.urls

