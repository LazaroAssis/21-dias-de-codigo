const progressBar = document.querySelector("#progress-bar")
const startProgressButton = document.querySelector("#start")

startProgressButton.addEventListener("click", updateProgressBar);


function updateProgressBar() {
    let progress = 0;
    let interval = setInterval(increment, 100);
    function increment() {
        if(progress === 100) {
            clearInterval(interval)
        } else {
            progress++
            progressBar.style.width = progress + "%"
            progressBar.innerHTML = progress + "%"
        }
    }
}

