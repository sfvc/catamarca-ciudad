# Etapa 1: Build
FROM node:20-alpine AS builder

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

WORKDIR /app

# Instalar dependencias
COPY . .
RUN npm install
# Construir el proyecto Astro
RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine

WORKDIR /app

# Solo copiamos el artefacto generado y las dependencias necesarias para ejecutar
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Puerto por defecto del servidor Astro en modo standalone
ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000

# Comando para ejecutar la app Astro en producción
CMD ["node", "./dist/server/entry.mjs"]
