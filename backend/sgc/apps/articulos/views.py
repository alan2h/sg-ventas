from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .models import (
                     Articulo,
                     Marca,
                     Rubro
                    )
from .serializers import (
                          ArticuloListSerializer,
                          ArticuloCreateSerializer,
                          MarcaSerialzer, 
                          RubroSerializer
                          )

from apps.libs.pagination import StandarResultSetPagination


class ArticuloViewSet(viewsets.ModelViewSet):

    """
    API endpoint get all articles and edit that.
    """
    queryset = Articulo.objects.filter(activo=True)
    serializer_class = ArticuloListSerializer
    pagination_class = StandarResultSetPagination
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request):
        """
            create a new articulo
        """
        serializer = ArticuloCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'status': 'success', 'pk': serializer.instance.pk})


class MarcaViewSet(viewsets.ModelViewSet):

    """
    Api endpoint get all marcas and crud.
    """

    queryset = Marca.objects.filter(activo=True)
    serializer_class = MarcaSerialzer
    permission_classes = [permissions.IsAuthenticated]


class RubroViewSet(viewsets.ModelViewSet):

    """
    Api endpoint get all rubros and crud.
    """

    queryset = Rubro.objects.filter(activo=True)
    serializer_class = RubroSerializer
    permission_classes = [permissions.IsAuthenticated]
