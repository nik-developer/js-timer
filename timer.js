const countdownTimer = {
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022').getTime(),
};
const timer = {
  start() {
    const targetTime = countdownTimer.targetDate;

    setInterval(function () {
      const currentTime = Date.now();

      const deltaTime = targetTime - currentTime;
      updateClockFace(deltaTime);
    }, 1000);
  },
};
timer.start();

function updateClockFace(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  const timerDays = document.querySelector('#timer-1 [data-value="days"]');
  const timerHours = document.querySelector('#timer-1 [data-value="hours"]');
  const timerMins = document.querySelector('#timer-1 [data-value="mins"]');
  const timerSecs = document.querySelector('#timer-1 [data-value="secs"]');

  timerDays.textContent = days;
  timerHours.textContent = hours;
  timerMins.textContent = mins;
  timerSecs.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
