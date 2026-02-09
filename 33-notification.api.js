// Notifiaciones API
// Las notificaciones api es una interfaz del navegador que permite a las aplicaciones web mostrar notificaciones nativas del sistema operativo, incluso cuando la pestaña no está activa.

const button = document.querySelector(".button");

button.addEventListener('click', () =>{
    console.log("You made click");
    Notification.requestPermission().then(permission => {

        if (permission === "granted"){
            new Notification ("Esta es una notificación de santiago"),{
               body : "Aprediendo JS"
            };
            
         }else{

        }
        
    })
});