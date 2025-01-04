
    FROM node:22-alpine3.19
    
    # Crear el directorio y asignar permisos
    RUN mkdir -p /home/node/nest && chown -R node:node /home/node/nest
    
    # Copiar los archivos necesarios
    COPY ./Prod/dist /home/node/nest/dist
    COPY ./package.json /home/node/nest/package.json
    COPY ./Prod/.env /home/node/nest/.env
    COPY ./package-lock.json /home/node/nest/package-lock.json
    COPY ./estaticos /home/node/nest/estaticos
    
    # Establecer el directorio de trabajo
    WORKDIR /home/node/nest
    
    # Instalar dependencias en modo producción
    RUN npm install --production
    
    # Comando para iniciar la aplicación
    CMD ["npm", "run", "start:prod"]


