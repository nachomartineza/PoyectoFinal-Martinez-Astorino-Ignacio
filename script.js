let nombre = prompt("Usted ingresó a la Casa de cambio! Ingrese su nombre");
console.log(nombre);

while (nombre === "") {
  nombre = prompt("Usted ingresó a la Casa de cambio! Ingrese su nombre");
}

console.log("introdujo nombre");

function convertir() {
  let valore = parseInt(document.getElementById("valor").value);
  let resultado = 0;
  const monedas = [
    { nombre: "dolar", valor: 379 },
    { nombre: "euro", valor: 424 }
  ];

  if (document.getElementById("uno").checked) {
    resultado = valore / monedas[0].valor;
    alert("El cambio de pesos a dolares es: $" + resultado.toFixed(2));
  } else if (document.getElementById("dos").checked) {
    resultado = valore / monedas[1].valor;
    alert("El cambio de pesos a euros es: €" + resultado.toFixed(2));
  } else {
    alert("Tenés que completar todos los campos");
  }
}