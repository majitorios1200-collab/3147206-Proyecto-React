import { Input, Button } from "@/shared";

export default function UserRegisterForm(){

    const handleNameChange = (e) => {
        console.log("Nombre: ", e.target.value)
    }

    const handleEmailBlur = (e) => {
        console.log("Email: ", e.target.value)
    }

    return (
        <div>
            <h1 className="text-text-primary text-2xl mb-6">
                Registro de usuarios
            </h1>
        <form className="grid grid-cols-1  items-center gap-6 ">
            <div className="grid grid-cols-2 gap-6 my-0 mx-auto">
        <Input
            label="Nombre"
            placeholder="Ingrese su nombre"
            onChange={handleNameChange}
        />
        <Input
            label="Teléfono"
            placeholder="Ingrese su teléfono"
            type="tel"
        />
        <Input
            label="Correo"
            placeholder="Ingrese su correo" 
            type="email"
            onBlur={handleEmailBlur}
        />
        <Input
            label="Contreseña"
            placeholder="Ingrese su contraseña"
            type="password"
        />
        <Input
            label="Edad"
            placeholder="Ingrese su edad"
            type="number"
        />
        <Input
            label="Edad"
            placeholder="Ingrese su edad"
            type="number"
        />
        <Input
            label="Edad"
            placeholder="Ingrese su edad"
            type="number"
        />
        <Input
            label="Edad"
            placeholder="Ingrese su edad"
            type="number"
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
    </div>
    )
}