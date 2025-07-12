from django.db import models

class Torneo(models.Model):
    nombre = models.CharField(max_length=100)
    temporada = models.IntegerField()
    descripcion = models.TextField(blank=True)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nombre} ({self.temporada})"

class Fase(models.Model):
    nombre = models.CharField(max_length=100)
    orden = models.IntegerField()
    torneo = models.ForeignKey(Torneo, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} - {self.torneo.nombre}"

class Grupo(models.Model):
    nombre = models.CharField(max_length=50)
    fase = models.ForeignKey(Fase, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} ({self.fase.nombre})"

class Equipo(models.Model):
    nombre = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='logos/', blank=True, null=True)
    entrenador = models.CharField(max_length=100)
    fundado = models.PositiveIntegerField()
    grupo = models.ForeignKey(Grupo, null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.nombre

class Jugador(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    posicion = models.CharField(max_length=50)
    equipo = models.ForeignKey(Equipo, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombres} {self.apellidos}"

class Arbitro(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    categoria = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.nombres} {self.apellidos}"

class Estadio(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    ciudad = models.CharField(max_length=100)
    capacidad = models.PositiveIntegerField()

    def __str__(self):
        return self.nombre

class Partido(models.Model):
    fecha_hora = models.DateTimeField()
    equipo_local = models.ForeignKey(Equipo, related_name='local', on_delete=models.CASCADE)
    equipo_visitante = models.ForeignKey(Equipo, related_name='visitante', on_delete=models.CASCADE)
    fase = models.ForeignKey(Fase, on_delete=models.CASCADE)
    estadio = models.ForeignKey(Estadio, on_delete=models.CASCADE)
    torneo = models.ForeignKey(Torneo, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.equipo_local.nombre} vs {self.equipo_visitante.nombre} ({self.fecha_hora.strftime('%d-%m-%Y %H:%M')})"

class EventoPartido(models.Model):
    partido = models.ForeignKey(Partido, on_delete=models.CASCADE)
    jugador = models.ForeignKey(Jugador, on_delete=models.CASCADE)
    minuto = models.PositiveIntegerField()
    tipo_evento = models.CharField(max_length=50)
    descripcion = models.TextField(blank=True)

    def __str__(self):
        return f"{self.tipo_evento} - {self.jugador.nombres} {self.jugador.apellidos} ({self.minuto}')"

class TablaPosicion(models.Model):
    torneo = models.ForeignKey(Torneo, on_delete=models.CASCADE)
    equipo = models.ForeignKey(Equipo, on_delete=models.CASCADE)
    jugados = models.IntegerField(default=0)
    puntos = models.IntegerField(default=0)
    goles_favor = models.IntegerField(default=0)
    goles_contra = models.IntegerField(default=0)

    class Meta:
        unique_together = ('torneo', 'equipo')

    def __str__(self):
        return f"{self.equipo.nombre} ({self.puntos} pts)"

