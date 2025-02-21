let month = parseInt(prompt("Ingrese el número de su mes de nacimiento (1-12):"));
let day = parseInt(prompt("Ingrese el día de su nacimiento:"));

let sign = "";

if ((month === 3 && day >= 21 && day <= 31) || (month === 4 && day >= 1 && day <= 20)) {
    sign = "Aries";
} else if ((month === 4 && day >= 21 && day <= 30) || (month === 5 && day >= 1 && day <= 20)) {
    sign = "Tauro";
} else if ((month === 5 && day >= 21 && day <= 31) || (month === 6 && day >= 1 && day <= 20)) {
    sign = "Géminis";
} else if ((month === 6 && day >= 21 && day <= 30) || (month === 7 && day >= 1 && day <= 22)) {
    sign = "Cáncer";
} else if ((month === 7 && day >= 23 && day <= 31) || (month === 8 && day >= 1 && day <= 22)) {
    sign = "Leo";
} else if ((month === 8 && day >= 23 && day <= 31) || (month === 9 && day >= 1 && day <= 22)) {
    sign = "Virgo";
} else if ((month === 9 && day >= 23 && day <= 30) || (month === 10 && day >= 1 && day <= 22)) {
    sign = "Libra";
} else if ((month === 10 && day >= 23 && day <= 31) || (month === 11 && day >= 1 && day <= 21)) {
    sign = "Escorpio";
} else if ((month === 11 && day >= 22 && day <= 30) || (month === 12 && day >= 1 && day <= 21)) {
    sign = "Sagitario";
} else if ((month === 12 && day >= 22 && day <= 31) || (month === 1 && day >= 1 && day <= 19)) {
    sign = "Capricornio";
} else if ((month === 1 && day >= 20 && day <= 31) || (month === 2 && day >= 1 && day <= 18)) {
    sign = "Acuario";
} else if ((month === 2 && day >= 19 && day <= 29) || (month === 3 && day >= 1 && day <= 20)) {
    sign = "Piscis";
} else {
    sign = "Fecha no válida";
}

alert("Tu signo zodiacal es: " + sign);
