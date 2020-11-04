from django.db import models


class Sucursal(models.Model):

    nombre = models.CharField(max_length=300, 
                              null=False, 
                              blank=False)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Sucursal'
        verbose_name_plural = 'Sucursales'
