# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependencias e instalar
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Build del sitio en modo server
RUN npm run build

# Etapa de ejecución
FROM node:20-alpine AS runner

WORKDIR /app

# Solo copiar los archivos necesarios para ejecutar
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/astro.config.* ./
COPY --from=builder /app/public ./public

# Exponer el puerto (Astro usa 3000 por defecto)
EXPOSE 3000

# Comando para correr el servidor
CMD ["node", "./dist/server/entry.mjs"]

