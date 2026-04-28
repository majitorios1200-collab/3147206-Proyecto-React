import { Outlet, Link} from "react-router-dom"
import heroBg from "@/assets/images/bg-3.jpg"
import {SquareArrowLeft } from "lucide-react";
import { IconButton} from "@/shared";


// import { CreateUserPage } from "../../features/users"

export default function DashboardLayout () {
    
    return (
        <div className="relative min-h-screen text-text-primary">
        {/* Fondo con imagen */}
        <div 
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`}}
        />
        <Link to="/">
                <IconButton>
                    <SquareArrowLeft/>
                    
                </IconButton>

                
            </Link>
        {/* <CreateUserPage/> */}
        </div>
    )
}