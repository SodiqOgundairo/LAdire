// Set the target date to 100 days from June 13th, Nigerian time
const targetDate = new Date("2024-06-11T00:00:00+01:00");
targetDate.setDate(targetDate.getDate() + 102);

function updateCountdown() {
    const now = new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" });
    const currentTime = new Date(now);
    const timeRemaining = targetDate - currentTime;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = `${days} Days`;
        document.getElementById("hours").innerText = `${hours} Hours`;
        document.getElementById("minutes").innerText = `${minutes} Minutes`;
        document.getElementById("seconds").innerText = `${seconds} Seconds`;
    } else {
        document.getElementById("countdown").innerText = "The event has started!";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately on page load
updateCountdown();
