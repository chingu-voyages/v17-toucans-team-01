const accordions = document.querySelectorAll('.accordion');

const countdownDays = document.querySelectorAll('#days');
const countdownHours = document.querySelectorAll('#hours');
const countdownMinutes = document.querySelectorAll('#mins');
const countdownSeconds = document.querySelectorAll('#secs');

// Toggle the FAQ Dropdowns
function toggleAccordion() {
  this.lastElementChild.classList.toggle('accordion__response--visible');
}

// Set countdown timer to restart at midnight everyday
function setCountdown() {
  const now = new Date();
  let daysLeft = 0;
  let hoursLeft = 23 - now.getHours();
  let minutesLeft = 59 - now.getMinutes();
  let secondsLeft = now.getSeconds();

  // Format 0 prefixes
  if (daysLeft < 10) daysLeft = `0${daysLeft}`;
  if (hoursLeft < 10) hoursLeft = `0${hoursLeft}`;
  if (minutesLeft < 10) minutesLeft = `0${minutesLeft}`;
  if (secondsLeft < 10) secondsLeft = `0${secondsLeft}`;

  countdownDays.innerText = daysLeft;

  countdownDays.forEach(dayEl => {
    dayEl.innerText = daysLeft;
  });

  countdownHours.forEach(hourEl => {
    hourEl.innerText = hoursLeft;
  });

  countdownMinutes.forEach(minuteEl => {
    minuteEl.innerText = minutesLeft;
  });

  countdownSeconds.forEach(secondEl => {
    secondEl.innerText = secondsLeft;
  });
}

// Update Dom
setCountdown();
setInterval(setCountdown, 1000);

//*  Event Listeners
// FAQ Dropdowns
accordions.forEach(accordion =>
  accordion.addEventListener('click', toggleAccordion)
);
