import {DataTable, Button} from "@/shared/"
import { userColumns } from "../table/userColumns"
import { users } from "../data/user"
import { Navigate, useNavigate } from "react-router-dom";



export default function ListUserPage() {

    const navigate = useNavigate();
  return (
    <div className="p-6">


      <h1 className="text-xl font-semibold mb-4">
        Usuarios
      </h1>

    <div className=" p-2 flex justify-end gap-4 " >
    <Button className="bg-pink-400 text-white px-4 py-2 rounded"
        variant="primary"
        size = "sm"
        onClick={() => navigate("/dashboard/createUser")}

        >
        Reportes de Usuario
    </Button>
    <Button className="bg-pink-400 text-white px-4 py-2 rounded"
        variant="primary"
        size = "sm"
        onClick={() => navigate("/dashboard/createUser")}

        >
        Crear Usuario
    </Button>
    
    </div>

    
      <DataTable
        data={users}
        columns={userColumns}
      />


    </div>
  )
}
