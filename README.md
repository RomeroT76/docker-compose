# Aplicación Web con Angular y Java (Spring Boot)

Este repositorio contiene una aplicación web full-stack que utiliza Angular para el frontend y Java (Spring Boot) para el backend. La aplicación se despliega utilizando contenedores Docker, facilitando la configuración y la portabilidad del proyecto.

## Estructura del Proyecto

El proyecto está organizado en los siguientes directorios:

- **frontend/**: Contiene la aplicación Angular.
- **backend/**: Contiene la aplicación Java (Spring Boot).
- **docker-compose.yml**: Archivo de configuración para orquestar los contenedores.

## Tecnologías Utilizadas

- **Frontend**: Angular
- **Backend**: Java (Spring Boot)
- **Base de Datos**: PostgreSQL
- **Gestión de Contenedores**: Docker y Docker Compose
- **Servidor Web**: Nginx
- **Herramientas de Administración**: pgAdmin y Netdata

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- Docker
- Docker Compose
- Node.js (para desarrollo local del frontend)
- Java 21 (para desarrollo local del backend)

## Configuración del Entorno

### 1. Frontend (Angular)

El frontend está empaquetado en un contenedor Docker utilizando una imagen basada en Node.js y Nginx.

**Dockerfile:**
- La imagen base es `node:22.11.0-alpine` para la etapa de construcción.
- Se compila la aplicación Angular con `npm run build --prod`.
- La aplicación se sirve utilizando Nginx.

### 2. Backend (Java)

El backend utiliza una imagen basada en `openjdk:21-jdk` para ejecutar la aplicación Java.

**Dockerfile:**
- Se utiliza `openjdk:21-jdk` como imagen base.
- El archivo JAR generado (`backend-0.0.1-SNAPSHOT.jar`) se copia al contenedor y se ejecuta con `java -jar`.

### 3. Base de Datos (PostgreSQL)

El contenedor de PostgreSQL utiliza la imagen oficial y expone el puerto `5432`. Los datos se almacenan en volúmenes persistentes para evitar la pérdida de información.

### 4. Herramientas Adicionales

- **pgAdmin**: Herramienta para administrar la base de datos PostgreSQL a través de una interfaz gráfica web.
- **Netdata**: Herramienta de monitoreo para visualizar el rendimiento del sistema y de los contenedores.

## Uso

### Iniciar la Aplicación

Para iniciar todos los servicios, ejecuta el siguiente comando en el directorio raíz del proyecto:

## bash
docker-compose up levanta el servicio
## Acceso a la Aplicación
Frontend: http://localhost
Backend API: http://localhost:8080
pgAdmin: http://localhost:5050
Netdata: http://localhost:19999
