function ingresarNotas() {
    let nombre = prompt("Ingrese el nombre del alumno");

    while (!/^[a-zA-Z]+$/.test(nombre)) {
        nombre = prompt("El nombre ingresado no es válido, por favor intente nuevamente");
    }

    let apellido = prompt("Ingrese el apellido del alumno");

    while (!/^[a-zA-Z]+$/.test(apellido)) {
        apellido = prompt("El apellido ingresado no es válido, por favor intente nuevamente");
    }

    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));


    while (isNaN(cantidadNotas) || cantidadNotas <= 0) {
        cantidadNotas = parseInt(prompt("Ingrese un número válido mayor que cero para la cantidad de notas:"));
    }

    let sumaNotas = 0;

   
    for (let x = 1; x <= cantidadNotas; x++) {
        
        let nota = parseFloat(prompt("Imgrese la nota " + x + " de " + nombre + " " + apellido ));


        while (isNaN(nota) || nota < 0 || nota > 10) {
            
            nota = parseFloat(prompt("Ingrese una nota válida entre 0 y 10 para la nota " + x + " de " + nombre +  " " + apellido));
        }

        sumaNotas += nota;
    }


    let promedio = sumaNotas / cantidadNotas;


    alert("El promedio de " + nombre + " " + apellido + " es " + promedio.toFixed(2));

    if (promedio >= 6) {
        alert("El alumno está aprobado");
    } else {
        alert("El alumno está desaprobado");
    }

    ingresarNotas()
}


ingresarNotas();

