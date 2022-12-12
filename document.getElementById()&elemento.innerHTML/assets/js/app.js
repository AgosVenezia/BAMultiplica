function insertarCodigoHTML(){
   
    /* Primero debemos detectar y almacenar el elemento de todo nuestro HTML donde queremos insertar nuevo código. Para eso utilizaremos el siguiente comando. */
    
    /* Lo que estamos haciendo aquí es guardando en la variable "elemento" justamente el elemento de nuestro código HTML que tenga el ID = "parrafo" */
    
    /* Es importante saber que todas las etiquetas de HTML pueden tener un atributo id="" para poder identificarlas como únicas */
    
    var elemento = document.getElementById("parrafo");
    
    /* Una vez que guardamos el elemento en la variable ahora vamos a poder acceder aun método que se llama innerHTML y este nos va a permitir insertar nuevas lineas de HTML dentro del elemento que seleccionamos por su ID */
    elemento.innerHTML = "Hola, <b>este texto</b> fue insertado usando el método .innerHTML. </br> A través de este método podrás añadir todo el código HTML que gustes desde imagenes, botones, listas, titulos, tablas, etc. Todo lo que sea posible de hacer con HTML.";
 }