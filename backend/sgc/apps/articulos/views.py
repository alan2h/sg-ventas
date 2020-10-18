from rest_framework import viewsets, permissions

from .models import Articulo
from .serializers import ArticuloSerializer


class ArticuloViewSet(viewsets.ModelViewSet):

    """
    API endpoint get all articles and edit that.
    """
    queryset = Articulo.objects.filter(activo=True)
    serializer_class = ArticuloSerializer
    permission_classes = [permissions.IsAuthenticated]
