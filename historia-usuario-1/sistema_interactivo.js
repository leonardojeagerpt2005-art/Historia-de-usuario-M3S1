// Solicitar al usuario que ingrese su nombre
let nombre = prompt('Ingrese su Nombre: ')

// Solicitar al usuario que ingrese su edad y convertir el dato a número entero
let edad = parseInt(prompt('Ingrese su Edad: '))

// Validar si la edad ingresada no es un número
if (isNaN(edad)){

    // Mostrar mensaje de error en pantalla
    alert('ERROR: ingrese un valor numerico')

    // Mostrar mensaje de error en la consola
    console.error('ERROR: ingrese un valor numerico')
}

// Verificar si el usuario es menor de edad
else if (edad < 18){

    // Mostrar mensaje para menores de edad
    alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`)

    // Mostrar mensaje en consola
    console.log(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`)
}

// Si no es menor de edad, entonces es mayor de edad
else {

    // Mostrar mensaje para mayores de edad
    alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`)

    // Mostrar mensaje en consola
    console.log(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`)
}