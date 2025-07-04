import express from "express";
import cors from "cors";
import passport from "passport";
import usuariosRoutes from "./routes/registroUsuarios.js"; // <-- Aquí importas la ruta
import authRoutes from "./routes/authRoutes.js"; // (si usas login por Google o JWT)
import session from "express-session";



const app = express();
app.use(cors());
app.use(express.json());

app.use("/usuarios", usuariosRoutes);
app.use("/auth", authRoutes); 

// Configuración de sesión (usada por passport, incluso si luego no la usas)
app.use(session({
  secret: process.env.JWT_SECRET,                                                                           
  resave: false,
  saveUninitialized: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

/*
====================================================================
// Ejemplo de petición desde el frontend (aquí en el backend simulamos con postman):

import axios from "axios";

const registrar = async () => {
  try {
    const res = await axios.post("http://localhost:3001/api/usuarios/registroUsuarios", {
      correo,
      contraseña,
      nombre,
      apellido,
      rol
    });

    // Aquí redirigen si todo fue bien
    console.log(res.data.mensaje);
    navigate("/dashboard"); // o donde quieras llevar al usuario

  } catch (err) {
    // Aquí muestras el error en pantalla
    if (err.response?.status === 409) {
      setError("Este correo ya está registrado");
    } else {
      setError("Error al registrar el usuario");
    }
  }
};


*/