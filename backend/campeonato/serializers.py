from rest_framework import serializers
from .models import (
    Torneo, Fase, Grupo, Equipo, Jugador,
    Arbitro, Estadio, Partido, EventoPartido,
    TablaPosicion
)

# Serializadores básicos
class TorneoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Torneo
        fields = '__all__'

class FaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fase
        fields = '__all__'

class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grupo
        fields = '__all__'

class EquipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipo
        fields = '__all__'

class JugadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugador
        fields = '__all__'

class ArbitroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arbitro
        fields = '__all__'

class EstadioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estadio
        fields = '__all__'

class PartidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partido
        fields = '__all__'

class TablaPosicionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TablaPosicion
        fields = '__all__'

# Serializadores Avanzados (Nested)

class JugadorSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugador
        fields = ['id', 'nombres', 'apellidos', 'posicion']

class EventoPartidoSerializer(serializers.ModelSerializer):
    jugador = JugadorSimpleSerializer(read_only=True)

    class Meta:
        model = EventoPartido
        fields = ['id', 'minuto', 'tipo_evento', 'descripcion', 'jugador']

class PartidoConEventosSerializer(serializers.ModelSerializer):
    equipo_local = EquipoSerializer(read_only=True)
    equipo_visitante = EquipoSerializer(read_only=True)
    estadio = EstadioSerializer(read_only=True)
    fase = FaseSerializer(read_only=True)
    torneo = TorneoSerializer(read_only=True)
    eventos = EventoPartidoSerializer(source='eventopartido_set', many=True, read_only=True)

    class Meta:
        model = Partido
        fields = [
            'id', 'fecha_hora', 'equipo_local', 'equipo_visitante',
            'fase', 'estadio', 'torneo', 'eventos'
        ]

class TablaPosicionConEquipoSerializer(serializers.ModelSerializer):
    equipo = EquipoSerializer(read_only=True)

    class Meta:
        model = TablaPosicion
        fields = [
            'equipo', 'jugados', 'ganados', 'empatados',
            'perdidos', 'goles_favor', 'goles_contra', 'puntos'
        ]
