function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 346.5;
    var euro  = 375.5;
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