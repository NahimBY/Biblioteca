const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectToDatabase } = require('./public/js/connection/db');
const routes = require('./public/js/connection/routes');

const app = express();
const port = 3000;

// const allowedOrigins = ['http://localhost:5500', 'http://127.0.0.1:5500'];

app.use((req, res, next) => {
  if (req.path.endsWith('.html')) {
    return res.status(403).send('Access to .html files is forbidden.');
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

// Servir archivos HTML desde el directorio 'views'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/biblioteca', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'biblioteca.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'admin.html'));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "*/*" }));
app.use(cors(
  // {
  //   origin: function (origin, callback) {
  //     if (!origin) return callback(null, true);
  //     if (allowedOrigins.indexOf(origin) === -1) {
  //       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
  //       return callback(new Error(msg), false);
  //     }
  //     return callback(null, true);
  //   },
  //   credentials: true
  // }
));


connectToDatabase().then(() => {
  app.use('/api', routes);

  app.listen(port, () => {
    console.log(`Está ejecutándose en http://localhost:${port}`);
  });
}).catch(err => {
  console.error('No se pudo conectar a la base de datos, cerrando la aplicación');
  process.exit(1);
});
