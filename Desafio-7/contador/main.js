//alert("Hello World!")
const timerDisplay = document.querySelector("#display")
const modeButtons = document.querySelectorAll(".button-mode")
const mainButtons = document.querySelectorAll(".mainButtons")

const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    mode: "pomodoro"
}
let endTime, interval
let remainingTime = {
    total: timer[timer.mode] * 60,
    minutes: timer[timer.mode],
    seconds: 0,
}

setEndTime(timer[timer.mode] * 60)

modeButtons.forEach(element => {
    element.addEventListener("click", changeMode)
})

mainButtons.forEach(element => {
    element.addEventListener("click", actionMainButton)
})

function actionMainButton(event) {
    const action = event.target.dataset.action;
    switch(action) {
        case "start": startTimer()
            break
        case "pause": clearInterval(interval)
            break
        case "stop": stopTimer()
            break
    }
}

function setEndTime(remainingTime) {
    endTime = Date.parse(new Date()) + remainingTime * 1000
}

function changeMode(event) {
    timer.mode = event.target.dataset.mode
    event.target.classList.add("active")
    stopTimer()
    updateTimer()
}

function updateTimer() {
    const minutes = `${remainingTime.minutes}`.padStart(2, "0")
    const seconds = `${remainingTime.seconds}`.padStart(2, "0")
    timerDisplay.textContent = minutes + ":" + seconds
}

function getRemainingTime(endTime) {
    const currentTime = Date.parse(new Date())
    const difference = endTime - currentTime

    const total = Number.parseInt(difference / 1000, 10)
    const minutes = Number.parseInt((total / 60) % 60, 10)
    const seconds = Number.parseInt(total % 60, 10)

    return {
        total,
        minutes,
        seconds,
    }
}

function startTimer() {
    setEndTime(remainingTime.total)
    interval = setInterval(() => {
        remainingTime = getRemainingTime(endTime)
        updateTimer()
        if(remainingTime.total <= 0) stopTimer()
    }, 1000)
}

function stopTimer() {
    clearInterval(interval)
    remainingTime = {
        total: timer[timer.mode] * 60,
        minutes: timer[timer.mode],
        seconds: 0,
    }
    setEndTime(timer[timer.mode] * 60)
    updateTimer()
}
