const timeTexts = document.querySelectorAll('.numbers-container h1');

let [days, hours, minutes, seconds] = [...timeTexts].map((item) =>
  Number(item.innerText)
);

let [daysElement, hoursElement, minutesElement, secondsElement] = [
  ...timeTexts,
];

const timeDecrement = (time, timeElement, defaultDecrementValue) => {
  if (!time) {
    time = defaultDecrementValue;
  } else {
    time--;
  }
  timeElement.innerText = time > 9 ? time : '0' + time;
  return time;
};

const timeInterval = setInterval(() => {
  if (!days && !hours && !minutes && seconds === 1) {
    clearInterval(timeInterval);
  }

  seconds = timeDecrement(seconds, secondsElement, 59);
  if (seconds === 59) {
    minutes = timeDecrement(minutes, minutesElement, 59);
    if (minutes === 59) {
      hours = timeDecrement(hours, hoursElement, 23);
      if (hours === 23) {
        days--;
        daysElement.innerText = days > 9 ? days : '0' + days;
      }
    }
  }
}, 1000);
