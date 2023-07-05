---
id: files-req-controller
title: Files Request Controller
---

# Files Request Controller

El controlador de solicitudes de archivos se encarga de obtener archivos por su ID en la API.

## Rutas

| Método | Ruta             | Descripción             |
| ------ | ---------------- | ----------------------- |
| GET    | /file/:id        | Obtener archivo por ID  |

## Endpoints

### GET /file/:id

Obtiene un archivo por su ID.

#### Parámetros de ruta

| Nombre | Descripción             | Ejemplo                       |
| ------ | ----------------------- | ----------------------------- |
| id     | ID del archivo          | 647a69d038e92df93fb8b36a     |

#### Respuestas

| Estado HTTP                  | Descripción                        |
| ---------------------------- | ---------------------------------- |
| 200 OK                       | Archivo encontrado                 |
| 404 Not Found                | Archivo no encontrado              |

#### Ejemplo de respuesta (200 OK)

```json
{
  "file": {
    // Detalles del archivo
  }
}
