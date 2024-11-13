const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

let isPlaying = false;
let currentTime = 0;
const totalDuration = 210;

playPauseButton.addEventListener('click', () => {
  isPlaying = !isPlaying;
  playPauseButton.textContent = isPlaying ? '⏸' : '▶️';
});

setInterval(() => {
  if (isPlaying && currentTime < totalDuration) {
    currentTime++;
    progressBar.value = (currentTime / totalDuration) * 100;
    updateTimerDisplay();
  }
}, 1000);

function updateTimerDisplay() {
  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = currentTime % 60;
  currentTimeEl.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

  const totalMinutes = Math.floor(totalDuration / 60);
  const totalSeconds = totalDuration % 60;
  durationEl.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
}
