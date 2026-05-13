// import { useState, useEffect } from "react"

// export default function DeleteEffect(){
//     const [message, setMessage] = useState("Cargando...")

//     useEffect(() => {
//         setTimeout(() => {
//             setMessage("Componente Cargado o montado")
//         }, 2000);



//     },[])
//     return <h1>{message}</h1>

// }
//=======================================================
//SEGUNDA ACTIVIDAD => useEffct
//======================================================
import { useState, useEffect } from "react"

export default function DeleteEffect(){

    console.log("Render");

    const [message, setMessage] = useState("Cargando...")

    useEffect(() => {

        console.log("Efecto ejecutado");

        setTimeout(() => {
            setMessage("Componente Cargado o montado")
        }, 2000);



    },[])
    return <h1>{message}</h1>

}