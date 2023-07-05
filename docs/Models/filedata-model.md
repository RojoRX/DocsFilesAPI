---
id: file-data-model
title: File Data Model
---

# File Data Model

El modelo `FileData` representa los datos de un archivo en la base de datos.

## Propiedades

| Nombre         | Tipo     | Requerido | Descripción                   |
| -------------- | -------- | --------- | ----------------------------- |
| filename       | string   | Sí        | Nombre del archivo            |
| originalname   | string   | Sí        | Nombre original del archivo   |
| extension      | string   | Sí        | Extensión del archivo         |
| size           | number   | Sí        | Tamaño del archivo en bytes   |
| filePath       | number   | Sí        | Ruta del archivo en el sistema de archivos   |
| createdAt      | Date     | Sí        | Fecha de creación del archivo |

---

Este modelo representa los datos de un archivo almacenado en la base de datos. Contiene las siguientes propiedades:

- `filename`: el nombre del archivo.
- `originalname`: el nombre original del archivo.
- `extension`: la extensión del archivo.
- `size`: el tamaño del archivo en bytes.
- `filePath`: la ruta del archivo en el sistema de archivos.
- `createdAt`: la fecha de creación del archivo.

