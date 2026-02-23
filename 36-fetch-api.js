/**
 * Fetch API: es una función JS que permtie hacer peticiones de tipo HTTP, incluyendo GET, POST, PUT, DELETE, etc. es una API moderna.
 * 
 * 
 * 
 * 
 */

function getEmployees(){
// Aquí se copia la URL, https://www.instagram.com/andressvlz/
// Aunque para este caso estamos haciendo una petición a un archivo local
// fetch("/data/employees.json")

    const file = "/data/employees.json";

    fetch(file)
    .then((result) => {
       return result.json();
    })

    .then( data  => {
       const { employees} = data;
    
       employees.forEach(employe => {

       console.log(employe.id);
       console.log(employe.user);
       console.log(employe.job);
        
      });

      document.querySelector(".content").textContent = employees.user;

    });

}

getEmployees();

