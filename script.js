function atualizarTempo() {
    const now = new Date;
    const seconds = now.getSeconds().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const hours = now.getHours().toString().padStart(2,"0");

    const timeString = `${hours}:${minutes}:${seconds}`

    document.getElementById("time").innerText = timeString;
}

setInterval(atualizarTempo, 1000);

atualizarTempo();