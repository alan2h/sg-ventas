from django.urls import include, path
from rest_framework import routers

from .views import (
                    ArticuloViewSet,
                    RubroViewSet,
                    MarcaViewSet
                    )

router = routers.DefaultRouter(trailing_slash=False)

router.register(r'api', ArticuloViewSet)
router.register(r'api/marca/', MarcaViewSet)
router.register(r'api/rubro/', RubroViewSet)

urlpatterns = [
    path('', include(router.urls))
]   

urlpatterns += router.urls

