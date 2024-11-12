const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser'); 
const bcrypt = require('bcrypt'); // Para encriptar contraseñas
const cors = require('cors'); // Mecanismo de seguridad

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Reservas',
    port: 3311
});

// Conectar a la base de datos
db.connect(error => {
    if (error) throw error;
    console.log('Conectado a la base de datos MySQL');
});

// Rutas para el login y registro
app.post('/api/registro', async (req, res) => {
    const { correo_electronico, nombre_usuario, contrasena } = req.body;
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const query = 'INSERT INTO usuarios (correo_electronico, nombre_usuario, contrasena) VALUES (?, ?, ?)';
    db.query(query, [correo_electronico, nombre_usuario, hashedPassword], (error, results) => { // El password es encriptado con bcrypt
        if (error) {
            res.status(500).json({ error: 'Error al registrar usuario' });
            return;
        }
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    });
});

app.post('/api/login', async (req, res) => {
    const { nombre_usuario, contrasena } = req.body;

    const query = 'SELECT * FROM usuarios WHERE nombre_usuario = ?';
    db.query(query, [nombre_usuario], async (error, results) => {
        if (error || results.length === 0) {
            res.status(401).json({ error: 'Credenciales inválidas' });
            return;
        }

        const match = await bcrypt.compare(contrasena, results[0].contrasena);
        if (!match) {
            res.status(401).json({ error: 'Credenciales inválidas' });
            return;
        }

        res.json({ message: 'Login exitoso' });
    });
});


// Ruta para registrar persona y evento
app.post('/api/registro-evento', async (req, res) => {
    const {
        // Datos de persona
        nombre, 
        telefono, 
        correo_electronico, 
        tipo_documento, 
        numero_documento,
        // Datos del evento
        tipo_evento,
        salon,
        numero_personas,
        fecha,
        hora
    } = req.body;

    // Usar transacción para asegurar que ambos registros se realicen correctamente
    db.beginTransaction(async (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error al iniciar la transacción' });
        }

        try {
            // Primero insertamos la persona
            const insertPersonaQuery = 'INSERT INTO personas (nombre, telefono, correo_electronico, tipo_documento, numero_documento) VALUES (?, ?, ?, ?, ?)';
            db.query(insertPersonaQuery, [nombre, telefono, correo_electronico, tipo_documento, numero_documento], (error, personaResult) => {
                if (error) {
                    return db.rollback(() => {
                        res.status(500).json({ error: 'Error al registrar persona' });
                    });
                }

                // Luego insertamos el evento usando el ID de la persona
                const insertEventoQuery = 'INSERT INTO eventos (id_persona, tipo_evento, salon, numero_personas, fecha, hora) VALUES (?, ?, ?, ?, ?, ?)';
                db.query(insertEventoQuery, [personaResult.insertId, tipo_evento, salon, numero_personas, fecha, hora], (error, eventoResult) => {
                    if (error) {
                        return db.rollback(() => {
                            res.status(500).json({ error: 'Error al registrar evento' });
                        });
                    }

                    db.commit((err) => {
                        if (err) {
                            return db.rollback(() => {
                                res.status(500).json({ error: 'Error al confirmar el registro' });
                            });
                        }
                        res.status(201).json({ message: 'Evento registrado exitosamente' });
                    });
                });
            });
        } catch (error) {
            db.rollback(() => {
                res.status(500).json({ error: 'Error en el proceso de registro' });
            });
        }
    });
});

// Ruta para obtener todos los eventos con información de la persona
app.get('/api/eventos', (req, res) => {
    const query = `
        SELECT 
            eventos.id,
            eventos.tipo_evento,
            eventos.salon,
            eventos.numero_personas,
            eventos.fecha,
            eventos.hora,
            personas.nombre,
            personas.correo_electronico
        FROM eventos
        INNER JOIN personas ON eventos.id_persona = personas.id
        ORDER BY eventos.fecha DESC, eventos.hora DESC
    `;

    db.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener eventos' });
            return;
        }
        res.json(results);
    });
});

// Ruta para actualizar fecha y hora de un evento
app.put('/api/eventos/:id', (req, res) => {
    const { id } = req.params;
    const { fecha, hora } = req.body;

    const query = 'UPDATE eventos SET fecha = ?, hora = ? WHERE id = ?';
    db.query(query, [fecha, hora, id], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar el evento' });
            return;
        }
        res.json({ message: 'Evento actualizado exitosamente' });
    });
});

// Ruta para eliminar un evento
app.delete('/api/eventos/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM eventos WHERE id = ?';
    db.query(query, [id], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el evento' });
            return;
        }
        res.json({ message: 'Evento eliminado exitosamente' });
    });
});


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});