import { z } from "zod";

export const loginSchemas = z.object({


    userEmail: z.email("Debe ingresar un email valido"),

    userPassword: z.string().min(2, "La contraseña es obligatoria ")

})