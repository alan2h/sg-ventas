import json
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase
from rest_framework import status

from .models import (
                     Articulo, 
                     Marca, 
                     Rubro
                    )

from .serializers import ArticuloListSerializer
from apps.sucursales.models import Sucursal


class ArticuloViewSetTestCase(APITestCase):


    url = '/articulos/api/'

    def setUp(self):
        marca = Marca.objects.create(
            descripcion='marca_prueba'
        )
        rubro = Rubro.objects.create(
            descripcion='rubro_prueba'
        )

        sucursal = Sucursal.objects.create(
            nombre='sucursal_prueba'
        )

        Articulo.objects.create(
            nombre='articulo_prueba',
            rubro=rubro,
            marca=marca,
            precio_venta=12.08,
            precio_compra=5.08,
            sucursal=sucursal
        )
        user = User.objects.create_user(
            username='admin',
            password='very-strong-pass-probe'
        )
        self.token = Token.objects.create(user=user)
        self.api_authentication()

    def api_authentication(self):
        self.client.credentials(HTTP_AUTHORIZATION="Token " + str(self.token))

    def test_articulo_list_authenticated(self):

        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_articulo_no_authenticated(self):

        self.client.force_authenticate(user=None)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_articulo_create_authenticated(self):

        data = {
            'nombre': 'articulo_prueba2',
            'rubro': 1,
            'marca': 1,
            'precio_venta': 12.08,
            'precio_compra': 5.08,
            'sucursal': 1
        }

        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)