function unlock() {
    document.getElementById('lock-screen').style.transform = 'translateY(-100%)';
    document.getElementById('home-screen').classList.add('active');
}

function updateClock() {
    let now = new Date();
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let timeString = h + ":" + m;
    
    document.getElementById('clock').innerText = timeString;
    document.getElementById('stat-time').innerText = timeString;

    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('date').innerText = now.toLocaleDateString('en-US', options);
}

setInterval(updateClock, 1000);
updateClock();
