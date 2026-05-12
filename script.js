function unlock() {
    document.getElementById('lock-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
}

function updateClock() {
    let now = new Date();
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('clock').innerText = h + ":" + m;
}
setInterval(updateClock, 1000);
updateClock();
