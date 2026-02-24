function generarColorHSL() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 80) + 20;
  const l = Math.floor(Math.random() * 70) + 20;
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function generarColorHEX() {
  const caracteres = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += caracteres[Math.floor(Math.random() * 16)];
  }
  return color;
}

const interruptorFormato = document.getElementById("interruptorFormato");
const contenedorPaleta = document.getElementById("contenedorPaleta");
const tamanoPaleta = document.getElementById("tamanoPaleta");
const botonGenerar = document.getElementById("botonGenerar");
const formatoLabel = document.getElementById("formatoLabel");

function generarPaleta() {
  const fadeOutMs = 320;
  const cantidad = parseInt(tamanoPaleta.value);
  const usarHEX = interruptorFormato.checked;

  function crearTarjetas() {
    contenedorPaleta.innerHTML = "";
    for (let i = 0; i < cantidad; i++) {
      const color = usarHEX ? generarColorHEX() : generarColorHSL();
      const tarjeta = document.createElement("div");
      tarjeta.textContent = color;
      tarjeta.style.background = color;
      tarjeta.style.color = "#fff";
      contenedorPaleta.appendChild(tarjeta);
      setTimeout(() => {
        tarjeta.classList.add("mostrar");
      }, 50 * i);
    }
  }

  const existing = Array.from(contenedorPaleta.children);
  if (existing.length) {
    existing.forEach(el => {
      el.classList.remove("mostrar");
      el.classList.add("ocultar");
    });
    setTimeout(() => {
      crearTarjetas();
    }, fadeOutMs);
  } else {
    crearTarjetas();
  }
}

// set initial label text
if (formatoLabel) formatoLabel.textContent = interruptorFormato.checked ? "Usando HEX" : "Usando HSL";

interruptorFormato.addEventListener("change", () => {
  if (formatoLabel) formatoLabel.textContent = interruptorFormato.checked ? "Usando HEX" : "Usando HSL";
});

botonGenerar.addEventListener("click", generarPaleta);