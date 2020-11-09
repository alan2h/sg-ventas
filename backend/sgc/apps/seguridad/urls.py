from django.urls import include, path
from rest_framework import routers

from .views import (
                     SucursalAuthToken
                    )

urlpatterns = [
    path('sucursal-token', SucursalAuthToken.as_view())
]

