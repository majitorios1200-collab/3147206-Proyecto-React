export default function Input({ label, type = "text", error, ...props }) {

  return (
    <div className="w-full">

      {/* Label */}
      {label && (
        <label
          className={`
            block
            text-[8px]
            mb-1
            place-self-start
            ${error ? "text-red-800" : "text-text-primary"}
          `}
        >
          {label}
        </label>
      )}

      {/* Contenedor del input */}
      <div
        className="
          relative
          h-12
          flex
          items-center
        "
      >

        {/* Área interactiva invisible */}
        <div
          className="
            absolute
            inset-0
          "
          onMouseDown={(e) => {
            e.preventDefault();
            e.currentTarget.nextSibling.focus();
          }}
        />

        {/* Input */}
        <input
          type={type}
          className={`
            relative
            w-full
            h-12
            rounded-md
            border
            px-4
            text-base

            hover:border-2
            hover:border-focus-border

            focus:outline-none
            focus:ring-1
            focus:ring-focus-ring

            ${
              error
                ? "border-red-800"
                : "border-border"
            }
          `}
          {...props}
        />
      </div>

      {/* Feedback */}
      {error && (
        <p className="text-caption text-red-800 place-self-start">
          {error}
        </p>
      )}
    </div>
  );
}