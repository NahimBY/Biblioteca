const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
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
