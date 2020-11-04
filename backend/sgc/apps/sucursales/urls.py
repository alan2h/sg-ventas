from django.urls import include, path
from rest_framework import routers

from .views import (
                     SucursalViewSet
                    )

urlpatterns = [
    path('list/', SucursalViewSet.as_view(), name='sucursal-list'),
]


