let nombre = prompt("Usted ingresó a la Casa de cambio! Ingrese su nombre");
console.log (nombre)
for (let i=0; i<2; i++){
    if (nombre !== ""){
        console.log("introdujo nombre")
      break
        } else {
          nombre = prompt("Usted ingresó a la Casa de cambio! Ingrese su nombre");
        }
    }


function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 379;
    let euro = 424;
    const moneda = {nombre:"dolar",valor:"379", nombre:"euro",valor:"424"};
    if (document.getElementById("uno").checked) {
        resultado = valore/dolar;
        alert ("El cambio de pesos a dolares es: $" + resultado.toFixed(2));
    }

    else if (document.getElementById("dos").checked) {
        resultado = valore/euro;
        alert ("El cambio de pesos a euros es: €" + resultado.toFixed(2));
    }
    else {
        alert ("Tenés que completar todos los campos")
    }
}