from django.urls import path, include
from rest_framework import routers
from .views import (
    TorneoViewSet, FaseViewSet, GrupoViewSet, EquipoViewSet, JugadorViewSet,
    ArbitroViewSet, EstadioViewSet, PartidoViewSet, EventoPartidoViewSet,
    TablaPosicionViewSet, tabla_posiciones_publica, schedule_por_fase
)

router = routers.DefaultRouter()
router.register(r'torneos', TorneoViewSet)
router.register(r'fases', FaseViewSet)
router.register(r'grupos', GrupoViewSet)
router.register(r'equipos', EquipoViewSet)
router.register(r'jugadores', JugadorViewSet)
router.register(r'arbitros', ArbitroViewSet)
router.register(r'estadios', EstadioViewSet)
router.register(r'partidos', PartidoViewSet)
router.register(r'eventos', EventoPartidoViewSet)
router.register(r'tabla-posiciones', TablaPosicionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('public/standings/<int:torneo_id>/', tabla_posiciones_publica, name='tabla-posiciones-publica'),
    path('public/schedule/<int:fase_id>/', schedule_por_fase, name='schedule-por-fase'),
]

