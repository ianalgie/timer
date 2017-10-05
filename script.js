let countdown;
const timerDisplay = document.querySelector('.display_time_left');

function timer(seconds) {
  // clear any existing timer
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // check if we should stop it
    if(secondsLeft < 0) {
      clearInterval(countdown);

      // do something when countdown is complete
      completed();
      return;
    }

    // diplay it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});

function completed() {
  console.log("Finished!");
}
