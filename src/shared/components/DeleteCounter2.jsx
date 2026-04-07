import { useState, useEffect } from "react"

export default function DeleteCounter2(){

    const[count, setCount] = useState(0);
    const[message, setMesagge] = useState("El contador no ha cambiado")

    useEffect(() => {

        setTimeout(() => {
            setMesagge(`El contador cambio a: ${count}`)
        }, 2000);
    }, [count])

    return (
        <div>
            <h2>{count}</h2>
            <p>{message}</p>

            <button onClick= {() => setCount(count + 1)} className="border p-3">
                Incrementar
            </button>
        </div>
    )
}