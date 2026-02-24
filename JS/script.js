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

function generarPaleta() {
  contenedorPaleta.innerHTML = "";
  const cantidad = parseInt(tamanoPaleta.value);
  const usarHEX = interruptorFormato.checked;

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

interruptorFormato.addEventListener("change", () => {
  if (interruptorFormato.checked) {
    interruptorFormato.parentElement.lastChild.textContent = " Usar formato HEX";
  } else {
    interruptorFormato.parentElement.lastChild.textContent = " Usar formato HSL";
  }
});

botonGenerar.addEventListener("click", generarPaleta);