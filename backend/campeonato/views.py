from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import F

from .models import (
    Torneo, Fase, Grupo, Equipo, Jugador,
    Arbitro, Estadio, Partido, EventoPartido,
    TablaPosicion
)

from .serializers import (
    TorneoSerializer, FaseSerializer, GrupoSerializer, EquipoSerializer,
    JugadorSerializer, ArbitroSerializer, EstadioSerializer,
    PartidoSerializer, EventoPartidoSerializer, TablaPosicionSerializer,
    PartidoConEventosSerializer, TablaPosicionConEquipoSerializer
)

# ViewSets CRUD Básicos
class TorneoViewSet(viewsets.ModelViewSet):
    queryset = Torneo.objects.all()
    serializer_class = TorneoSerializer

class FaseViewSet(viewsets.ModelViewSet):
    queryset = Fase.objects.all()
    serializer_class = FaseSerializer

class GrupoViewSet(viewsets.ModelViewSet):
    queryset = Grupo.objects.all()
    serializer_class = GrupoSerializer

class EquipoViewSet(viewsets.ModelViewSet):
    queryset = Equipo.objects.all()
    serializer_class = EquipoSerializer

class JugadorViewSet(viewsets.ModelViewSet):
    queryset = Jugador.objects.all()
    serializer_class = JugadorSerializer

class ArbitroViewSet(viewsets.ModelViewSet):
    queryset = Arbitro.objects.all()
    serializer_class = ArbitroSerializer

class EstadioViewSet(viewsets.ModelViewSet):
    queryset = Estadio.objects.all()
    serializer_class = EstadioSerializer

class PartidoViewSet(viewsets.ModelViewSet):
    queryset = Partido.objects.all()
    serializer_class = PartidoSerializer

class EventoPartidoViewSet(viewsets.ModelViewSet):
    queryset = EventoPartido.objects.all()
    serializer_class = EventoPartidoSerializer

class TablaPosicionViewSet(viewsets.ModelViewSet):
    queryset = TablaPosicion.objects.all()
    serializer_class = TablaPosicionSerializer


# 📊 Vistas públicas avanzadas
@api_view(['GET'])
def tabla_posiciones_publica(request, torneo_id):
    posiciones = TablaPosicion.objects.filter(torneo_id=torneo_id).annotate(
        diferencia_goles=F('goles_favor') - F('goles_contra')
    ).order_by('-puntos', '-diferencia_goles')

    serializer = TablaPosicionConEquipoSerializer(posiciones, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def schedule_por_fase(request, fase_id):
    partidos = Partido.objects.filter(fase_id=fase_id).order_by('fecha_hora')
    serializer = PartidoConEventosSerializer(partidos, many=True)
    return Response(serializer.data)
