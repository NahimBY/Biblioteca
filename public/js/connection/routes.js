const express = require('express');
const bcrypt = require('bcrypt');
const { sql, config } = require('./db');
const router = express.Router();
const bookCoverRouter = require('./bookInfo');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const SALT_ROUNDS = 10;

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, message: 'Token no proporcionado' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Token inválido' });
    }

    req.user = decoded; // Adjuntar datos del usuario a la solicitud
    next();
  });
};

const authorizeAdmin = (req, res, next) => {
  if (!req.user || !req.user.is_admin) {
    return res.status(403).json({ success: false, message: 'Acceso denegado' });
  }
  next();
};



router.post('/login', async (req, res) => {
  const { matricula, email, password } = req.body;

  try {
    const result = await sql.query`SELECT * FROM usuarios WHERE matricula = ${matricula}`;
    if (result.recordset.length > 0) {
      const user = result.recordset[0];

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid && user.email === email) {
        const token = jwt.sign({
          id: user.id_usuario,
          matricula: user.matricula,
          nombre: user.nombre,
          email: user.email,
          is_admin: user.is_admin
        }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ success: true, is_admin: user.is_admin, nombre: user.nombre, email: user.email, token });
      } else {
        res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
      }
    } else {
      res.status(401).json({ success: false, message: 'Usuario no encontrado' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});


router.post('/register', async (req, res) => {
  const { nombre, matricula, email, password } = req.body;

  try {
    const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    await sql.query`
      EXEC nuevoUsuario 
      @nombre = ${nombre}, 
      @matricula = ${matricula}, 
      @email = ${email}, 
      @password = ${encryptedPassword}, 
      @is_admin = 0
    `;

    res.json({ success: true });
  } catch (err) {
    console.error(err);

    if (err.number === 2627 || err.number === 2601) {
      res.status(400).json({ success: false, message: 'El correo electrónico o la matrícula ya están registrados.' });
    } else {
      res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
  }
});






router.post('/numPrestamos', async (req, res) => {
  const { matricula } = req.body;

  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
    .input('matricula', sql.Int, matricula)
    .execute('numPrestamos');
    
    res.json({ num_prestamos: result.recordset[0].num_prestamos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});


router.get('/mostrarPrestamos', authenticateToken, async (req, res) => {
  const { matricula } = req.user;

  try {
    const result = await sql.query`SELECT * FROM mostrarPrestamos WHERE matricula = ${matricula}`;
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error ejecutando el procedimiento almacenado');
  }
});

router.get('/mostrarPrestamosAdmin', async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Prestamos`;
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error ejecutando el procedimiento almacenado');
  }
});

router.get('/mostrarLibrosActivos', async (req, res) => {
  try {
    const result = await sql.query('EXEC MostrarLibrosActivos');
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error ejecutando el procedimiento almacenado');
  }
});

router.get('/mostrarTodosLosLibros', async (req, res) => {
  try {
    const result = await sql.query('EXEC MostrarTodosLosLibros');

    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error ejecutando el procedimiento almacenado');
  }
});




router.post('/prestamo', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const { id_libro, titulo, fecha_inicio, fecha_devolucion } = req.body;

  try {
    // Decodificar el token
    const decoded = jwt.verify(token, JWT_SECRET);
    const matricula = decoded.matricula;
    const email = decoded.email;

    // Insertar los datos usando el procedimiento almacenado
    const request = new sql.Request();
    request.input('matricula', sql.Int, matricula);
    request.input('email', sql.VarChar(255), email);
    request.input('id_libro', sql.Int, id_libro);
    request.input('titulo', sql.VarChar(128), titulo);
    request.input('fecha_inicio', sql.Date, fecha_inicio);
    request.input('fecha_devolucion', sql.Date, fecha_devolucion);
    request.input('estado', sql.VarChar(20), 'Pendiente');

    await request.execute('registrarNuevoPrestamo');

    res.json({ success: true, message: 'Prestamo registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar el prestamo:', error);
    res.status(500).json({ success: false, message: 'Error al registrar el prestamo' });
  }
});


router.post('/completarPrestamo', async (req, res) => {
  const { id, id_libro } = req.body;

  try {
    const request = new sql.Request();
    request.input('id', sql.Int, id);
    request.input('id_libro', sql.Int, id_libro);

    await request.execute('prestamoCompleted');

    res.json({ success: true, message: 'El préstamo ha sido marcado como completado.' });
  } catch (error) {
    console.error('Error al completar el prestamo:', error);
    res.status(500).json({ success: false, message: 'Error al completar el prestamo' });
  }
});


router.get('/edit-book', async (req, res) => {
  const { id } = req.query;

  try {
    const result = await sql.query`SELECT * FROM Libro WHERE id_libro = ${id}`;

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).send('Libro no encontrado');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});

router.post('/actualizarLibro', async (req, res) => {
  const { id_libro,
          Titulo,
          Autor,
          Año,
          Paginado,
          Editorial,
          Descripcion,
          Genero,
          Cantidad,
          Estado
        } = req.body;
  
  try {

    const request = new sql.Request()
      .input('id_libro', sql.Int, id_libro)
      .input('Titulo', sql.VarChar, Titulo)
      .input('Autor', sql.VarChar, Autor)
      .input('Año', sql.Int, Año)
      .input('Paginado', sql.Int, Paginado)
      .input('Editorial', sql.VarChar, Editorial)
      .input('Descripcion', sql.VarChar, Descripcion)
      .input('Genero', sql.VarChar, Genero)
      .input('Cantidad', sql.Int, Cantidad)
      .input('Estado', sql.VarChar, Estado);
      
      await request.execute('actualizarLibro');

    res.status(200).json({ success: true, message: 'Libro actualizado con éxito' });

  } catch (error) {
    console.error('Error al actualizar el libro:', error);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el libro',
      error: error.message
    });
  }
});


router.post('/agregarLibro', async (req, res) => {
  const { Titulo,
          Autor,
          Año,
          Paginado,
          Editorial,
          Descripcion,
          Genero,
          Cantidad,
          Estado
        } = req.body;
  
  try {

    const requestAgregar = new sql.Request();

    await requestAgregar
      .input('Titulo', sql.VarChar, Titulo)
      .input('Autor', sql.VarChar, Autor)
      .input('Año', sql.Int, Año)
      .input('Paginado', sql.Int, Paginado)
      .input('Editorial', sql.VarChar, Editorial)
      .input('Descripcion', sql.VarChar, Descripcion)
      .input('Genero', sql.VarChar, Genero)
      .input('Cantidad', sql.Int, Cantidad)
      .input('Estado', sql.VarChar, Estado)
      .execute('agregarLibro');

    res.status(200).json({ success: true, message: 'Libro agregado con éxito' });

  } catch (error) {
    console.error('Error al agregar el libro:', error);
    res.status(500).json({
      success: false,
      message: 'Error al agregar el libro',
      error: error.message
    });
  }
});



router.get('/mostrarIncidentes', async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM mostrarIncidentes`;

    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error ejecutando la vista');
  }
});

router.post('/agregarIncidente', async (req, res) => {
  const { Matricula,
          Email,
          Titulo,
          id_libro,
          Fecha,
          Incidente
        } = req.body;
  
  try {

    const requestIncidente = new sql.Request();

    await requestIncidente
      .input('matricula', sql.Int, Matricula)
      .input('email', sql.VarChar, Email)
      .input('id_libro', sql.Int, id_libro)
      .input('titulo', sql.VarChar, Titulo)
      .input('fecha', sql.Date, Fecha)
      .input('incidente', sql.VarChar, Incidente)
      .execute('registrarNuevoIncidente');

    res.status(200).json({ success: true, message: 'Incidente agregado con éxito' });

  } catch (error) {
    console.error('Error al agregar el incidente:', error);
    res.status(500).json({
      success: false,
      message: 'Error al agregar el incidente',
      error: error.message
    });
  }
});

router.get('/edit-incident', async (req, res) => {
  const { id } = req.query;

  try {
    const result = await sql.query`SELECT * FROM mostrarIncidentes WHERE id = ${id}`;

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).send('Libro no encontrado');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});

router.post('/actualizarIncidente', async (req, res) => {
  const { id, Matricula, Email, Titulo, id_libro, Fecha, Incidente } = req.body;
  
  try {

    const requestIncidente = new sql.Request();

    await requestIncidente
      .input('id', sql.Int, id)
      .input('matricula', sql.Int, Matricula)
      .input('email', sql.VarChar, Email)
      .input('id_libro', sql.Int, id_libro)
      .input('titulo', sql.VarChar, Titulo)
      .input('fecha', sql.Date, Fecha)
      .input('incidente', sql.VarChar, Incidente)
      .execute('actualizarIncidente');

    res.status(200).json({ success: true, message: 'Incidente actualizado con éxito' });

  } catch (error) {
    console.error('Error al actualizar el incidente:', error);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el incidente',
      error: error.message
    });
  }
});



router.get('/buscarMatricula', async (req, res) => {
  const { term } = req.query;
  
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('term', sql.VarChar, `${term}%`)
      .query('SELECT matricula FROM usuarios WHERE matricula LIKE @term');

    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});

router.get('/buscarLibro', async (req, res) => {
  const { term } = req.query;
  
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('term', sql.VarChar, `${term}%`)
      .query('SELECT Titulo FROM Libro WHERE Titulo LIKE @term');

    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});


router.get('/obtenerIdLibro', async (req, res) => {
  const { titulo } = req.query;
  
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('Titulo', sql.VarChar, titulo)
      .query('SELECT id_libro FROM Libro WHERE Titulo = @Titulo');

    res.json(result.recordset);
  } catch (error) {
    console.error('Error al obtener el ID del libro:', error);
    res.status(500).send('Error al obtener el ID del libro');
  }
});



router.get('/librosMasPrestados', async (req, res) => {
  const { month, year } = req.query;

  try {
      const pool = await sql.connect(config);
      const result = await pool.request()
          .input('month', sql.Int, month)
          .input('year', sql.Int, year)
          .execute('LibrosMasPrestados');

      res.json(result.recordset);
  } catch (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
  }
});





router.use('/', bookCoverRouter);

module.exports = router;

