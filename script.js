async function nuevaFrase() {
  if (escribiendo) return;

  const fraseElemento = document.getElementById("frase");
  fraseElemento.innerHTML = "Generando frase...";

  try {
    const res = await fetch("https://agropecuario.net/constancias/indexes.php", {
      method: "POST"
    });

    const data = await res.json();
    if (data.frase) {
      escribirEfecto(data.frase, fraseElemento);
    } else {
      fraseElemento.innerHTML = "No se pudo generar la frase.";
    }
  } catch (error) {
    fraseElemento.innerHTML = "Error al contactar el servidor.";
    console.error(error);
  }
}
