"use strict"

function cti_start(){
    if (cti_counter.innerHTML == "0") {
        window.timerId = setInterval(cti_timer, 1000);
    }
}

function cti_timer(){
    let counter = document.getElementById("cti_counter");
    cti_counter.innerHTML = parseInt(counter.innerHTML) + 1;
}