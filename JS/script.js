function generarColorHSL() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 80) + 20;
  const l = Math.floor(Math.random() * 70) + 20;
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function convertirHSL_A_HEX(hsl) {
  const [h, s, l] = hsl.match(/\d+/g).map(Number);
  const sN = s / 100;
  const lN = l / 100;

  const c = (1 - Math.abs(2 * lN - 1)) * sN;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = lN - c / 2;

  let r = 0, g = 0, b = 0;

  if (h < 60) [r,g,b] = [c,x,0];
  else if (h < 120) [r,g,b] = [x,c,0];
  else if (h < 180) [r,g,b] = [0,c,x];
  else if (h < 240) [r,g,b] = [0,x,c];
  else if (h < 300) [r,g,b] = [x,0,c];
  else [r,g,b] = [c,0,x];

  const aHex = v => {
    const hex = Math.round((v+m)*255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${aHex(r)}${aHex(g)}${aHex(b)}`;
}

const contenedorPaleta = document.getElementById("contenedorPaleta");
const botonGenerar = document.getElementById("botonGenerar");
const tamanoPaleta = document.getElementById("tamanoPaleta");

function generarPaleta() {
  contenedorPaleta.innerHTML = "";
  const cantidad = parseInt(tamanoPaleta.value);

  for (let i = 0; i < cantidad; i++) {
    const hsl = generarColorHSL();
    const hex = convertirHSL_A_HEX(hsl);

    const tarjeta = document.createElement("div");
    tarjeta.textContent = `${hsl} | ${hex}`;
    tarjeta.style.background = hsl;

    contenedorPaleta.appendChild(tarjeta);
  }
}

botonGenerar.addEventListener("click", generarPaleta);