---
id: file-delete-service
title: File Delete Service
sidebar_label: File Delete Service
---

El servicio `FileDeleteService` se encarga de eliminar archivos en la base de datos.

## Dependencias

Este servicio utiliza las siguientes dependencias:

- `@nestjs/common`: Biblioteca de utilidades comunes de NestJS.
- `@nestjs/mongoose`: Módulo de integración de NestJS para Mongoose.
- `mongoose`: Biblioteca para interactuar con MongoDB.
- `src/schemas/files.schema`: Esquema del archivo definido en la aplicación.

## Uso

```typescript
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { File, FileDocument } from 'src/schemas/files.schema';

@Injectable()
export class FileDeleteService {
  constructor(
    @InjectModel(File.name) private fileModel: Model<FileDocument>,
  ) {}

  async deleteFile(fileId: string) {
    // Implementación del método deleteFile
  }
}
```
Luego, puedes llamar al método deleteFile con el siguiente parámetro:

fileId (tipo: string): El ID del archivo que se desea eliminar.
El método devuelve una promesa que se resuelve con un mensaje indicando que el archivo ha sido eliminado correctamente.


## Métodos
```typescript
deleteFile(fileId: string): Promise<string>
Elimina un archivo de la base de datos.
```

## Parámetros

```typescript
fileId (tipo: string): El ID del archivo a eliminar.
Retorna
Promise<string>: Una promesa que se resuelve con un mensaje de éxito si el archivo se elimina correctamente.
Excepciones
Error: Se lanza un error si ocurre algún problema al eliminar el archivo.
```
## Detalles de la implementacion
El método deleteFile realiza las siguientes acciones:

Utiliza el método findByIdAndUpdate del modelo de archivo para actualizar el estado del archivo a "inactive".
- Si el archivo no se encuentra, se lanza un error.
- Retorna un mensaje indicando que el archivo ha sido eliminado correctamente.
- Si ocurre algún error durante el proceso de eliminación del archivo, se lanza una excepción y se propaga hacia arriba.