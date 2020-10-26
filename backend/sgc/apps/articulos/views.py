from rest_framework import viewsets, permissions
from rest_framework.response import Response
from django.core.files.storage import default_storage
from rest_framework.parsers import ( 
                                    FileUploadParser, 
                                    MultiPartParser
                                    )

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
    parser_classes = [MultiPartParser]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
            filter all data from list
        """
        queryset = Articulo.objects.filter(activo=True)
        
        # set filter #####################
        codigo =  self.request.query_params.get('codigo', None)
        if codigo:
            queryset = queryset.filter(codigo=codigo)

        nombre =  self.request.query_params.get('nombre', None)
        if nombre:
            queryset = queryset.filter(nombre__icontains=nombre)

        descripcion =  self.request.query_params.get('descripcion', None)
        if descripcion:
            queryset = queryset.filter(descripcion__icontains=descripcion)
        
        precio_venta =  self.request.query_params.get('precio_venta', None)
        if precio_venta:
            queryset = queryset.filter(precio_venta=precio_venta)

        precio_compra =  self.request.query_params.get('precio_compra', None)
        if precio_compra:
            queryset = queryset.filter(precio_compra=precio_compra)
        
        marca =  self.request.query_params.get('marca', None)
        if marca:
            queryset = queryset.filter(marca__descripcion__icontains=marca)

        rubro =  self.request.query_params.get('rubro', None)
        if rubro:
            queryset = queryset.filter(rubro__descripcion__icontains=rubro)
        #####################################################
        queryset = queryset.order_by('nombre')
        if 'asc' == self.request.query_params.get('nombre_order'): 
            queryset = queryset.order_by('-nombre')
        return queryset

    def create(self, request):
        """
            create a new articulo
        """
        serializer = ArticuloCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'status': 'success', 'pk': serializer.instance.pk})

    def update(self, request, pk=None):
        """
            update articulo data
            params:
                pk: id of instance
        """
        articulo = Articulo.objects.get(pk=pk)
        serializer = ArticuloCreateSerializer(data=request.data, 
                                              instance=articulo)
       
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'status': 'success', 'pk': serializer.instance.pk})

    def destroy(self, request, *args, **kwargs):
        """
            change state of article 
            params:
                pk : id of instance
        """
        articulo = Articulo.objects.get(pk=kwargs['pk'])
        articulo.activo = False
        articulo.save()
        return Response({'status': 'success'})


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
