const sql = require('mssql');

const config = {
  user: 'sa',
  password: '10105',
  server: 'localhost',
  database: 'Biblioteca',
  options: {
    trustedConnection: true,
    encrypt: true,
    trustServerCertificate: true
  }
};

async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Conectado a la base de datos');
  } catch (err) {
    console.error('Error conectando a la base de datos', err);
    throw err; // Lanzar el error para que la aplicación no continúe si no puede conectarse
  }
}

module.exports = {
  sql,
  config,
  connectToDatabase
};

