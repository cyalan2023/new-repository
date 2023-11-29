let timerId; // переменная, которая будет хранить ID таймера
const startButton = document.getElementById('start');
let isTamerRunning = false;
startButton.addEventListener("click", function () {
    if(!isTamerRunning){
    timerId = setInterval(updateClock, 1000);
    isTamerRunning = true;
}});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    if(isTamerRunning){
    clearInterval(timerId);
    isTamerRunning = false;
}});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
