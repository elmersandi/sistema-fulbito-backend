from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import EventoPartido, TablaPosicion

@receiver(post_save, sender=EventoPartido)
def actualizar_tabla_posicion(sender, instance, created, **kwargs):
    if not created:
        return

    if instance.tipo_evento != "Gol":
        return

    partido = instance.partido
    jugador = instance.jugador
    equipo = jugador.equipo
    torneo = partido.torneo

    # Determinar si es local o visitante
    es_local = (equipo == partido.equipo_local)
    rival = partido.equipo_visitante if es_local else partido.equipo_local

    # Obtener o crear registros en tabla
    pos_eq, _ = TablaPosicion.objects.get_or_create(equipo=equipo, torneo=torneo)
    pos_rival, _ = TablaPosicion.objects.get_or_create(equipo=rival, torneo=torneo)

    # Sumar gol
    pos_eq.goles_favor += 1
    pos_rival.goles_contra += 1

    # Guardar temporal (los puntos se ajustarán después)
    pos_eq.save()
    pos_rival.save()

    # Contar goles totales por equipo en este partido
    goles_local = EventoPartido.objects.filter(partido=partido, tipo_evento="Gol", jugador__equipo=partido.equipo_local).count()
    goles_visitante = EventoPartido.objects.filter(partido=partido, tipo_evento="Gol", jugador__equipo=partido.equipo_visitante).count()

    # Resetear jugados/puntos
    for eq, pos in [(partido.equipo_local, pos_eq), (partido.equipo_visitante, pos_rival)]:
        pos = TablaPosicion.objects.get(equipo=eq, torneo=torneo)
        pos.jugados = 1
        pos.ganados = 0
        pos.empatados = 0
        pos.perdidos = 0
        pos.puntos = 0

    # Asignar resultado
    if goles_local > goles_visitante:
        pos_eq = TablaPosicion.objects.get(equipo=partido.equipo_local, torneo=torneo)
        pos_eq.ganados = 1
        pos_eq.puntos = 3

        pos_rival = TablaPosicion.objects.get(equipo=partido.equipo_visitante, torneo=torneo)
        pos_rival.perdidos = 1

    elif goles_visitante > goles_local:
        pos_eq = TablaPosicion.objects.get(equipo=partido.equipo_visitante, torneo=torneo)
        pos_eq.ganados = 1
        pos_eq.puntos = 3

        pos_rival = TablaPosicion.objects.get(equipo=partido.equipo_local, torneo=torneo)
        pos_rival.perdidos = 1

    else:  # Empate
        for eq in [partido.equipo_local, partido.equipo_visitante]:
            pos = TablaPosicion.objects.get(equipo=eq, torneo=torneo)
            pos.empatados = 1
            pos.puntos = 1

    # Guardar todo
    pos_eq.save()
    pos_rival.save()
