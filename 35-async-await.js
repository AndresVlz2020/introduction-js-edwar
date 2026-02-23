/**
 * 
 * Async await 
 * Son características de JS que facilitan trabajar con funciones asíncronas permitiendo escribir código que se parece más al síncrono y es más fácil de leer 
 * 
 * Antes del 2015 se usaba .then() y catch(), pero ahora se usa async y await, que internamente siguen siendo promesas
 * 
 * async: Declara una función asíncrona que siempre devuelve una promesa
 * await: Pausa la ejecución de la función async hasta que una promesa se resuelve o rechaza, devolviendo como resultado una promesa.
 * 
 */

//====================================================

// Ejemplo con una función que se cumple

function dowloadLastOrder(){
    return new Promise(LastOrders => {
        console.log("Descargando pedido... espere porfavor.");
        
    setTimeout(() => {
        LastOrders ("Los pedidos fueron descargados")
    }, 4000);
    });
};
    function dowloadLasClients(){
    return new Promise(clients => {
        console.log("Descargando clientes... espere porfavor.");
     
        setTimeout(() => {
        clients ("Los clientes fueron descargados")
    }, 4000);
    });
};

async function app(){
    try{
        const clients = await dowloadLasClients();
        const LastOrders = await dowloadLastOrder();
    // console.log("Codigo que si se bloquea");
        console.log(clients);
        console.log(LastOrders);
    } catch(error) {
        console.log(error);
    }
}

app();
console.log("Codigo que no se bloquea")