/**
 * Componente Boton
 * 
 * Boton reutilizable con variantes visuales y tamaños controlados, area
 * interactva minima de 48px
 */

export default function Button( {
    variant = "primary", //Define el estilo visual
    size = "md", //Define tamaño visual
    type = "button", //Tipos de boton (button, submit, reset)
    children, //Contenido interno del boton(texto, icono)
    ...props  //Propiedades adicioanales(onClick, disable, etc)
}){
   
const variants = {
    primary: 
        "text-brand border text-body hover:bg-surface-muted hover:text-text-inverse",
    secundary: "bg-background border border-border text-text-primary hover:bg-surface-muted hover:text-text-inverse"
};

const sizes = {
    sm: `
        h-9 px-3
        before: absolute before: content['']
        before:-inset-y-[6px] before:-inset-x-[0px]
    `,
    md: `
        h-8 px-4
        before: absolute before: content['']
        before:-inset-y-[3px] before:-inset-x-[0px]
    `
}

return (
    <button 
        className= {`
            relative
            inline-flex items-center justify-center
            rounded-md
            transition-colors
            ${variants[variant]}
            ${sizes[size]}
            ${type}
        `}
        {...props}
        >
        
        {children}


    </button>
)

}