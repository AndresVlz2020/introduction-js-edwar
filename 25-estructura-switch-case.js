// Estructura Switch
// Evaluar una expresion y ejecutar diferentes bloques de codigo, segun el caso que concida

const paymenMethod = `Card`;
switch (paymenMethod){
    case `Card`:
        console.log(`Pagaste con tarjeta`);
    break;
    case `Bitcoin`:
        console.log(`Pagaste con Bitcoin`);
    break;
    case `DebitCard`:
        console.log(`Pagaste con tardejta debito`);
    break;
    case `CreditCard`:
        console.log(`Pagaste con tardejta creedito`);
        break;

    default:
        console.log(`Metodo de pago no es valido`);
        break;
}
