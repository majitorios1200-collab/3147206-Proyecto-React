// Importamos Router desde Express.
// Router permite modularizar las rutas por feature
// y mantener el archivo principal de la app limpio.
import { Router } from "express";
import multer from "multer";
import { userController } from "./user.controller.js";
import { authenticateToken } from "../../middleware/auth.middleware.js";

// Importamos el controlador de usuarios.
// El router nunca implementa lógica,
// solo delega la ejecución al controller.


// Creamos una instancia del router de Express
const router = Router();

const upload = multer({ dest: "uploads/" });

router.post(
    "/",
    authenticateToken, 
    upload.array("userImage"), 
    userController.create,
)

export default router;

