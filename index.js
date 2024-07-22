const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./public/js/connection/db');
const routes = require('./public/js/connection/routes');

const app = express();
const port = 3000;

const allowedOrigins = ['http://localhost:5500', 'http://127.0.0.1:5500', 'https://biblioteca-livid.vercel.app/'];


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "*/*" }));
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));


connectToDatabase().then(() => {
  app.use('/api', routes);

  app.listen(port, () => {
    console.log(`Está ejecutándose en http://localhost:${port}`);
  });
}).catch(err => {
  console.error('No se pudo conectar a la base de datos, cerrando la aplicación');
  process.exit(1);
});
