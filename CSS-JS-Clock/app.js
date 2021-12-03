const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");

function setDate() {
  const hour = new Date();
  const seconds = hour.getSeconds();
  const mins = hour.getMinutes();
  const hours = hour.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minsDegrees = (mins / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(seconds);
}

setInterval(setDate, 1000);
