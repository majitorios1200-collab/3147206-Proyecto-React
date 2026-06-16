// frontend/src/features/access/components/PermissionModule.jsx


import { CheckBox, Select, Switch, Button, Input } from "@/shared";


export default function PermissionModule({   
  groupPermissions }) {


  return (
    <section className="border rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Gestión usuarios</h2>


      <div className="flex flex-wrap gap-6">
        <CheckBox
          id="create_user"
          name="create_user"
          label="Crear usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "create_user",
          )}
          onChange={() => {}}
        />


        <CheckBox
          id="list_user"
          name="list_user"
          label="Listar usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "list_user",
          )}
          onChange={() => {}}
        />
        <CheckBox
          id="view_user"
          name="view_user"
          label="Visualizar usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "view_user",
          )}
          onChange={() => {}}
        />
        <CheckBox
          id="update_user"
          name="update_user"
          label="Editar usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "update_user",
          )}
          onChange={() => {}}
        />
        <CheckBox
          id="report_user"
          name="report_user"
          label="Generar reporte usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "report_user",
          )}
          onChange={() => {}}
        />
        <CheckBox
          id="delete_user"
          name="delete_user"
          label="Eliminar usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "delete_user",
          )}
          onChange={() => {}}
        />
      </div>
    </section>
  );
}


