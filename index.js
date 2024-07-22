const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectToDatabase } = require('./public/js/connection/db');
const routes = require('./public/js/connection/routes');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Servir archivos HTML desde el directorio 'views'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "*/*" }));

connectToDatabase().then(() => {
  app.use('/api', routes);

  // Exporta la aplicación para Vercel
  module.exports = app; 
}).catch(err => {
  console.error('No se pudo conectar a la base de datos, cerrando la aplicación');
  process.exit(1);
});
