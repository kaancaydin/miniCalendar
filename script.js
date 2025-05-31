const container = document.getElementById("calendar-container")

function updateTime(){
    const date = new Date();
    const zamanGoster = document.getElementById("gosterim")
    const monthName = date.toLocaleString("tr",{month: "long"})
    const dayName = date.toLocaleString("tr",{weekday: "long"})
    const dayNum = date.getDate();
    const year = date.getFullYear();
    const hours = ('0' + date .getHours()).slice(-2);
    const mins = ('0' + date .getMinutes()).slice(-2);
    const seconds = ('0' + date .getSeconds()).slice(-2);
    const zaman = `⏰${hours}:${mins}:${seconds}`;

     container.innerHTML = `
        <p class="month-name" id="month-name">${monthName}</p>
        <p class="day-name" id="day-name">${dayName}</p>
        <p class="day-number" id="day-number">${dayNum}</p>
        <p class="year" id="year">${year}</p>
        <p class="hour" id="gosterim">${zaman}</p>
        `
 }

 updateTime();

 setInterval(updateTime,1000);