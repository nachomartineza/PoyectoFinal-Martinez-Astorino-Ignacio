let nombre = localStorage.getItem("nombreUsuario");

if (!nombre) {
    nombre = prompt("Usted ingresó a la Casa de cambio! Ingrese su nombre");

    while (nombre === "") {
        nombre = prompt("Usted ingresó a la Casa de cambio! Ingrese su nombre");
    }

    localStorage.setItem("nombreUsuario", nombre);
}

console.log(nombre);

function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let monedaNombre = "";
    let monedaValor = 0;

    const monedas = [
        { nombre: "dólar", valor: 393 },
        { nombre: "euro", valor: 441 },
    ];

    if (document.getElementById("uno").checked) {
        monedaNombre = monedas[0].nombre;
        monedaValor = monedas[0].valor;
        resultado = valore / monedas[0].valor;
        localStorage.setItem("dolaresConvertidos", resultado.toFixed(2));
    } else if (document.getElementById("dos").checked) {
        monedaNombre = monedas[1].nombre;
        monedaValor = monedas[1].valor;
        resultado = valore / monedas[1].valor;
        localStorage.setItem("eurosConvertidos", resultado.toFixed(2));
    } else {
        alert("Tenés que seleccionar una moneda");
    }

    if (monedaNombre && monedaValor) {
        alert(`El cambio de pesos a ${monedaNombre} es: ${monedaValor} ${monedaNombre.toUpperCase()} = $${resultado.toFixed(2)}`);
    }
}