import express from "express";
import bcrypt from "bcrypt";
import { sql, pool } from "../config/db.js";

const router = express.Router();
const saltRounds = 10;

router.post("/registro", async (req, res) => {
  const { correo, contraseña, nombre, apellido, rol } = req.body;

  try {
    if (!correo || !contraseña || !nombre || !rol) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const conn = await pool;

    // Verificar si el correo ya existe
    const check = await conn
      .request()
      .input("correo", sql.VarChar, correo)
      .query("SELECT * FROM Usuarios WHERE Correo = @correo");

    if (check.recordset.length > 0) {
      return res.status(409).json({ error: "El correo ya está registrado" });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

    // Insertar en la base
    await conn
      .request()
      .input("correo", sql.VarChar, correo)
      .input("contraseña", sql.VarChar, hashedPassword)
      .input("nombre", sql.VarChar, nombre)
      .input("apellido", sql.VarChar, apellido || "")
      .input("rol", sql.VarChar, rol)
      .query(`
        INSERT INTO Usuarios (Correo, Contraseña, Nombre, Apellido, Rol)
        VALUES (@correo, @contraseña, @nombre, @apellido, @rol)
      `);

    // Obtener el usuario recién insertado (asumiendo que el correo es único)
    const result = await conn
      .request()
      .input("correo", sql.VarChar, correo)
      .query("SELECT Id_usuario, Correo, Nombre, Apellido, Rol FROM Usuarios WHERE Correo = @correo");

    const nuevoUsuario = result.recordset[0];

    res.status(201).json({ mensaje: "Usuario registrado", usuario: nuevoUsuario });

  } catch (err) {
    console.error("Error en /registroUsuarios:", err);

    if (err.number === 2627) {
      // Código de error de SQL Server por violar restricción UNIQUE
      return res.status(409).json({ error: "Correo ya registrado" });
    }

    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;
