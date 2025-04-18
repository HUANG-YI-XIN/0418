const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let waveOffset = 0;
function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin((x + waveOffset) * 0.02) * 30;
        ctx.lineTo(x, y);
    }
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 0.5;
    ctx.stroke();
    waveOffset += 2;
    requestAnimationFrame(drawWave);
}

drawWave();