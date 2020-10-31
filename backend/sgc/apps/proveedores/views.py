from django.shortcuts import render
from rest_framework import (viewsets,
                            permissions)

from .models import Proveedor
from .serializers import ProveedorSerializer

class ProveedorViewSet(viewsets.ModelViewSet):

    queryset = Proveedor.objects.filter(activo=True)
    serializer_class = ProveedorSerializer
    permission_classes = [permissions.IsAuthenticated]
