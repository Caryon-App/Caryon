# Usa una imagen base de Node.js
FROM node:14

# Instala expo-cli globalmente
RUN npm install -g expo-cli

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que la aplicación estará disponible
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Comando para iniciar la aplicación
CMD ["expo", "start", "--tunnel"]
