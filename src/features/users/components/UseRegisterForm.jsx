import { useState, useEffect} from "react"
import { getDocumentTypes } from "@/features/users/services/selectService";
import { userSchema } from "../schemas/userSchemas";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { SquareArrowRightEnter, Menu} from "lucide-react";

import { Input, Button,  Select, CheckBox, IconButton, Dropdown, DropdownTrigger,  DropdownItem,
    DropdownContent, FileInput} from "@/shared";

export default function UserRegisterForm(){

    const navigate = useNavigate();

    const [documentTypes, setDocumentTypes] = useState([])
    const [formData, setFormData ] = useState({
        userName: "",
        userEmail: "",
        userPhone: "",
        userDocumentType: "",
        userDocumentNumber: "",
        userPassword: "",
        userImage: [],

        //Flags Booleanos
        isStaff: false,
        isActive: true,
        isSuperUser: false,
    });
    const [errors, setErrors] = useState({})
    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
    },[])
    
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

    const handleSubmit = (e) => {

        e.preventDefault()

        const result = userSchema.safeParse(formData)

        if(!result.success){
            const fieldErrors = {};

            result.error.issues.forEach((issue) => {
                const field = issue.path[0];
                
                fieldErrors[field] = issue.message;
            });

            setErrors(fieldErrors);

            return;
        }

        setErrors({});

        console.log("Usuario valido", result.data)
    };

    return (
        <div>
            <h1 className="text-text-primary text-2xl mb-6 text-center pt-6">
                Registro de usuarios
            </h1>
        <form 
        className="grid grid-cols-1  items-center gap-6 "
        onSubmit={handleSubmit}
        >

            <div  className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto border p-8 rounded-md">

        <Input
            label="Nombre"
            name ="userName"
            placeholder="Ingrese su nombre"
            value = {formData.userName} //Es el valor que ingresa el usuario
            onChange={handleChange}
            error={errors.userName}
        />

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
            label="Teléfono"
            name = "userPhone"
            type="tel"
            placeholder="Ingrese su teléfono"
            value = {formData.userPhone}
            onChange={handleChange}
            error={errors.userPhone}
        />

        <Select
            label = "Tipo de documento"
            name = "userDocumentType"
            options = {documentTypes}
            onChange={handleChange}
            value = {formData.userDocumentType}
            error={errors.userDocumentType}

            

        />

        <Input
            label="Numero de documento"
            name = "userDocumentNumber"
            placeholder="Ingrese su numero de documento"
            onChange={handleChange}
            value = {formData.userDocumentNumber}
            error={errors.userDocumentNumber}
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
        
        <CheckBox
            id="isStaff"
            name="isStaff"
            label="Es Staff"
            checked={formData.isStaff}
            onChange={handleChange}
        
        />

        <CheckBox
            id="isActive"
            name="isActive"
            label="Es Active"
            checked={formData.isActive}
            onChange={handleChange}
        
        />

        <CheckBox
            id="isSuperUser"
            name="isSuperUser"
            label="Es SuperUser"
            checked={formData.isSuperUser}
            onChange={handleChange}
        
        />

        {/* Contenedot del input */}
        <div>
        <h4>Minimo puede subir 12 archivos, archivos permitidos jpg, png etc</h4>
        <FileInput
            value={formData.userImage}
            onChange={(files) => 
                setFormData((prev) => ({ ...prev, userImage: files}))
            }
            multiple={true}
        />
        {errors.userImage && (
            <span className="text-red-500 text-sm">{errors.userImage}</span>
        )}
        </div>

      {/*Actions */}

        <div className="col-span-2 flex justify-end items-center gap-4 mt-4">
            <Button
                variant="secundary"
                size = "md"
                onClick={() => navigate(-1)}>
                Cancelar
            </Button>

            <Button 
                variant="primary"
                size = "sm"
                >
                Guardar
            </Button>

            {/* Icon Button */}
            <Link to="/dashboard">
                <IconButton
                    variant="ghost">
                    <SquareArrowRightEnter></SquareArrowRightEnter>
                    
                </IconButton>

                
            </Link>

            {/* Dropdown */}
            <div className="p-10">
                <Dropdown>
                    <DropdownTrigger>
                        <IconButton arialLabel="Menu de usuario">
                            <Menu/>
                        </IconButton>
                    </DropdownTrigger>

                    <DropdownContent className="right-0 w-48">
                        <DropdownItem>
                            <Link to="/auth" className="block w-full">
                            Autenticacion
                            </Link>
                        </DropdownItem>

                        <DropdownItem>
                            <Link to="/dashboard" className="block w-full">
                            Panel de control
                            </Link>
                        </DropdownItem>
                    </DropdownContent>
                </Dropdown>

            </div>

            {/* <a href="/DashboardLayout">
                <IconButton>
                    <SquareArrowRightEnter></SquareArrowRightEnter>
                </IconButton>
            </a> */}

{/* 
            <IconButton onClick={() => navigate("/DashboardLayout")}>
                    <SquareArrowRightEnter></SquareArrowRightEnter>
            </IconButton> */}
                </div>
            </div>

        </form>

        {/* <DeleteCounter/> */}

        {/*Uso del useEffect */}
        {/* <DeleteEffect/> */}

        {/* <DeleteCounter2/> */}
    </div>
    );
}