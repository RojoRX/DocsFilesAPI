---
id: file-request-service
title: File Request Service
sidebar_label: File Request Service
---

El servicio `FileRequest` se encarga de obtener archivos de la base de datos.

## Dependencias

Este servicio utiliza las siguientes dependencias:

- `@nestjs/common`: Biblioteca de utilidades comunes de NestJS.
- `@nestjs/mongoose`: Módulo de integración de NestJS para Mongoose.
- `mongoose`: Biblioteca para interactuar con MongoDB.
- `src/schemas/files.schema`: Esquema del archivo definido en la aplicación.
- `fs`: Módulo de Node.js para trabajar con el sistema de archivos.
- `mime-types`: Biblioteca para determinar el tipo MIME de un archivo.


## Uso

```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File, FileDocument } from 'src/schemas/files.schema';
import { readFileSync } from 'fs';
import * as mimeTypes from 'mime-types';

@Injectable()
export class FileRequest {
  constructor(
    @InjectModel(File.name) private readonly fileModel: Model<FileDocument>,
  ) {}

  /**
   * Obtiene un archivo por su ID.
   *
   * @param id - El ID del archivo a obtener.
   * @returns Una promesa que se resuelve con un objeto que contiene el MIME type y los datos del archivo en formato base64, o un mensaje si el archivo no se encuentra o ha sido eliminado.
   * @throws Error si ocurre algún problema al obtener el archivo.
   */
  async getFileById(id: string): Promise<{ mime: string; base64: string } | { message: string }> {
    // Implementación del método getFileById
  }
}
```
Luego, puedes llamar al método getFileById con el siguiente parámetro:

- id (tipo: string): El ID del archivo que se desea obtener.
El método devuelve una promesa que se resuelve con un objeto que contiene el tipo MIME y los datos del archivo en formato base64. Si el archivo no se encuentra, se lanza un error. Si el archivo ha sido eliminado, se retorna un objeto con un mensaje.
## Métodos

```typescript
getFileById(id: string): Promise<{ mime: string; base64: string } | { message: string }>
Obtiene un archivo por su ID.
```
## Parámetros
```typescript
id (tipo: string): El ID del archivo a obtener.
```
## Retorna
```typescript
Promise<{ mime: string; base64: string } | { message: string }>
 Una promesa que se resuelve con un objeto que contiene el MIME type y los datos del archivo en formato base64 si el archivo se encuentra y está activo, o un objeto con un mensaje si el archivo no se encuentra o ha sido eliminado.
```
## Excepciones
```typescript
Error 
```
Se lanza un error si ocurre algún problema al obtener el archivo.

## Detalles de la implementacion
El método getFileById realiza las siguientes acciones:

- Obtiene el archivo de la base de datos utilizando el método findById.
- Si el archivo no se encuentra, se lanza un error.
- Si el estado del archivo no es "active", se retorna un objeto con un mensaje indicando que el archivo ha sido eliminado.
- Lee los datos del archivo desde el sistema de archivos utilizando readFileSync con la opción de codificación "base64".
- Determina el tipo MIME del archivo utilizando la biblioteca mime-types según la extensión del archivo.
- Crea un objeto que contiene el tipo MIME y los datos del archivo en formato base64.
- Retorna el objeto del archivo.