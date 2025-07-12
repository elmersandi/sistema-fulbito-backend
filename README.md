Fulbito App
===========

Sistema de gestión de torneos de fútbol tipo "Mundial de Clubes" usando Django Rest Framework (backend) y React + Vite (frontend).

Estructura del Proyecto
-----------------------
fulbito/
├── backend/      # API en Django Rest Framework
├── frontend/     # Interfaz en React + Vite

Instrucciones para correr el proyecto
-------------------------------------

1. Clonar el repositorio:
   git clone https://github.com/tuusuario/fulbito.git
   cd fulbito

2. Backend (Django)
   - Ir a la carpeta backend:
     cd backend
   - Crear y activar un entorno virtual:
     python -m venv venv
     venv\Scripts\activate   (en Windows)
     source venv/bin/activate  (en Linux/Mac)
   - Instalar dependencias:
     pip install -r requirements.txt
   - Ejecutar migraciones:
     python manage.py migrate
   - Iniciar el servidor:
     python manage.py runserver

   El backend estará disponible en http://127.0.0.1:8000

3. Frontend (React + Vite)
   - Ir a la carpeta frontend:
     cd ../frontend
   - Instalar dependencias:
     npm install
   - Iniciar el servidor de desarrollo:
     npm run dev

   El frontend estará disponible en http://localhost:5173

Notas importantes
-----------------
- El frontend consume la API del backend. Asegúrate de que ambos servidores estén activos.
- Puedes modificar las URLs de la API en los componentes de React si cambias el puerto o el host.
- El backend requiere Pillow para manejo de imágenes (logos de equipos, etc).

Archivos clave
--------------
- requirements.txt : Dependencias de Python/Django
- .gitignore       : Archivos/carpetas ignoradas en el repositorio
- README.txt       : Este archivo

Autores
---
Elmer
Julio 2025


