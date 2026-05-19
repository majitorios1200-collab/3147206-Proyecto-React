export default function Card ({ product }){

    const{ title, price, description, image } = product

    return (
        <div
            className="
            w-full
            bg-white
            border border-gray-200
            backdrop-blur-[2px]
            shadow-lg
            rounded-2xl
            overflow-hidden
            hover:shadow-black
            transition-shadow duration-700
            "
        >

            <img 
                src={image}
                alt={title}
                className="w-full h-48 object-contain"
            />

            <div className="p-5 space-y-3 "> 
                {/* Titulo de la card */}
                <h2 className="text-h2 font-heading place-self-center">
                    {title}
                </h2>

                {/* Descripcion de la card */}
                <p className="text-body">
                    {description}
                </p>

                {/* Precio del producto*/}
                <p className="text-h2 font-heading text-brand">
                    ${price.toLocaleString()}
                </p>
            </div>

        </div>

    )
}   