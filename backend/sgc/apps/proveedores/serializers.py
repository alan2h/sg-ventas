
from rest_framework import serializers

from .models import Proveedor

class ProveedorSerializer(serializers.ModelSerializer):

    razon_social = serializers.CharField(required=True)

    class Meta:
        model = Proveedor
        fields = '__all__'
