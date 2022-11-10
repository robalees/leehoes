const timeElapsed = Date.now();
const dayEl = document.getElementById("days");

function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(timeElapsed);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

dayEl.innerText = getNumberOfDays("9/17/2022",);