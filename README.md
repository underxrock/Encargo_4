# API de Gestión de Productos - Evaluación Semana 4

## Descripción
Esta es una API RESTful desarrollada con **Node.js** y **Express.js** que permite gestionar un inventario de productos (basado en el sistema de accesos de una RTU industrial). 

## Características Técnicas
* **Framework:** Express.js
* **Formato de datos:** JSON
* **Arquitectura:** Separación de rutas y servidor (Modularización básica).
* **Persistencia:** Array de objetos en archivo externo (`data.js`).

## Estructura del Proyecto
* `index.js`: Punto de entrada del servidor y configuración de middlewares.
* `routes.js`: Definición de los endpoints CRUD (GET, POST, PUT, DELETE).
* `data.js`: Almacenamiento temporal de los datos de productos.

## Instalación y Ejecución
1. Clonar el repositorio.
2. Instalar las dependencias:
   ```bash
   npm install