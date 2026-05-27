export default function Select({
    label,
    name,
    error,
    value,
    onChange,
    options = [],
}) {

    return (
        <div className="w-full">

            {label && (
                <label
                    className={`block text-caption mb-1 place-self-start ${
                        error ? "text-red-800" : "text-text-primary"
                    }`}
                >
                    {label}
                </label>
            )}

            <select
                name={name}
                value={value}
                onChange={onChange}
                className={`
                    w-full
                    h-12
                    rounded-md
                    border
                    px-4
                    hover:border-2
                    hover:border-focus-border
                    ${
                        error
                            ? "border-red-800"
                            : "border-border"
                    }
                `}
            >
                <option value="">Selecciona una opción</option>

                {options.map((opt) => (
                    <option 
                        key={opt.value} 
                        value={opt.value}
                    >
                    {opt.label}
                    </option>
                ))}
            </select>

            {error && (
                <p className="text-caption text-red-800 place-self-start">
                    {error}
                </p>
            )}
        </div>
    );
}