const scrollToGallery = document.getElementById('scrollToGallery');
const toggleMusicBtn = document.getElementById('toggleMusic');
const revealNoteBtn = document.getElementById('revealNote');
const closeNoteBtn = document.getElementById('closeNote');
const hiddenNoteModal = document.getElementById('hiddenNote');
const bgMusic = document.getElementById('bgMusic');

scrollToGallery.addEventListener('click', () => {
  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
});

revealNoteBtn.addEventListener('click', () => {
  hiddenNoteModal.classList.add('active');
});

closeNoteBtn.addEventListener('click', () => {
  hiddenNoteModal.classList.remove('active');
});

hiddenNoteModal.addEventListener('click', (event) => {
  if (event.target === hiddenNoteModal) {
    hiddenNoteModal.classList.remove('active');
  }
});

let isMusicPlaying = false;

// Add your audio file path here.
// Example: bgMusic.src = 'audio/bg-music.mp3';
// If you want to use an online track, add a direct URL.
bgMusic.src = 'audio/bg-music.mp3';

toggleMusicBtn.addEventListener('click', () => {
  if (!bgMusic.src) {
    alert('Add an audio file path to script.js to enable background music.');
    return;
  }

  if (isMusicPlaying) {
    bgMusic.pause();
    toggleMusicBtn.textContent = 'Play soft music';
  } else {
    bgMusic.play();
    toggleMusicBtn.textContent = 'Pause music';
  }

  isMusicPlaying = !isMusicPlaying;
});

const readMoreButtons = document.querySelectorAll('.read-more-btn');
readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const detail = button.previousElementSibling;
    const isOpen = detail.classList.toggle('active');
    button.textContent = isOpen ? 'Show Less' : 'Read More';
  });
});
