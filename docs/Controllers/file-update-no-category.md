---
id: file-update-no-cat-controller
title: File Update No Cat Controller
---

# File Update No Cat Controller

El controlador de actualización de archivos sin categoría se encarga de actualizar un archivo existente por su ID en la API, permitiendo solo reemplazos de la misma categoría.

## Rutas

| Método | Ruta                 | Descripción                  |
| ------ | -------------------- | ---------------------------- |
| POST   | /file/update/:id     | Actualizar archivo           |

## Endpoints

### POST /file/update/:id

Actualiza un archivo por su ID, permitiendo solo reemplazos de la misma categoría.

#### Parámetros de ruta

| Nombre | Descripción             | Ejemplo                       |
| ------ | ----------------------- | ----------------------------- |
| id     | ID del archivo          | 123                           |

#### Parámetros del cuerpo

| Nombre | Descripción             | Ejemplo                       |
| ------ | ----------------------- | ----------------------------- |
| file   | Datos del archivo       | { "mime": "image/jpeg", "base64": "3g13g13g13g" } |

#### Respuestas

| Estado HTTP                  | Descripción                        |
| ---------------------------- | ---------------------------------- |
| 200 OK                       | Archivo actualizado correctamente |
| 400 Bad Request              | Error al actualizar el archivo      |

#### Ejemplo de solicitud

```json
{
  "file": {
    "mime": "image/jpeg",
    "base64": "<base64-encoded-file>"
  }
}
