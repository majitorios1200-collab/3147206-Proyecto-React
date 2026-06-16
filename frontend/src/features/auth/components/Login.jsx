import { useState} from "react"
import { loginSchemas } from "../schemas/loginSchemas";
import { Link, useNavigate } from "react-router-dom";
import { SquareArrowRightEnter, Menu} from "lucide-react";
import { login } from "../services/authService";


import { Input, Button } from "@/shared";

export default function Login(){

    const navigate = useNavigate();

    const [formData, setFormData ] = useState({
        userEmail: "",
        userPassword: "",

    });
    const [errors, setErrors] = useState({})
    
    // =============================================
    //             Handle Generico
    // =============================================
    /**
     * Funcion que se ejecuta cada vez que cambia el valor de un input del formulario
     */

    const handleChange = (e) => {
        //Se obtiene el nombre del campo y su valor 
        const { name, value, type , checked} = e.target;

        setFormData((prev) => ({
            //Se copian todos los valores anteriores a el estado
            ...prev, //Rest operatior

            //Se actualiza unicamente lo que cambio 
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    // =============================================
    //             Handle Submit
    // =============================================
    /**
     * Funcion que se ejecuta cuando se envia el formualario
     */

        const handleSubmit = async (e) => {

        e.preventDefault();

        const result = loginSchemas.safeParse(formData);

        if (!result.success) {
            const fieldErrors = {};

            result.error.issues.forEach((issue) => {
                fieldErrors[issue.path[0]] = issue.message;
            });

            setErrors(fieldErrors);
            return;
        }

        setErrors({});

        try {
            const data = await login(result.data);

            sessionStorage.setItem("token", data.token);

            navigate("/dashboard/userList");

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="flex flex-col justify-center h-screen">
            <h1 className="text-text-primary text-2xl mb-6 text-center pt-6">
                Registro de usuarios
            </h1>
        <form 
        className="grid grid-cols-1  items-center gap-6 "
        onSubmit={handleSubmit}
        >

        <div className="grid grid-cols-1 gap-6 my-0 mx-auto border p-[48px] rounded-[6px]">

        <Input
            type="email"
            name = "userEmail"
            label="Correo"
            placeholder="Ingrese su correo" 
            value = {formData.userEmail}
            onChange={handleChange}
            error={errors.userEmail}
        />
        
        <Input
            label="Contreseña"
            name = "userPassword"
            type="password"
            placeholder="Ingrese su contraseña"
            value = {formData.userPassword}
            onChange={handleChange}
            error={errors.userPassword}

        />
        
      {/*Actions */}

        <div className="flex items-end justify-center gap-6">
            <Button
                variant="secundary"
                size="md"
                type="button"  // ← evita que dispare el submit
                onClick={() => navigate(-1)}
            >
                Cancelar
            </Button>

            <Button 
                variant="primary"
                size="sm"
                type="submit"  // ← dispara el handleSubmit del form
            >
                Guardar
            </Button>
                </div>
            </div>

        </form>

    </div>
    );
}