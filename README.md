# Ecommerce React

Este es un proyecto de ecommerce desarrollado con React, Firebase y Vite.

## Usuario de prueba

- **Email:** patricio.diaz@gmail.com.ar
- **Contraseña:** 123456

## Instalación y ejecución

### Desarrollo local

```bash
npm install
npm run dev
```

### Con Docker

Este proyecto incluye configuración de Docker para facilitar el desarrollo y despliegue.

#### Comandos disponibles

**Construir y ejecutar en modo desarrollo:**
```bash
docker compose up --build
```

**Ejecutar en segundo plano:**
```bash
docker-compose up -d
```

**Detener los contenedores:**
```bash
docker-compose down
```

**Ver logs:**
```bash
docker-compose logs -f frontend
```

**Reconstruir sin caché:**
```bash
docker-compose build --no-cache
```

La aplicación estará disponible en `http://localhost:3000`

## Características

- Autenticación con Firebase Auth
- Base de datos Firestore
- CRUD de productos
- Panel de administración
- Responsive design

## Tecnologías utilizadas

- React 19
- React Router DOM
- Firebase (Auth + Firestore)
- Vite
- Docker