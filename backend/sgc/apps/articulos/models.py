from django.db import models

from apps.proveedores.models import Proveedor
from apps.sucursales.models import Sucursal


class Rubro(models.Model):

    descripcion = models.CharField(max_length=200)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.descripcion


class Marca(models.Model):

    descripcion = models.CharField(max_length=200)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.descripcion


class Articulo(models.Model):

    nombre = models.CharField(max_length=300, null=False, blank=False)
    codigo = models.CharField(max_length=800, null=True, blank=True)
    descripcion = models.CharField(max_length=300, null=True, blank=True)
    rubro = models.ForeignKey(Rubro, null=True, blank=True,
                              on_delete=models.CASCADE)
    marca = models.ForeignKey(Marca, null=True, blank=True,
    on_delete=models.CASCADE)
    proveedor = models.ForeignKey(Proveedor, null=True, blank=True, 
    on_delete=models.CASCADE)
    precio_venta = models.DecimalField(max_digits=100, decimal_places=2,
    null=False, blank=False)
    precio_compra = models.DecimalField(max_digits=100, decimal_places=2,
    null=False, blank=False)
    imagen = models.ImageField(upload_to='articulos', null=True, blank=True)
    sucursal = models.ForeignKey(Sucursal, 
                                 null=True, blank=True, 
                                 on_delete=models.CASCADE)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Árticulo'
        verbose_name_plural = 'Árticulos'
