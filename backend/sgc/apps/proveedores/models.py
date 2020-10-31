from django.db import models

from apps.personas.models import Persona


class Proveedor(models.Model):

    razon_social = models.CharField(max_length=300,
                                    null=False,
                                    blank=False)
    contacto = models.ForeignKey(Persona, null=True,
                                 blank=True,
                                 on_delete=models.CASCADE)

    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.razon_social

    class Meta:
        verbose_name = 'Proveedor'
        verbose_name_plural = 'Proveedores'

