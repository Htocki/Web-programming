"use strict"

function ct_start() {
    document.getElementById("ct_counter").innerHTML = "10";
    window.timerId = window.setInterval(ct_timer, 1000);
    document.getElementById("ct_start").disabled = true;
}

function ct_stop(){
    window.clearInterval(window.timerId);
    document.getElementById("ct_button").value = "Повторить";
}

function ct_timer(){
    let counter = document.getElementById("ct_counter");
    let number = parseInt(counter.innerHTML) - 1;
    counter.innerHTML = number;
    if (number == 0) {
        ct_stop();
        let timetStop = document.getElementById("ct_stop");
        timetStop.innerHTML = "Обратный отсчет завершен";
    }
}