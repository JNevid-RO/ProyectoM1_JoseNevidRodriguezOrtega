function generarColorHSL() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 80) + 20;
  const l = Math.floor(Math.random() * 70) + 20;
  return `hsl(${h}, ${s}%, ${l}%)`;
}
