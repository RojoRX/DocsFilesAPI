---
id: file-update-service
title: File Update Service
sidebar_label: File Update Service
---

El servicio `FileUpdateService` se encarga de actualizar archivos en la base de datos y en el sistema de archivos.

## Dependencias

Este servicio utiliza las siguientes dependencias:

- `@nestjs/common`: Biblioteca de utilidades comunes de NestJS.
- `fs`: Módulo de Node.js para trabajar con el sistema de archivos.
- `uuid`: Biblioteca para generar identificadores únicos universales (UUID).
- `mongoose`: Biblioteca para interactuar con MongoDB.
- `@nestjs/mongoose`: Módulo de integración de NestJS para Mongoose.
- `src/schemas/files.schema`: Esquema del archivo definido en la aplicación.

## Uso

Para utilizar este servicio, primero debe inyectarse en el constructor de la clase donde se va a utilizar. Esto se hace utilizando el decorador `Injectable` y especificando el modelo de archivo utilizando el decorador `InjectModel`.

```typescript
import { Injectable } from '@nestjs/common';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { File, FileDocument, FileCategory } from 'src/schemas/files.schema';

@Injectable()
export class FileUpdateService {
  constructor(
    @InjectModel(File.name) private fileModel: Model<FileDocument>,
  ) {}

  /**
   * Actualiza un archivo en la base de datos y en el sistema de archivos.
   *
   * @param fileId - El ID del archivo a actualizar.
   * @param fileData - Objeto que contiene el tipo de contenido (MIME type) y los datos del archivo en formato base64.
   * @returns Una promesa que se resuelve con el archivo actualizado.
   * @throws Error si ocurre algún problema durante la actualización del archivo.
   */
  async updateFile(fileId: string, fileData: { mime: string, base64: string }): Promise<File> {
    // Implementación del método updateFile
  }

  /**
   * Determina la categoría del archivo según su extensión.
   *
   * @param extension - La extensión del archivo.
   * @returns La categoría del archivo.
   */
  private determineFileCategory(extension: string): FileCategory {
    // Implementación del método determineFileCategory
  }
}
```
Luego, puede llamar al método updateFile con los siguientes parámetros:

fileId: el ID del archivo que se va a actualizar.
fileData: un objeto que contiene la información del archivo actualizado. Debe tener las siguientes propiedades:
mime: el tipo MIME del archivo.
base64: los datos del archivo codificados en base64.
El método devuelve una promesa que se resuelve con el archivo actualizado.

## Ejemplo

```typescript
const updatedFile = await fileUpdateService.updateFile(fileId, {
  mime: 'image/png',
  base64: 'iVBORw0KGg...'
});

```
## Detalles de la implementacion
El método updateFile realiza las siguientes acciones:

- Obtiene el tipo MIME y los datos del archivo desde el objeto fileData.
- Obtiene la extensión del archivo original a partir del tipo MIME.
- Genera un nombre de archivo único utilizando UUID y mantiene la extensión original.
- Crea una ruta para la carpeta de destino utilizando la fecha actual.
- Verifica si el directorio existe y, si no, lo crea.
- Guarda el archivo actualizado en el sistema de archivos.
- Obtiene el archivo existente de la base de datos.
- Si el archivo no existe en la base de datos, lanza un error.
- Actualiza los campos del archivo en la base de datos.
- Además, este servicio incluye un método privado llamado determineFileCategory que determina la categoría del archivo según su extensión.

