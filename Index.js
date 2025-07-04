// index.js
import express from "express";
import usuariosRoutes from "./routes/registroUsuarios.js"; // ✅ importa tus rutas

const app = express();
const PORT = 3000;

app.use(express.json()); // ✅ habilita lectura de JSON (obligatorio para req.body)

// ✅ conecta el router de usuarios
app.use("/usuarios", usuariosRoutes);

// Ruta raíz solo para verificar que el servidor corre
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando correctamente! 🎉");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
