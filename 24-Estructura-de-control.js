// Estructura de control IF

// const score = Number(prompt('Ingresa el puntaje'));

// if (score === 100) {
//     console.log ('Si, el puntaje es 100');

// }else{

//     console.log('No, el puntaje no es 100');
// }


const score = Number(prompt('Ingresa el puntaje'));

if (score !== 100) {
    console.log ('El puntaje es diferente de 100');

}else{

    console.log('Sí, el puntaje es 100');
}

// ==================================

const rol = string(prompt('Ingresa tu rol de'));

if (rol == 'admin') {
    console.log('Tienes el acceso a todo el sistema');
    
}else if (rol == 'editor') {
    console.log('Tienes el acceso a editar contenido');

}else{
    console.log('No tienes acceso al sistema');
}
