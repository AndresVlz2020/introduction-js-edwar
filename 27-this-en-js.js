// This es una palabra reservada del sistema, osea que no se puede crear ni funciones ni variables con este nombre 

const reservation = {
    userName: "Santiago",
    lastName: "Vélez",
    userAge: 18,
    total: 100000,
    isPaid: true,

// Los objetos pueden contener funciones 

information: function(){
    console.log(`El cliente ${this.userName} reservó y la cantidad total a pagar es ${this.total}, hasta el momennto el estado del pago es ${this.isPaid}`);

      }

};


const reservation2 = {
    userName: "Andrés",
    lastName: "Naranjo",
    userAge: 19,
    total: 150000,
    isPaid: false,

// Los objetos pueden contener funciones 

information: function() {
    console.log(`El cliente ${this.userName} reservó y la cantidad total a pagar es ${this.total}, hasta el momennto el estado del pago es ${this.isPaid}`);

      }

};

// Con arrow function

const reservation3 = {
    userName: "Juan",
    lastName: "Perez",
    userAge: 17,
    total: 170000,
    isPaid: false,


information: () => {
    console.log(`El cliente ${this.userName} reservó y la cantidad total a pagar es ${this.total}, hasta el momennto el estado del pago es ${this.isPaid}`);

      }

};


// This en este documento hace referencia al objeto sobre el cual se está mandando a llamar.
// Es obligatorio usar la función de esta manera, porque esta hace referencia al objeto que se está usando.
reservation.information();
reservation2.information();
reservation3.information();


// Si se usa arrow function no es capaz de leer los datos del contexto, dando como resultado undefined.