from django.apps import AppConfig

class CampeonatoConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'campeonato'

    def ready(self):
        import campeonato.signals  # 👈 activa las señales
