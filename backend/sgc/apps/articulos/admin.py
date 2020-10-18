from django.contrib import admin

from .models import Articulo

class ArticuloAdmin(admin.ModelAdmin):

    list_display = [
        'nombre',
        'descripcion',
        'marca',
        'precio_venta'
    ]

admin.site.register(Articulo, ArticuloAdmin)
