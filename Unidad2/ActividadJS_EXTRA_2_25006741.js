let play = true;

while (play) {
    let numeroComputadora = Math.floor(Math.random() * 9) + 1;
    console.log("Número generado por la computadora:", numeroComputadora); // LOG PARA PRUEBAS
    
    let numeroUsuario;
    do {
        numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
    } while (numeroUsuario < 3 || numeroUsuario > 6);
    
    let eleccion;
    do {
        eleccion = prompt("¿Cree que su número es MAYOR, MENOR o IGUAL al de la computadora? (Ingrese MAYOR, MENOR o IGUAL)").toUpperCase();
    } while (eleccion !== "MAYOR" && eleccion !== "MENOR" && eleccion !== "IGUAL");
    
    let resultado;
    if ((numeroUsuario > numeroComputadora && eleccion === "MAYOR") || 
        (numeroUsuario < numeroComputadora && eleccion === "MENOR") || 
        (numeroUsuario === numeroComputadora && eleccion === "IGUAL")) {
        resultado = "¡Ha adivinado!";
    } else {
        resultado = "No ha adivinado.";
    }
    
    alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección fue ${eleccion}. ${resultado}`);
    
    let answer;
    do {
        answer = prompt("¿Quiere play otra vez? (SI/NO)").toUpperCase();
    } while (answer !== "SI" && answer !== "NO");
    
    if (answer === "NO") {
        play = false;
        alert("Gracias por play.");
    }
}
