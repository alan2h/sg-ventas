from django.contrib import admin
from .models import Proveedor


class ProveedorAdmin(admin.ModelAdmin):

    list_display = [
        'razon_social',
        'activo'
    ]

admin.site.register(Proveedor, ProveedorAdmin)
