/* clock */

// global references

const hourHand = document.getElementById("hour-hand");
const minutesHand = document.getElementById("minutes-hand");
const secondsHand = document.getElementById("seconds-hand");

/* ......................................................... */

/* move clock */

// a function that makes clock work by moving hands according to time

const workingClock = () => {
    // use Date object to create a new date
    const date = new Date();

    // determine how many degrees each clock hand should rotate
    let hour = date.getHours() * 30,
        minutes = date.getMinutes() * 6,
        seconds = date.getSeconds() * 6;

    // add rotation to these elements using rotateZ()
    hourHand.style.transform = `rotateZ(${hour + minutes / 12}deg)`;
    minutesHand.style.transform = `rotateZ(${minutes}deg)`;
    secondsHand.style.transform = `rotateZ(${seconds}deg)`;
}

// set interval that call backs workingClock() every 1s

setInterval(workingClock, 1000); // 1000ms = 1s

/* ......................................................... */

/* show time and date */

const timeHour = document.getElementById("time-hour");
const timeMinutes = document.getElementById("time-minutes");
const timeAmPm = document.getElementById("time-ampm");

const dateDay = document.getElementById("date-day");
const dateMonth = document.getElementById("date-month");
const dateYear = document.getElementById("date-year");



// function that shows current time

const showCurrentContent = () => {
    const date = new Date();

    let hour = date.getHours(),
        minutes = date.getMinutes(),
        ampm;
        day = date.getDate();
        month = date.getMonth();
        year = date.getFullYear();

    // determine am-pm based on current time
    if (hour >= 12) {
        hour = hour - 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    // add a zero to hour and minutes if less than 10
    if (hour < 10) {
        hour = `0${hour}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    // change 0 am to 12 am
    if (hour == 0) {
        hour = 12;
    }

    // show hour, minutes and ampm
    timeHour.textContent = `${hour}:`;
    timeMinutes.textContent = `${minutes}`;
    timeAmPm.textContent = `${ampm}`;

    // month array
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"]

    // show day, month and year
    dateDay.textContent = `${day}`;
    dateMonth.textContent = `${months[month]}`;
    dateYear.textContent = `${year}`;

}

// set interval that calls back showClockContent() every 1s;

setInterval(showCurrentContent, 1000);


/* ......................................................... */

// dark/light mode feature

const themeBtn = document.getElementById("theme-btn");
const main = document.getElementById("main");

// add dark mode and change icon css to main when theme button is clicked

const changeTheme = () => {
    // switch theme
    main.classList.toggle("dark__mode");

    // switch icon
    themeBtn.classList.toggle("change__icon");
}

themeBtn.addEventListener("click", changeTheme);

