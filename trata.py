try:
	opcion = ''
	print("*************************************")
	print("Recuerde que las opciones estan escritas en minuscula y mayuscula")
	print("*************************************")
	print("")
	print("*************************************")
	print("Autoriza el tratamiento de datos")
	print("Las opciones son si o no")
	print("*************************************")
	print("")

	opcion = str(input("ingrese su opcion: "))

	if (opcion == 'si' or opcion == 'SI'):
		print("Gracias por autorizar.")

		edad = int(input("Ingrese su edad actual: "))

		if edad >= 14:
			print("Cumple con el requisito de edad.")


			print("*************************************")
			print("Tipos de nivel de formacion:")
			print("*************************************")
			print("")
			print("1. Tecnico")
			print("2. Tecnologo")
			print("3. Operario o Auxiliar")
			print("4. Especialista")
			print("*************************************")
			print("")

			nivel_formativo = int(input("Seleccione su nivel de formacion con base en las opciones anteriores: "))


			if nivel_formativo == 2:
				print("")
				print("Recuerde enviar el acta y el diploma de grado 11.")
				print("")

			else:
				print("opcion de nivel formativo invalida.")
.
		else:
			print("")
			print("No cumple con la edad requerida.")
			print("Recuerde que para la modalidad de tecnologo debe tener el resultado de las pruebas icfes.")
			print("Lo invitamos a inscribirse nuevamente cuando tenga la edad requerida.")
			print("")

	else:
		print("Se necesita su autorizacion para continuar con el procedimiento")

except ValueError:
	print("Error de ingreso de datos.")