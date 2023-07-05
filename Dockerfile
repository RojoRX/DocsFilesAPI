# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto a la imagen
COPY . /app

# Instalar las dependencias del proyecto
RUN npm install

# Compilar el proyecto
RUN npm run build

# Exponer el puerto 3201
EXPOSE 3201

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]
