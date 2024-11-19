document.addEventListener("DOMContentLoaded",function(){
    let contenedor = document.getElementById("paises-api");
    let urlApi = "https://restcountries.com/v3.1/name/";
    let paisElect = document.getElementById("country");
let btnBuscar = document.getElementById("btnFin");
// Busqueda al realizar click en el boton de buscar
 btnBuscar.addEventListener("click",function(e){  
// realizacion de fetch utilizando la url dentor de una variable e indicamos en la funcion donde usar los datos
 fetch(urlApi+(paisElect.value))
 .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();  
  })
  .then(data => {
    console.log(data);  
     mostrarInfo(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
    })
 //Funcion para mostrar en el HTML en contenedores
function mostrarInfo(data){
    contenedor.innerHTML=``;
contenedor.innerHTML+= `<div class="container text-center">
  <div class="row">
    <div class="col">
    Nombre oficial: ${data[0].altSpellings[2]} 
    </div>
  </div>
  <div class="row">
    <div class="col">
    <br>
     Ubicado : ${data[0].subregion}
    </div>
  </div>
  <div class="row">
    <div class="col">
    <br>
      Idiomas hablados en la region: 
      ${data[0].languages.spa}<br>
    <br>
    </div>
  </div>
  <div class="row">
    <div class="col">
    Ubicacion:
    ${data[0].maps.googleMaps} 
    <br>
    <br>
    Poblacion:
    ${data[0].population} 
    </div>
  </div>
  <div class="row">
    <div class="col">
    <br>
      <img src="${data[0].flags.png} "></img>
    </div>
  </div>
 `
}
})