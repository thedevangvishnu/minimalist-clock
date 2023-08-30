/* clock */

/*........... move clock based on current time ...........*/

// global references

const hourHand = document.getElementById("hour-hand");
const minutesHand = document.getElementById("minutes-hand");

// workingClock() moves hour and minutes hand based on current time

const workingClock = () => {
    // create a date object
    const date = new Date();

    // determine the rotation degree each hand is supposed to move 
    let hour = date.getHours() * 30; // 12 hours make 360deg => 1 hour makes 30deg
    let minute = date.getMinutes() * 6; // 60 minutes make 360deg => 1 minute makes 6deg;

    // user rotateZ() value to create an illusion of rotation
    hourHand.style.transform = `rotateZ(${hour + minute / 12}deg)`;
    minutesHand.style.transform = `rotateZ(${minute}deg)`;

}

// set interval that calls back workingClock() every 1s.

setInterval(workingClock, 1000);


/*........... show clock data ...........*/

// global references
const timeHour = document.getElementById("hour"),
      timeMinutes = document.getElementById("minutes"),
      timeAmPm = document.getElementById("ampm"),
      dateDay = document.getElementById("day"),
      dateMonth = document.getElementById("month"),
      dateCurrentDate = document.getElementById("current-date"),
      dateYear = document.getElementById("year");

// showClockData() shoes day, date and time based on current date and time

const showClockData = () => {
    // a reference to date object
    let date = new Date();

    // a months array that stores names of all the months
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    // a days array that stores names of all the days
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // reference to all required elements
    let hour = date.getHours(),
        minute = date.getMinutes(),
        ampm,
        day = date.getDay(),
        month = date.getMonth(),
        currentDate = date.getDate(),
        year = date.getFullYear();


    /* show time */

    // determine whether its am or pm
    if (hour >= 12) {
        hour -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    // if its 0 am convert it to 12 am.
    if (hour == 0) {hour = 12};

    // add zero to hour and minutes if less than 10
    if (hour < 10) {hour = `0${hour}`};
    if (minute < 10) {minute = `0${minute}`};

    // use textContent to display time
    timeHour.textContent = `${hour}:`;
    timeMinutes.textContent = `${minute}`;
    timeAmPm.textContent = `${ampm}`;
    dateDay.textContent = `${days[day]}`;
    dateMonth.textContent = `${months[month]}`;
    dateCurrentDate.textContent = `${currentDate},`;
    dateYear.textContent = `${year}`;
}

// set interval that calls back showClockData() every 1s

setInterval(showClockData, 1000);   


/*........... theme change ...........*/

const themeBtn = document.getElementById("theme-btn"),
      main = document.getElementById("main");

// changeTheme() changes the color theme by adding a new class to main
const changeTheme = () => {
    main.classList.toggle("dark__theme");

    // change icon by adding change__icon class to theme btn
    themeBtn.classList.toggle("change__icon");
}

// change theme when the theme btn is clicked

themeBtn.addEventListener("click", changeTheme);
