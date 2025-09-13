
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('for u ncii><').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

// js/main.js
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
