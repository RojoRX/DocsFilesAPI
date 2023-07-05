---
id: files-controller
title: File Upload Controller
---

# Files Controller

El controlador de archivos maneja la subida de archivos a la API.

## Rutas

| Método | Ruta                | Descripción                |
| ------ | ------------------- | -------------------------- |
| POST   | /files/upload       | Subir un archivo           |

## Endpoints

### POST /files/upload

Sube un archivo en base64 a la API.

#### Encabezados de solicitud

| Nombre         | Descripción                    | Obligatorio | Valor predeterminado   |
| -------------- | ------------------------------ | ----------- | ---------------------- |
| Content-Type   | Tipo de contenido de la solicitud | Sí          | application/json       |

#### Cuerpo de solicitud

```json
{
  "file": {
    "mime": "string",
    "base64": "string"
  }
}
