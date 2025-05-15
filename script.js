const messages = [
    "Te amo muchísimo",
    "Gracias por estar en mi vida",
    "Eres mi persona favorita",
    "Juntos por siempre ®",
    "Tú y yo, para siempre",
    "Tu sonrisa me ilumina",
    "Eres lo mejor que me ha pasado",
    "Cada momento contigo es mágico",
    "Siempre pienso en ti",
    "Mi corazón es tuyo",
    "Tu cuerpo es único y perfecto tal como es",
    "Eres hermosa/o desde adentro hacia afuera",
    "Cada parte de ti merece amor y respeto",
    "Tu cuerpo es tu hogar, trátalo con cariño",
    "La belleza real está en aceptarte tal como eres",
    "Tu valor no depende de tu apariencia",
    "Cada cicatriz, cada curva, cuenta tu historia",
    "Eres suficiente, exactamente como estás hoy",
    "Tu cuerpo te sostiene y te acompaña siempre",
    "Amarte a ti misma/o es un acto de valentía",
    "No necesitas cambiar nada para ser increíble",
    "Tu cuerpo merece amor, no críticas",
    "Brillas con tu luz propia, no la apagues por nadie",
    "La perfección está en lo auténtico, como tú",
    "Mírate con los ojos del amor, no del juicio",
    "Tu piel, tu forma, tu esencia: todo en ti es hermoso",
    "El amor propio es el primer paso hacia la felicidad",
    "Tú defines tu belleza, nadie más",
    "Aceptar tu cuerpo es honrar tu historia",
    "La forma en la que hablas de ti importa: háblate con amor"
  ];
  
  
  function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];
  
    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;
  
    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";
  
    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);
  
    setTimeout(() => {
      const rect = bubble.getBoundingClientRect();
  
      if (rect.right > window.innerWidth) {
        const newLeft = window.innerWidth - rect.width - 10;
        bubble.style.left = `${newLeft}px`;
      }
      if (rect.bottom > window.innerHeight) {
        const newTop = window.innerHeight - rect.height - 10;
        bubble.style.top = `${newTop}px`;
      }
      if (rect.left < 0) {
        bubble.style.left = "10px";
      }
      if (rect.top < 0) {
        bubble.style.top = "10px";
      }
    }, 0);
  
    setTimeout(() => {
      bubble.remove();
    }, 8000);
  }
  
  // Crear burbujas cada 500ms
  setInterval(createTextBubble, 500);
  
