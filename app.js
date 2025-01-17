const countdown = () => {
    const countDate = new Date('Jan 1, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const daysLeft = Math.floor(gap / day);
    const hoursLeft = Math.floor((gap % day) / hour);
    const minutesLeft = Math.floor((gap % hour) / minute);
    const secondsLeft = Math.floor((gap % minute) / second);

    document.querySelector("#days").innerText = formatTime(daysLeft);
    document.querySelector("#hours").innerText = formatTime(hoursLeft);
    document.querySelector("#mins").innerText = formatTime(minutesLeft);
    document.querySelector("#secs").innerText = formatTime(secondsLeft);

    function formatTime(time){
        return time < 10 ? (`0${time}`) : time;
    }
};

setInterval(countdown, 1000);
