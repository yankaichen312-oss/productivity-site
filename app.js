function addTask() {
    let task = document.getElementById("taskInput").value;
    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}

let time = 1500;
let timerRunning = false;

function startTimer() {
    if (timerRunning) return;
    timerRunning = true;

    let countdown = setInterval(function() {
        time--;

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("timer").innerText =
            minutes + ":" + seconds;

        if (time <= 0) {
            clearInterval(countdown);
            alert("Time is up!");
            timerRunning = false;
        }
    }, 1000);
}