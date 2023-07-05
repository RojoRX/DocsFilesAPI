---
id: file-delete-controller
title: File Delete Controller
---

# File Delete Controller

El controlador de eliminación de archivos se encarga de eliminar archivos en la API.

## Rutas

| Método | Ruta             | Descripción             |
| ------ | ---------------- | ----------------------- |
| DELETE | /file/:id        | Eliminar archivo por ID |

## Endpoints

### DELETE /file/:id

Elimina un archivo por su ID.

#### Parámetros de ruta

| Nombre | Descripción             | Ejemplo                       |
| ------ | ----------------------- | ----------------------------- |
| id     | ID del archivo          | 1647a69d038e92df93fb8b36a     |

#### Respuestas

| Estado HTTP                  | Descripción                        |
| ---------------------------- | ---------------------------------- |
| 200 OK                       | Archivo eliminado correctamente    |
| 500 Internal Server Error    | Error interno del servidor         |

#### Ejemplo de respuesta (200 OK)

```json
{
  "message": "Archivo eliminado correctamente"
}
