from django.contrib import admin

from .models import Articulo, Marca, Rubro


class ArticuloAdmin(admin.ModelAdmin):

    list_display = [
        'nombre',
        'descripcion',
        'marca',
        'precio_venta'
    ]

admin.site.register(Articulo, ArticuloAdmin)
admin.site.register(Marca)
admin.site.register(Rubro)

