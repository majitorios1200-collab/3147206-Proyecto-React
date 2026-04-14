import { useState, useEffect} from "react"
import { Input, Button, DeleteEffect, DeleteCounter2, Select } from "@/shared";
import { getDocumentTypes } from "@/features/users/services/selectService";

export default function UserRegisterForm(){

    const [documentTypes, setDocumentTypes] = useState([])

    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
    },[])
    
    const handleNameChange = (e) => {
        console.log("Nombre: ", e.target.value)
    }

    // const handleEmailBlur = (e) => {
    //     console.log("Email: ", e.target.value)
    // }

    return (
        <div>
            <h1 className="text-text-primary text-2xl mb-6">
                Registro de usuarios
            </h1>
        <form className="grid grid-cols-1  items-center gap-6 ">
            <div className="grid grid-cols-2 gap-6 my-0 mx-auto">

        <Input
            label="Nombre"
            name = "userName"
            placeholder="Ingrese su nombre"
            onChange={handleNameChange}
        />

        <Input
            type="email"
            name = "userEmail"
            label="Correo"
            placeholder="Ingrese su correo" 
        />
        
        <Input
            label="Teléfono"
            name = "userPhone"
            placeholder="Ingrese su teléfono"
            type="tel"
        />

        <Select
            label = "Tipo de documento"
            name = "userDocumentType"
            options = {documentTypes}
        />

        <Input
            label="Numero de documento"
            name = "userdocumentNumber"
            placeholder="Ingrese su numero de documento"
        />

        <Input
            label="Contreseña"
            name = "userPassword"
            placeholder="Ingrese su contraseña"
            type="password"
        />
        

        
      {/*Actions */}

        <div className="flex items-end justify-center gap-6">
            <Button
                variant="secundary"
                size = "md">
                Cancelar
            </Button>

            <Button
                variant="primary"
                size = "sm">
                Guardar
            </Button>
                </div>
            </div>

        
        </form>

        {/* <DeleteCounter/> */}

        {/*Uso del useEffect */}
        <DeleteEffect/>

        <DeleteCounter2/>
    </div>
    );
}