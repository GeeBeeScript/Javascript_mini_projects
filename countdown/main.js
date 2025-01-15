daysValue = document.querySelector(".day-value");
hoursValue = document.querySelector(".hour-value");
minutesValue = document.querySelector(".minutes-value");
secondsValue = document.querySelector(".seconds-value");
giveAwayEndDetails = document.querySelector(".end-details");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

giveawayDate = new Date("01/22/2025 12:15:00");

function getDateDifference () {
    date = giveawayDate.getDate();
    day = dayOfTheWeek[giveawayDate.getDay()];
    month = months[giveawayDate.getMonth()];
    year = giveawayDate.getFullYear();
    hour = giveawayDate.getHours();
    minutes = giveawayDate.getMinutes();

    giveAwayEndDetails.textContent = `Giveaway ends on ${day}, ${date} ${month} ${year} ${hour}:${minutes}pm`;

    const test1 = new Date();

    const elapsedTime = giveawayDate.getTime() - test1.getTime();

    const toSeconds = 1000;
    const toMinutes = 1000 * 60;
    const toHours = 1000 * 60 * 60;
    const toDays = 1000 * 60 * 60 * 24;

    const daysLeft = Math.floor(elapsedTime / toDays)
    const hoursLeft = Math.floor(elapsedTime / toHours) - (24 * daysLeft)
    const minutesLeft = Math.floor(elapsedTime / toMinutes) - (24 * daysLeft * 60) - (hoursLeft * 60)
    const secondsLeft = Math.floor(elapsedTime / toSeconds) - (24 * daysLeft * 60 * 60) - (hoursLeft * 60 * 60) - (minutesLeft * 60)

    daysValue.innerHTML = daysLeft < 10 ? `0${daysLeft}` : `${daysLeft}`
    hoursValue.innerHTML = hoursLeft < 10 ? `0${hoursLeft}` : `${hoursLeft}`
    minutesValue.innerHTML = minutesLeft < 10 ? `0${minutesLeft}` : `${minutesLeft}`
    secondsValue.innerHTML = secondsLeft < 10 ? `0${secondsLeft}` : `${secondsLeft}`
}

setInterval(getDateDifference, 1000)