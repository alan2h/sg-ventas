
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated 

from .serializers import SucursalSerializer
from .models import Sucursal


class SucursalViewSet(ListAPIView):

    queryset = Sucursal.objects.filter(activo=True)
    serializer_class = SucursalSerializer
    permission_classes = [IsAuthenticated]

