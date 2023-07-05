---
id: file-upload-service
title: File Upload Service
sidebar_label: File Upload Service
---

El servicio `FilesService` se encarga de guardar archivos en el sistema de archivos y en la base de datos.

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
import { Injectable, Logger } from '@nestjs/common';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { File, FileDocument, FileCategory } from 'src/schemas/files.schema';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);

  constructor(
    @InjectModel(File.name) private fileModel: Model<FileDocument>,
  ) {}

  /**
   * Guarda un archivo en el sistema de archivos y en la base de datos.
   *
   * @param filename - El nombre original del archivo.
   * @param fileExtension - La extensión del archivo.
   * @param fileData - Los datos del archivo codificados en base64.
   * @returns Una promesa que se resuelve con el archivo guardado.
   * @throws Error si ocurre algún problema durante el proceso de guardado.
   */
  async saveFile(filename: string, fileExtension: string, fileData: string): Promise<File> {
    // Implementación del método saveFile
  }
}
```
Luego, puedes llamar al método saveFile con los siguientes parámetros:

- filename (tipo: string): El nombre original del archivo.
- fileExtension (tipo: string): La extensión del archivo.
- fileData (tipo: string): Los datos del archivo codificados en base64.
- El método devuelve una promesa que se resuelve con el archivo guardado.

## Detalles de la implementación
El método saveFile realiza las siguientes acciones:

- Obtiene la fecha actual para crear una ruta de directorio única.
- Verifica si el directorio de destino existe, y si no, lo crea.
- Genera un nombre de archivo único utilizando UUID y mantiene la extensión original.
- Guarda el archivo en el sistema de archivos utilizando writeFileSync.
- Determina la categoría del archivo según su extensión.
- Crea una instancia del modelo de archivo y asigna los valores correspondientes.
- Guarda el archivo en la base de datos utilizando el método save.
- Registra un mensaje de log indicando la ubicación del archivo guardado.
- Retorna el objeto del archivo guardado.
- Si ocurre algún error durante el proceso de guardado, se registra un mensaje de log de error y se lanza una excepcion