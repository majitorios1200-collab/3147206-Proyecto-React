export default function Input({label, type = "text", ...props}) {
    //Cuerpo de la funcion
    return (
        //Contenedor del input que se exporta con label, cuerpo y feedback message
        <div className="w-[320px]">

            {/* Label */}
            <label 
                className="
                    block
                    text-caption
                    mb-1
                    text-text-primary
                "
                >
                {label}

            </label>

            {/* Contenedor del input */}

                
                {/*Area interactiva invisible de un input 48px */}

                <div className="
                    absolute
                    insert-0
                "
                onMouseDown={(e) => {
                    e.preventDefault();
                    /* Mueve el foco el siguiente elemento hermano del elemento actual.
                    currentTraget referencia el elemento que tiene el handler del evento 

                    nextSibling obtiene el siguiente nodo en el dom 

                    focus() cambia el foco del usuario hacia ese elemnto */
                    e.currentTarget.nextSibling.focus();
                }}
                ></div>

                {/* Area  visual del input */}
                <Input
                    className="
                    relative
                    w-full
                    h-12
                    roundend-md
                    border
                    border-border
                    px-4
                    text-base

                    focus:outline-none
                    focus:ring-2
                    focus:ring-focus-ring
                    focus:border-focus-border
                "

                    {...props}
                >
            </Input>
            

            {/* Feedback message */}
            
        </div>
    )
}
