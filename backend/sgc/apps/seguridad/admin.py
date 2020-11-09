from django.contrib import admin

from .models import (
    Usuario,
    Permiso,
    Modulo
)

admin.site.register(Usuario)
admin.site.register(Permiso)
admin.site.register(Modulo)
