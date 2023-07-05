---
id: file-schema
title: File Schema
---

# File Schema

El schema `File` representa la estructura de un documento de archivo en la base de datos.

## Propiedades

| Nombre         | Tipo           | Requerido | Descripción                                               |
| -------------- | -------------- | --------- | --------------------------------------------------------- |
| filename       | string         | Sí        | Nombre del archivo                                        |
| originalname   | string         | Sí        | Nombre original del archivo                               |
| extension      | string         | Sí        | Extensión del archivo                                     |
| size           | number         | Sí        | Tamaño del archivo en bytes                               |
| filePath       | string         | Sí        | Ruta del archivo en el sistema de archivos                |
| status         | string         | No        | Estado del archivo (valor por defecto: 'active')           |
| category       | FileCategory   | Sí        | Categoría del archivo (valores posibles: 'image', 'document', 'other') |
| createdAt      | Date           | No        | Fecha de creación del archivo (valor por defecto: fecha actual) |

---

Este schema representa la estructura de un documento de archivo en la base de datos. Contiene las siguientes propiedades:

- `filename`: el nombre del archivo.
- `originalname`: el nombre original del archivo.
- `extension`: la extensión del archivo.
- `size`: el tamaño del archivo en bytes.
- `filePath`: la ruta del archivo en el sistema de archivos.
- `status` (opcional): el estado del archivo. Por defecto, se establece como 'active'.
- `category`: la categoría del archivo. Puede ser una de las siguientes opciones: 'image', 'document', 'other'.
- `createdAt` (opcional): la fecha de creación del archivo. Por defecto, se establece como la fecha actual.

