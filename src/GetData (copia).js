import { writable } from 'svelte/store'

/*Dta Optenida*/

async function Datagets(){
        let url1 = 'https://digimon-api.com/api/v1/digimon/2';
        let url2 = 'https://digimon-api.vercel.app/api/digimon/name/agumon';

const options = {
   method: 'GET',
   body: JSON.stringify({
   title:name,
   body:body,

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
}
  await fetch(url2)
          .then(response => response.text())
          .then((data)=> console.log(data) return data)
          .catch((error)=>  console.log(error)   )
  }

let A = Datagets();

console.log(A);
export const Dataget =  writable('Store wellcon')




import { writable } from 'svelte/store'

export default function (url) {

    const data = writable({})
      
    async function get(){
    
         await fetch(url)
                .then((resp) => resp.json())
                .then(function(dat) {
     
                         data.set(JSON.stringify(dat))
                //console.log('fecht',dat)
              
                  })
                 .catch(function(error) {
                        console.log(error)
                  });
                       
                       
                        }
                        
        get()
        
       
        
return [data]
}


const Hola = ['A','B']

let Valor = []

let Addres = 'https://digimon-api.vercel.app/api/digimon'+'/name/Koromon'
        
console.log("URL = "+Addres)
let data = writable([])  
        
onMount(() => {    
      
        

 });
 
 
 
 
 has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
 ha sido bloqueado por la política de CORS: no hay ningún encabezado 'Access-Control-Allow-Origin' en el recurso solicitado. Si una respuesta opaca satisface sus necesidades, establezca el modo de la solicitud en 'no-cors' para obtener el recurso con CORS deshabilitado.
 
 
 
 
 
 
 
 
 
 // Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export dpostData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log('datraS'+data); // JSON data parsed by `data.json()` call
  });
/*yloiulylilyilyliylyilyilylylylylyllylylylllyly*/
 const response = await fetch(`${baseURLCategories}${genre}${opts}`, {
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	});
