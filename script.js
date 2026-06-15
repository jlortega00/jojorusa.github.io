// ===============================
// CONFIGURACIÓN RÁPIDA
// ===============================
// Cambia esta fecha por vuestro aniversario real.
// Formato recomendado: "AAAA-MM-DDT00:00:00"
const START_DATE = "2024-07-07T00:00:00";

// Cambia estos textos si quieres personalizar el efecto máquina de escribir.
const TYPING_MESSAGES = [
  "Cargando recuerdos...",
  "Analizando sonrisas...",
  "Encontrando nuestra historia...",
  "Resultado: dos años increíbles."
];

// ===============================
// EFECTO MÁQUINA DE ESCRIBIR
// ===============================
const typingElement = document.querySelector("#typingText");
let messageIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typingElement) return;

  const current = TYPING_MESSAGES[messageIndex];
  const visibleText = current.slice(0, charIndex);
  typingElement.textContent = visibleText;

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeLoop, 58);
    return;
  }

  if (!deleting && charIndex === current.length) {
    deleting = true;
    setTimeout(typeLoop, 1250);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 28);
    return;
  }

  deleting = false;
  messageIndex = (messageIndex + 1) % TYPING_MESSAGES.length;
  setTimeout(typeLoop, 280);
}

typeLoop();

// ===============================
// CONTADOR DE TIEMPO JUNTOS
// ===============================
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

function updateCounter() {
  const start = new Date(START_DATE).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - start);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (daysEl) daysEl.textContent = String(days).padStart(3, "0");
  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
  if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
  if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);

// ===============================
// ANIMACIONES AL HACER SCROLL
// ===============================
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach(item => revealObserver.observe(item));

// ===============================
// MODAL SECRETO
// ===============================
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const secretModal = document.querySelector("#secretModal");

openModal?.addEventListener("click", () => {
  secretModal?.showModal();
});

closeModal?.addEventListener("click", () => {
  secretModal?.close();
});

secretModal?.addEventListener("click", event => {
  if (event.target === secretModal) {
    secretModal.close();
  }
});

// ===============================
// CONFETI SIN LIBRERÍAS
// ===============================
const confettiButton = document.querySelector("#confettiButton");

function launchConfetti() {
  const amount = 90;

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.top = "-20px";
    piece.style.animationDuration = `${2.2 + Math.random() * 2.1}s`;
    piece.style.animationDelay = `${Math.random() * 0.25}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    const colors = ["#ff5fa2", "#ff8bc7", "#ffd08a", "#9b6bff", "#ffffff"];
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 4600);
  }
}

confettiButton?.addEventListener("click", launchConfetti);

const confettiStyle = document.createElement("style");
confettiStyle.textContent = `
  .confetti-piece {
    position: fixed;
    z-index: 999;
    width: 10px;
    height: 16px;
    border-radius: 3px;
    pointer-events: none;
    animation: confettiFall linear forwards;
  }

  @keyframes confettiFall {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    100% {
      opacity: 0;
      transform: translate3d(calc(-80px + 160px * var(--x, 1)), 110vh, 0) rotate(720deg);
    }
  }
`;
document.head.appendChild(confettiStyle);

// ===============================
// PARTÍCULAS SUAVES DE FONDO
// ===============================
const canvas = document.querySelector("#particles");
const ctx = canvas?.getContext("2d");
let particles = [];

function resizeCanvas() {
  if (!canvas || !ctx) return;
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
}

function createParticles() {
  const count = window.innerWidth < 700 ? 36 : 70;
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 2.2 + 0.7,
    speed: Math.random() * 0.35 + 0.08,
    alpha: Math.random() * 0.45 + 0.16
  }));
}

function drawParticles() {
  if (!canvas || !ctx) return;

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach(p => {
    p.y -= p.speed;

    if (p.y < -10) {
      p.y = window.innerHeight + 10;
      p.x = Math.random() * window.innerWidth;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 180, 218, ${p.alpha})`;
    ctx.fill();
  });

  requestAnimationFrame(drawParticles);
}

resizeCanvas();
createParticles();
drawParticles();

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});
