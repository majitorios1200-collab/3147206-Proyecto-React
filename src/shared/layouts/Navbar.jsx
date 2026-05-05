import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconButton, Dropdown, DropdownTrigger,  DropdownItem,
    DropdownContent, Switch } from "@/shared";
import  logo  from "@/assets/images/logo-2.png";
export default function Navbar() {
    
    //Estado que controla el Switch
    const [isActive, setIsActive] = useState(true);

    //Manejador del estado del Switch
    const handleStatusChange = (value) => {
        setIsActive(value);

        //Aqui generalmente va el llamado a una API
        console.log("Nuevo estado", value)
    }
    return (
        <nav className="w-full bg-trasparent border-b-2">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo de marca */}
                    <div className="flex items-center">
                        <Link to={"/"} className="text-h1 font-heading">
                        <img src={logo} alt="Logo" className="h-12"/>
                        </Link>
                    </div>

                    {/* Switch */}
                    <Switch 
                        checked={isActive}
                        onChange={handleStatusChange}
                        size="md"
                    />

                    {/* Links de navegacion */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <Link to={"/inicio"} className="hover:text-text-primary transition">
                            Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-text-primary transition">
                            Cursos
                            </Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-text-primary transition">
                            Multimedia
                            </Link>
                        </li>
                        <li>
                            <Link to={"/inicio"} className="hover:text-text-primary transition">
                            Contacto
                            </Link>
                        </li>
                    </ul>

                        {/* Sesion de la derecha: Busqueda + usuario */}
                    <div className="flex items-center gap-5">

                        {/* Icono de Busqueda */}
                        <div className="relative hidden sm:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500"/>

                        {/* Input */}
                        <input
                        type="text"
                        placeholder="Buscar"
                        className="pl-9 pr-4 py-2.5 border rounded-lg text-body focus:outline-none focus:ring-2 focus:ring-text-primary"
                        />
                        </div>

                        {/* Icono del usuario */}
                        {/* Dropdown */}
            <div className="p-10">
                <Dropdown>
                    <DropdownTrigger>
                        <IconButton arialLabel="Menu de usuario">
                            <User/>
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

                        <DropdownItem>
                            <Link to="/dashboard/auth" className="block w-full">
                            Cerrar sesion
                            </Link>
                        </DropdownItem>
                    </DropdownContent>
                </Dropdown>

            </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}