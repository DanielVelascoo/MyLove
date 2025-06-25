const frases = [
  "Eres el insomnio que no quiero curar, la ansiedad dulce que me mantiene vivo.",
  "Te pienso como se piensa lo prohibido: con culpa, con deseo, con necesidad.",
  "Si pudiera escribirte con la sangre, lo haría. Pero ni mis venas alcanzan para todo lo que siento.",
  "Eres esa ausencia que se sienta a cenar conmigo cada noche.",
  "Tú no llegaste a mi vida; tú te derramaste sobre ella, como lluvia que no pide permiso.",
  "A veces me asusta cuánto te pienso, como si fueras una idea fija que ha tomado el control.",
  "No hay distancia que me aleje de ti porque estás adentro, y no hay adentro más profundo que tú.",
  "Te amo con la desesperación de quien sabe que todo es efímero, menos esto.",
  "Estás en cada línea que no escribo por miedo a que leas lo que no me atrevo a decir.",
  "Mi amor por ti es un incendio sin llamas, pero con cenizas eternas.",
  "Me he convertido en un archivo de tus gestos, de tus miradas, de tus silencios.",
  "Eres la contradicción perfecta: paz que inquieta, luz que ciega, amor que duele.",
  "Amarte es un acto de fe ciega. Y aún así, no dejo de lanzarme al vacío de ti.",
  "Desde que existes, la palabra 'soledad' dejó de ser un refugio y se volvió castigo.",
  "Te extraño como se extraña el oxígeno en una habitación cerrada: con urgencia y temblor.",
  "Tu voz quedó grabada en mis huesos, como si cada palabra tuya hubiera sido un tatuaje sonoro.",
  "No sabría cómo no amarte, aunque me dieran instrucciones detalladas.",
  "Hay algo en ti que me destroza, y sin embargo, corro hacia ti como quien corre hacia su verdugo.",
  "Si te pienso tanto es porque eres lo único que tiene sentido cuando todo lo demás falla.",
  "Eres mi constante error voluntario, la herida que rehúso cerrar.",
  "Hay lugares de mi alma que solo tú conoces, aunque nunca hayas estado ahí físicamente.",
  "Eres el pensamiento que nunca se va, incluso cuando todo parece estar en silencio.",
  "No sé si te amo, o si me duele no poder detener el amor que siento por ti.",
  "A veces, hablar de ti es como intentar atrapar el viento: solo quedan palabras enredadas en las manos.",
  "Te amo de esa forma que no se puede decir sin romperse un poco por dentro.",
  "No hay refugio más cálido que imaginar tu abrazo en medio de la tormenta.",
  "Eres como una carta escrita con fuego, imposible de tocar sin arder.",
  "Cada noche soy una carta que no te envío, pero que firmo con todo lo que no digo.",
  "Cuando te miro, el mundo se calla como si esperara que tú hablaras por él.",
  "Eres mi punto de fuga, mi ruptura lógica, mi error favorito en el plano perfecto.",
  "Pensarte es construir una catedral en medio del desierto, y aún así llenarla de sentido.",
  "Eres el poema que nunca termina, porque cada día encuentro una nueva forma de leerte.",
  "A veces dudo de mí, pero nunca de lo que tú despiertas en mí.",
  "Te amo con la fuerza de lo que no tiene explicación, como se ama lo que ya es parte de uno.",
  "Tú eres esa idea que no se olvida, incluso cuando se intenta enterrar.",
  "No sé si eres realidad o delirio, pero sin ti todo me sabe a sombra.",
  "Estás tan adentro que mis pensamientos a veces usan tu voz sin querer.",
  "El día que te vi, el mundo se corrigió por un instante... y luego volvió a doler.",
  "Eres la única coincidencia que no cambiaría, incluso si pudiera volver a empezar.",
  "A veces deseo ser el aire que respiras, no para tocarte, sino para habitarte sin ser notado.",
  "Eres la grieta que hace que toda mi estructura tiemble, y aún así no quiero repararte.",
  "Cada vez que cierro los ojos, tu rostro aparece como un secreto que no quiere ser olvidado.",
  "Si escribir pudiera salvarme de amarte, entonces tendría libros enteros y seguirías en mí.",
  "Hay en tu nombre una música que desafina todos mis silencios.",
  "Eres el abismo que no me da miedo saltar, porque sé que caer contigo vale la pena.",
  "Mi alma te llama incluso cuando mi boca guarda silencio.",
  "Eres como una página arrancada del libro de mi vida: la más importante, aunque no esté.",
  "Te amo como quien recuerda un sueño que no quiere despertar.",
  "Si pudieras ver cómo se ilumina mi oscuridad cuando pienso en ti, sabrías lo necesario que eres.",
  "Eres la calma del abismo, el eco dulce de mi cruz.",
  "Tu amor es llama que quema y cura, herida abierta que me asegura.",
  "En la penumbra de mi pecho, tu ausencia grita y no hay derecho.",
  "Si tu voz fuera un poema, yo sería tinta en cada esquema.",
  "Eres tempestad que arrasa y al mismo tiempo mi casa.",
  "No hay reloj que mida el daño de amarte tarde, amarte extraño.",
  "Tus ojos son faros tristes, guían mi alma donde tú existes.",
  "Eres promesa que el viento no borra, caricia lenta que nunca demora.",
  "No me basta con pensarte, quiero existir al recordarte.",
  "Eres lágrima callada que no duele, pero arde.",
  "Si el destino es cruel contigo, que al menos me deje abrigo.",
  "Eres verso sin final, melodía sin igual.",
  "Cada vez que no te tengo, mi piel escribe tu ausencia en su tiempo.",
  "Tu amor me duele bonito, como canción que no quito.",
  "Fuiste noche en mi costado, luna llena en mi pasado.",
  "Tu risa es ruido bendito, mi caos se vuelve bonito.",
  "Si el amor fuera castigo, que siempre seas mi abrigo.",
  "Tus silencios son poemas que no entiendo pero amo.",
  "Eres raíz y tormenta, presencia que no se ausenta.",
  "A veces tu recuerdo es viento que acaricia y rompe lento.",
  "Te llevaría en mis ojos si pudiera verte siempre.",
  "Eres reflejo en mi niebla, llama viva en mi tiniebla.",
  "Si te pierdo, que sea soñando, porque así sigo buscándote.",
  "Me haces falta de una forma que no cabe en palabras ni en formas.",
  "En el temblor de mis dedos, tu nombre danza en secretos.",
  "Eres principio y condena, y aun así, la paz que llena.",
  "Tu mirada es como rezo, que se clava sin regreso.",
  "Amarte es cruzar el cielo sin saber si hay suelo.",
  "En tus labios vive el fuego que ni el miedo apaga luego.",
  "Si pudiera detener el día, sería el que te vio sonreír.",
  "Tu recuerdo pesa tanto, y aún así lo cargo con canto.",
  "Si eres sueño, no despiertes. Si eres real, no me sueltes.",
  "Eres herida que el tiempo no cierra, cicatriz que espera.",
  "Cada noche sin tus ojos, el mundo es un poco menos cierto.",
  "Tus pasos dejaron huellas que mi alma siempre rastrea.",
  "Eres canción que no acaba, melodía que desarma.",
  "No sé si te inventé o si el destino me dejó soñarte.",
  "Eres rincón donde duermo cuando el mundo me desarma.",
  "Amarte es firmar un pacto con la eternidad del alma.",
  "Te pienso en versos callados, en latidos retrasados.",
  "Tu amor es rima y es caos, es dolor y es abrazo.",
  "De ti me curo amándote más, aunque duela lo que das.",
  "Te llevaré en mi voz, aunque no quede más que sombra.",
  "Eres la flor que no toco, por miedo a marchitar lo poco.",
  "Amarte es decir sin boca, escribir sin tinta ni hoja.",
  "Eres jardín que me habita, aun si el mundo me quita.",
  "Tus gestos son poesía escrita en piel y melodía.",
  "Eres la página que no leo, por temor a comprender lo que deseo."
];

let escribiendo = false;

function escribirEfecto(texto, elemento, velocidad = 40) {
  let i = 0;
  escribiendo = true;
  elemento.innerHTML = "";

  const intervalo = setInterval(() => {
    elemento.innerHTML += texto.charAt(i);
    i++;
    if (i >= texto.length) {
      clearInterval(intervalo);
      escribiendo = false;
    }
  }, velocidad);
}

function nuevaFrase() {
  if (escribiendo) return;

  const fraseElemento = document.getElementById("frase");
  const indice = Math.floor(Math.random() * frases.length);
  const frase = frases[indice];
  escribirEfecto(frase, fraseElemento);
}