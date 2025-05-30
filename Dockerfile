# Etapa de construcción
FROM node:22.14.0-slim AS builder

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de producción con Nginx
FROM nginx:alpine AS runner

# Elimina la configuración por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos generados por Astro
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia una configuración personalizada si hace falta
# COPY nginx.conf /etc/nginx/nginx.conf

# Puerto en el que sirve Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
