// Variables que nos permiten acceder a los checkbox y párrafo (para mostrar la respuesta) de nuestro HTML, el id funciona como índice
var totalForm = document.getElementById("total");
var personasForm = document.getElementById("personas");
var incrementoForm = document.getElementById("incremento");
var resultadoTexto = document.getElementById("resultado");

// Función que permite modificar el texto del párrafo de resultado
function escribirValor( valor ){
    resultadoTexto.innerHTML = "Cada una de las "+ personasForm.value + " debe pagar " + valor;
}

// Función que calcula cuánto tiene que pagar cada persona para la cuenta total
function calcularTotal( ){
    // Obtiene los valores de HTML
    let total = parseFloat(totalForm.value);
    let incremento = parseFloat(incrementoForm.value) / 100;
    let personas = parseFloat(personasForm.value);
    
    // Dividimos el total entre el número de personas, antes sumamos la propina
    var resultado = (total + (total * incremento)) / personas;
    return resultado;
}
