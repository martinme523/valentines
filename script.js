const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesSize = 1;
const page = window.location.pathname;


// MAIN PAGE (index.html)

if (page.includes("main.html") || page.endsWith("/")) {
  if (noBtn && yesBtn) {
    // NO is clickable → go to why.html
    noBtn.addEventListener("click", () => {
      window.location.href = "why.html";
    });

    // YES → hearts → final page
    yesBtn.addEventListener("click", () => {
      createHearts();
      setTimeout(() => {
        window.location.href = "yes.html";
      }, 1500);
    });
  }
}


// WHY PAGE (why.html)

if (page.includes("why.html")) {
  if (noBtn && yesBtn) {
    // NO runs away
    const escape = () => {
      const x = Math.random() * 250 - 125;
      const y = Math.random() * 120 - 60;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;

      yesSize += 0.12;
      yesBtn.style.transform = `scale(${yesSize})`;
    };

    noBtn.addEventListener("mouseover", escape);
    noBtn.addEventListener("touchstart", escape);

    // YES → hearts → final page
    yesBtn.addEventListener("click", () => {
      createHearts();
      setTimeout(() => {
        window.location.href = "yes.html";
      }, 1500);
    });
  }
}

// =====================
// HEART FUNCTIONS
// =====================
function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

if (page.includes("yes.html")) {
  const emojis = ["💖", "😘", "💋", "😍", "🥰", "💕"];

  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.className = "heart";
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.bottom = "-20px";
    emoji.style.fontSize = Math.random() * 25 + 20 + "px";

    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 4000);
  }, 350);
}

// =====================
// YES PAGE FLOATING TEXT BACKGROUND
// =====================
if (page.includes("yes.html")) {
  const bg = document.querySelector(".floating-bg");

  const texts = [
    "HURRAY 🎉",
    "I love you 💖",
    "Love you 😘",
    "Ummmaaaa 😍",
    "Mutu 🥰",
    "💞💞💞",
    "😘😘",
    "❤️❤️"
  ];

  setInterval(() => {
    const span = document.createElement("span");
    span.className = "bg-text";
    span.innerText = texts[Math.floor(Math.random() * texts.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = Math.random() * 8 + 10 + "s";

    bg.appendChild(span);

    setTimeout(() => span.remove(), 18000);
  }, 700);
}



const noteText = "Ok,see you on 15th Feb Time: 4:45 pm,          Location: Roker Beach ❤️❤️❤️";
const container = document.getElementById('typewriter');

// Clear existing content and create spans for each character
noteText.split("").forEach((char, index) => {
  const span = document.createElement('span');
  // Handle spaces so they don't collapse
  span.innerText = char === " " ? "\u00A0" : char; 
  // Stagger the animation delay
  span.style.animationDelay = `${index * 0.08}s`; 
  container.appendChild(span);
});

// Optional: Play music on first interaction
document.body.addEventListener('click', () => {
  const audio = document.getElementById('bgMusic');
  if (audio) audio.play();
}, { once: true });