# File Update No Category Service

Este servicio permite actualizar un archivo existente en la base de datos y en el sistema de archivos.

## Dependencias

Este servicio depende de los siguientes módulos y servicios:

- `@nestjs/common`: para utilizar el decorador `Injectable`.
- `fs`: para utilizar las funciones `writeFileSync`, `existsSync` y `mkdirSync`.
- `uuid`: para generar nombres de archivo únicos utilizando `uuidv4`.
- `mongoose`: para utilizar el tipo `Model`.
- `@nestjs/mongoose`: para utilizar el decorador `InjectModel`.
- `src/schemas/files.schema`: para utilizar los tipos `File`, `FileDocument` y `FileCategory`.

## Uso

Para utilizar este servicio, primero debe inyectarse en el constructor de la clase donde se va a utilizar. Esto se hace utilizando el decorador `Injectable` y especificando el modelo de archivo utilizando el decorador `InjectModel`.

```typescript
constructor(
  @InjectModel(File.name) private fileModel: Model<FileDocument>,
) {}
```

Luego, puede llamar al método updateFile con los siguientes parámetros:
```typescript


fileId: el ID del archivo que se va a actualizar.
fileData: un objeto que contiene la información del archivo actualizado. Debe tener las siguientes propiedades:
mime: el tipo MIME del archivo.
base64: los datos del archivo codificados en base64.
El método devuelve una promesa que se resuelve con el archivo actualizado.
```
## Ejemplo
```typescript

const updatedFile = await fileUpdateNoCatService.updateFile(fileId, {
  mime: 'image/png',
  base64: 'iVBORw0KGg...'
});
```

## Detalles de implementación
El método updateFile realiza las siguientes acciones:

- Obtiene el tipo MIME y los datos del archivo desde el objeto fileData..
- Obtiene la extensión del archivo original a partir del tipo MIME.
- Genera un nombre de archivo único utilizando UUID y mantiene la extensión original.
- Crea una ruta para la carpeta de destino utilizando la fecha actual.
- Verifica si el directorio existe y, si no, lo crea.
- Guarda el archivo actualizado en el sistema de archivos.
- Obtiene el archivo existente de la base de datos.
- Si el archivo no existe en la base de datos, lanza un error.
- Actualiza los campos del archivo en la base de datos.