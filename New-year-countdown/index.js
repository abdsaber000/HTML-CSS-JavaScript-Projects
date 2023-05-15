const dayEl = document.getElementById("day");

const hourEl = document.getElementById("hour");

const minuteEl = document.getElementById("minute");

const secondEl = document.getElementById("second");

const newYearDate = new Date("Jan 1, 2024 00:00:00").getTime();

updateCountdown();

function updateCountdown(){
    const now = new Date().getTime();

    var difference  = newYearDate - now;

    const second = 1000; // 1000ms = 1s

    const minute = second * 60;

    const hour = minute * 60;
    
    const day = hour * 24;

    const remainingDays = Math.floor(difference / day);
    
    difference %= day;

    const remainingHours = Math.floor(difference / hour);

    difference %= hour;

    const remainingMinutes = Math.floor(difference / minute);

    difference %= minute;

    const remainingSeconds = Math.floor(difference / second);

    dayEl.innerHTML = remainingDays;

    hourEl.innerHTML = remainingHours;

    minuteEl.innerHTML = remainingMinutes;

    secondEl.innerHTML = remainingSeconds;

    setTimeout(updateCountdown , second); // recalling every second
}