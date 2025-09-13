const title = document.querySelector('.title')
const text = `I Have Something `.split('')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});

// js/index.js
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');

  // Coba mainkan audio otomatis
  audio.play().catch(() => {
    // Kalau autoplay diblok, tunggu user klik untuk play
    const playAudioOnClick = () => {
      audio.play();
      document.body.removeEventListener('click', playAudioOnClick);
    };
    document.body.addEventListener('click', playAudioOnClick);
  });
});
