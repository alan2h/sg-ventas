from django.db import models

from django.contrib.auth.models import User
from apps.sucursales.models import Sucursal


class Permiso(models.Model):

    nombre = models.CharField(max_length=300,
                              null=False,
                              blank=False)

    def __str__(self):
        return self.nombre



class Modulo(models.Model):

    nombre = models.CharField(max_length=300,
                              null=False,
                              blank=False)
    permiso = models.ManyToManyField(Permiso)

    def __str__(self):
        return self.nombre


class Usuario(User):

    modulo = models.ManyToManyField(Modulo)
    sucursal = models.ForeignKey(Sucursal,
                                 blank=True,
                                 null=True,
                                 on_delete=models.CASCADE)


    def __str__(self):
        return self.username

