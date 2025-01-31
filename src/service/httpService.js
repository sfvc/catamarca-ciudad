import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL, // Variable de entorno de Astro
  headers: {
    "Content-Type": "application/json",
    "token_app": import.meta.env.PUBLIC_TOKEN_APP,
  },
});

// // Interceptor para agregar el token automáticamente en cada petición
// api.interceptors.request.use(
//   (config) => {
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzM4MTY1MTE0fQ.4CpZvVxLtIo4gsx5dRZo-r4yzE9hBvcxiL0CGZB0k0A'
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export { api };