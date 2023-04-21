var nombrePromise = new Promise((resolve, reject) => {
  var nombre = localStorage.getItem("nombreUsuario");

  if (!nombre) {
    nombre = prompt("Usted ingresó a la Casa de cambio! Ingrese su nombre");

    while (nombre === "") {
      nombre = prompt("Usted ingresó a la Casa de cambio! Ingrese su nombre");
    }

    localStorage.setItem("nombreUsuario", nombre);
  }

  if (nombre) {
    resolve(nombre);
  } else {
    reject("Nombre no ingresado");
  }
});

nombrePromise.then((nombre) => {
  var nombreUsuarioDiv = document.getElementById("nombreUsuario");
  nombreUsuarioDiv.innerHTML = "Bienvenido " + nombre + "!";
}).catch((error) => {
  console.log(error);
});

const formulario = document.getElementById("formulario");
const cotizador = document.getElementById("cotizador");
const resultadosContainer = document.getElementById("resultados");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  convertir();
});

cotizador.addEventListener("click", function (event) {
  event.preventDefault();

  convertir();
});

function convertir() {
  let valore = parseInt(document.getElementById("valor").value);
  let resultado = 0;
  let monedaSeleccionada = "";
  if (!document.getElementById("uno").checked && !document.getElementById("dos").checked) {
    swal("Error", "Debes seleccionar una moneda", "error");
    return;
  }

  if (document.getElementById("uno").checked) {
  fetch("./monedas.json")
    .then((response) => response.json())
    .then((monedas) => {
      const monedaNombre = monedas[0].nombre;
      const monedaValor = monedas[0].valor;
      monedaSeleccionada = "dolares";
      resultado = valore / monedas[0].valor;
      localStorage.setItem("dolaresConvertidos", resultado.toFixed(2));

      const nuevaTarjeta = document.createElement("div");
      nuevaTarjeta.className = "tarjeta";

      const nombreMoneda = document.createElement("h2");
      nombreMoneda.textContent = monedaNombre.toUpperCase();

      const montoConvertido = document.createElement("p");
      montoConvertido.textContent = `$${resultado.toFixed(2)}`;

      nuevaTarjeta.appendChild(nombreMoneda);
      nuevaTarjeta.appendChild(montoConvertido);

      resultadosContainer.appendChild(nuevaTarjeta);

      const mensaje = document.createElement("p");
      mensaje.textContent = `El cambio de pesos a ${monedaNombre} es: $${resultado.toFixed(2)}`;
      resultadosContainer.appendChild(mensaje);

      localStorage.setItem("monedaSeleccionada", monedaSeleccionada);

      swal({
        title: "¡Conversión exitosa!",
        text: `El cambio de pesos a ${monedaNombre} es: $USD${resultado.toFixed(2)}`,
        icon: "success",
      });
    })
    .catch((error) => {
      console.log(error);
    });
} else if (document.getElementById("dos").checked) {
  fetch("./monedas.json")
    .then((response) => response.json())
    .then((monedas) => {
      const monedaNombre = monedas[1].nombre;
      const monedaValor = monedas[1].valor;
      monedaSeleccionada = "euros";
      resultado = valore / monedas[1].valor;
      localStorage.setItem("eurosConvertidos", resultado.toFixed(2));

      const nuevaTarjeta = document.createElement("div");
      nuevaTarjeta.className = "tarjeta";

      const nombreMoneda = document.createElement("h2");
      nombreMoneda.textContent = monedaNombre.toUpperCase();

      const montoConvertido = document.createElement("p");
      montoConvertido.textContent = `$${resultado.toFixed(2)}`;

      nuevaTarjeta.appendChild(nombreMoneda);
      nuevaTarjeta.appendChild(montoConvertido);

      resultadosContainer.appendChild(nuevaTarjeta);

      const mensaje = document.createElement("p");
      mensaje.textContent = `El cambio de pesos a ${monedaNombre} es: $${resultado.toFixed(2)}`;
      resultadosContainer.appendChild(mensaje);

      localStorage.setItem("monedaSeleccionada", monedaSeleccionada);

      swal({
        title: "¡Conversión exitosa!",
        text: `El cambio de pesos a ${monedaNombre} es: €${resultado.toFixed(2)}`,
        icon: "success",
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
  
  const nuevaTarjeta = document.createElement("div");
  nuevaTarjeta.className = "tarjeta";

  const montoConvertido = document.createElement("p");
  montoConvertido.textContent = `$${resultado.toFixed(2)}`;

  nuevaTarjeta.appendChild(nombreMoneda);
  nuevaTarjeta.appendChild(montoConvertido);

  resultadosContainer.appendChild(nuevaTarjeta);
  if (monedaNombre && monedaValor && monedaSeleccionada) {
    const mensaje = document.createElement("p");
    mensaje.textContent = `El cambio de pesos a ${monedaNombre} es: $${resultado.toFixed(2)}`;
    resultadosContainer.appendChild(mensaje);

    localStorage.setItem("monedaSeleccionada", monedaSeleccionada);
  }
}
