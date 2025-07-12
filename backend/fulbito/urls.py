from django.contrib import admin
from django.urls import path, include  # ← IMPORTANTE: incluye 'include'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('campeonato.urls')),  # ← Aquí se conecta tu API REST
]
