import { useState, useEffect} from "react"
import { getDocumentTypes } from "@/features/users/services/selectService";
import { userSchema } from "../schemas/userSchemas";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { SquareArrowRightEnter, Menu} from "lucide-react";
import { createUser } from "../services/userService";

import { Input, Button,  Select, CheckBox, IconButton, Dropdown, DropdownTrigger,  DropdownItem,
    DropdownContent, FileInput} from "@/shared";

export default function UserRegisterForm(){

    const navigate = useNavigate();

    const [IsSubmitting, setIsSubmitting] = useState(false)
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
    
    const handleChange = (e) => {
        const { name, value, type , checked} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = userSchema.safeParse(formData);

            
        console.log(result)

        if (!result.success) {
            const fieldErrors = {};
            result.error.issues.forEach((issue) => {
                fieldErrors[issue.path[0]] = issue.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        try {
            const response = await createUser(result.data);
            console.log("Usuario creado:", response);
            alert("Usuario creado correctamente");
            navigate(-1);
        } catch (error) {
            console.error("Error:", error.message);
            alert(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <h1 className="text-text-primary text-2xl mb-6 text-center pt-6">
                Registro de usuarios
            </h1>
        <form 
            className="w-full px-4 md:px-0"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto border p-4 md:p-8 rounded-md">

                <Input
                    label="Nombre"
                    name="userName"
                    placeholder="Ingrese su nombre"
                    value={formData.userName}
                    onChange={handleChange}
                    error={errors.userName}
                />

                <Input
                    type="email"
                    name="userEmail"
                    label="Correo"
                    placeholder="Ingrese su correo" 
                    value={formData.userEmail}
                    onChange={handleChange}
                    error={errors.userEmail}
                />
                
                <Input
                    label="Teléfono"
                    name="userPhone"
                    type="tel"
                    placeholder="Ingrese su teléfono"
                    value={formData.userPhone}
                    onChange={handleChange}
                    error={errors.userPhone}
                />

                <Select
                    label="Tipo de documento"
                    name="userDocumentType"
                    options={documentTypes}
                    onChange={handleChange}
                    value={formData.userDocumentType}
                    error={errors.userDocumentType}
                />

                <Input
                    label="Numero de documento"
                    name="userDocumentNumber"
                    placeholder="Ingrese su numero de documento"
                    onChange={handleChange}
                    value={formData.userDocumentNumber}
                    error={errors.userDocumentNumber}
                />

                <Input
                    label="Contraseña"
                    name="userPassword"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={formData.userPassword}
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

                <div className="md:col-span-2 flex flex-wrap justify-center md:justify-end items-center gap-4 mt-4">
                    <Button
                        variant="secundary"
                        size="md"
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        Cancelar
                    </Button>

                    <Button 
                        variant="primary"
                        size="sm"
                        type="submit"
                        disabled={IsSubmitting}
                    >
                        {IsSubmitting ? "Guardando..." : "Guardar"}
                    </Button>

                    <Link to="/dashboard">
                        <IconButton variant="ghost">
                            <SquareArrowRightEnter />
                        </IconButton>
                    </Link>

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
                </div>
            </div>
        </form>
    </div>
    );
}