from django.db import models


class Persona(models.Model):

    nombre = models.CharField(max_length=300, null=False, blank=False)
    apellido = models.CharField(max_length=300, null=False, blank=False)
    
    def __str__(self):
        return '%s, %s' % (self.nombre, self.apellido)

    class Meta:
        verbose_name = 'Persona'
        verbose_name = 'Personas'
