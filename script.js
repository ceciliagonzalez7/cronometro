const reloj = document.getElementById('reloj')
const pausa = document.getElementById('pausa')
const segundos = document.getElementById('segundos')

let relojInterval;
let runningTime = 0;

const playPause = () => {
    const isPaused = !pausa.classList.contains('running');
    if (isPaused) {
        pausa.classList.add('running');
        start();
    } else {
        pausa.classList.remove('running');
        pause();
    }
}

const pause = () => {
    segundos.style.animationPlayState = 'paused';
    clearInterval(relojInterval);
}

const stop = () => {
    segundos.style.transform = 'rotate(-90deg) translateX(60px)';
    segundos.style.animation = 'none';
    pausa.classList.remove('running');
    runningTime =0;
    clearInterval(relojInterval);
    reloj.textContent = '00:00';
}

const start = () => {
    segundos.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    segundos.style.animationPlayState = 'running';
    relojInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        reloj.textContent = calculateTime(runningTime);
    }, 1000 )
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds/60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
}