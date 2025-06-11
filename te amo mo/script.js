alert("Para você amor 💖")

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Texto de amor que vai cair 💌
const letters = Array(100).fill("Te Amo Brisa");

// Largura da fonte
const fontSize = 18;
const columns = canvas.width / fontSize;

// Posição Y de cada coluna
const drops = Array.from({ length: columns }).fill(1);

function draw() {
  // Fundo com transparência pra dar efeito de rastro
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#CB0C21"; // rosa fofinho 💗
  ctx.font = `${fontSize}px 'Arial'`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 60);
