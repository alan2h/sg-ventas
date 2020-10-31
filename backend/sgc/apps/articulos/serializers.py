
from rest_framework import serializers

from .models import Articulo, Marca, Rubro
from apps.proveedores.serializers import ProveedorSerializer


class MarcaSerialzer(serializers.ModelSerializer):

    class Meta:
        model = Marca
        fields = [
            'id',
            'descripcion'
        ]


class RubroSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rubro
        fields = [
            'id',
            'descripcion'
        ]


class ArticuloListSerializer(serializers.ModelSerializer):

    marca = MarcaSerialzer()
    rubro = RubroSerializer()
    proveedor = ProveedorSerializer()

    class Meta:
        model  = Articulo
        fields = [
            'id', 'nombre',
            'codigo', 'descripcion',
            'rubro', 'marca',
            'precio_venta', 'precio_compra',
            'imagen', 'proveedor'
        ]


class ArticuloCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model  = Articulo
        fields = [
            'id', 'nombre',
            'codigo', 'descripcion',
            'rubro', 'marca',
            'precio_venta', 'precio_compra',
            'imagen', 'proveedor'
        ]
