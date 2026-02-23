// Soliictar permisos para uso de cámara y micrófono

 const button = document.querySelector(".button");

 button.addEventListener('click', async() =>{
    try {
        await navigator.mediaDevices.getUserMedia({video: true, audio: true});

    const permission = await Notification.requestPermission();

    console.logd(`Estado del permiso ${permission}`);

    if (permission === "granted"){
        new Notification("Permiso concedido", {
            body: "Cámara y micrófono activados",
            icon: "assets/icons/img1.png"
        });
    }else{
        console.log("Permiso denegado");
    }


}catch(error){
        console.log(`Error al solicitar el permiso`, error)
        alert("No se concedieron los permisos solicitados")
    }
 });