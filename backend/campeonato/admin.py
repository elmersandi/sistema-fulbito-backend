from django.contrib import admin
from .models import (
    Torneo, Fase, Grupo, Equipo, Jugador,
    Arbitro, Estadio, Partido, EventoPartido,
    TablaPosicion
)

admin.site.register(Torneo)
admin.site.register(Fase)
admin.site.register(Grupo)
admin.site.register(Equipo)
admin.site.register(Jugador)
admin.site.register(Arbitro)
admin.site.register(Estadio)
admin.site.register(Partido)
admin.site.register(EventoPartido)
admin.site.register(TablaPosicion)
