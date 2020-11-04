from django.contrib import admin
from .models import Sucursal


class SucursalAdmin(admin.ModelAdmin):

    list_display = [
        'nombre'
    ]

admin.site.register(Sucursal, SucursalAdmin)
