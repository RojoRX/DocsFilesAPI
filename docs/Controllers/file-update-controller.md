---
id: file-update-controller
title: File Update Controller
---

# File Update Controller

El controlador de actualización de archivos se encarga de actualizar o reemplazar un archivo existente por su ID en la API.

## Rutas

| Método | Ruta                      | Descripción                        |
| ------ | ------------------------- | ---------------------------------- |
| POST   | /file-category/update/:id | Actualizar archivo solo de su categoría |

## Endpoints

### POST /file-category/update/:id

Actualiza o reemplaza un archivo por su ID.

#### Parámetros de ruta

| Nombre | Descripción             | Ejemplo                       |
| ------ | ----------------------- | ----------------------------- |
| id     | ID del archivo          | 647a69d038e92df93fb8b36a     |

#### Parámetros del cuerpo

| Nombre | Descripción             | Ejemplo                       |
| ------ | ----------------------- | ----------------------------- |
| file   | Datos del archivo       | { "mime": "image/jpeg", "base64":"1k3gt03k01g3....." } |

#### Respuestas

| Estado HTTP                  | Descripción                        |
| ---------------------------- | ---------------------------------- |
| 200 OK                       | Archivo actualizado correctamente |
| 400 Bad Request              | Solicitud inválida                  |

#### Ejemplo de solicitud

```json
{
  "file": {
    "mime": "image/jpeg",
    "base64": "<base64-encoded-file>"
  }
}
