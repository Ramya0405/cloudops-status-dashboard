function refreshDashboard() {

    const updated = document.getElementById("lastUpdated");

    const now = new Date();

    const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    updated.textContent = time;

    console.log("Dashboard refreshed at:", time);
}


// Automatically update the timestamp every 30 seconds

setInterval(() => {

    const updated = document.getElementById("lastUpdated");

    const now = new Date();

    updated.textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

}, 30000);