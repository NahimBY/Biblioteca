const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectToDatabase } = require('./public/js/connection/db');
const routes = require('./public/js/connection/routes');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors({
  origin: 'https://biblioteca-ecru.vercel.app/', // Cambia esto al dominio correcto
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "*/*" }));

connectToDatabase().then(() => {
  app.use('/api', routes);

  app.listen(port, () => {
    console.log(`Está ejecutándose en http://localhost:${port}`);
  });

  module.exports = app; // Exporta la aplicación para Vercel
}).catch(err => {
  console.error('No se pudo conectar a la base de datos, cerrando la aplicación');
  process.exit(1);
});
