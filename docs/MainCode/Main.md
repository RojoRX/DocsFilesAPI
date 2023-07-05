---
id: main-ts
title: main.ts
sidebar_label: main.ts
---

El archivo `main.ts` es el punto de entrada de la aplicación NestJS. Se encarga de crear la aplicación y configurar diferentes aspectos como filtros, middlewares y la documentación Swagger.

## Dependencias

El archivo `main.ts` utiliza las siguientes dependencias:

- `@nestjs/core`: Biblioteca principal de NestJS.
- `./app.module`: Módulo principal de la aplicación.
- `./all-exceptions.filter`: Filtro personalizado para manejar todas las excepciones.
- `body-parser`: Middleware para analizar el cuerpo de las solicitudes HTTP.
- `./dotenv.config`: Archivo de configuración para cargar variables de entorno.
- `@nestjs/swagger`: Biblioteca para generar la documentación Swagger.

## Uso

El archivo `main.ts` sigue el siguiente flujo de ejecución:

1. Importa las dependencias necesarias, incluyendo el módulo principal de la aplicación (`AppModule`), el filtro de excepciones (`AllExceptionsFilter`), el middleware `body-parser` y el archivo de configuración de variables de entorno (`dotenv.config`).
2. Define una función asincrónica llamada `bootstrap`.
3. Dentro de la función `bootstrap`, se crea una instancia de la aplicación utilizando `NestFactory.create` y se asigna a la constante `app`.
4. Se crea una instancia de `DocumentBuilder` de `@nestjs/swagger` para configurar la documentación Swagger. Se establece el título, la descripción, la versión y se añade una etiqueta.
5. Se crea el documento Swagger utilizando `SwaggerModule.createDocument` pasando la aplicación (`app`) y la configuración (`config`) como parámetros. El resultado se asigna a la constante `document`.
6. Se configura la ruta de la documentación Swagger utilizando `SwaggerModule.setup` pasando la aplicación (`app`), la ruta base (`'api'`) y el documento Swagger (`document`).
7. Se añade el middleware `body-parser` a la aplicación utilizando `app.use(bodyParser.json({ limit: '5mb' }))`. Esto permite analizar el cuerpo de las solicitudes HTTP con un límite máximo de 5 MB.
8. Se configura el filtro de excepciones global utilizando `app.useGlobalFilters(new AllExceptionsFilter())`. Esto permite manejar todas las excepciones de la aplicación de manera centralizada.
9. Se inicia el servidor de la aplicación utilizando `app.listen(process.env.PORT_APPLICATION)`, donde `process.env.PORT_APPLICATION` es el puerto obtenido de las variables de entorno.
10. Imprime el puerto de la aplicación en la consola.

Para ejecutar la aplicación, se llama a la función `bootstrap` al final del archivo.

Ten en cuenta que este archivo asume la existencia de otros archivos y dependencias relacionadas con el funcionamiento de la aplicación NestJS.
