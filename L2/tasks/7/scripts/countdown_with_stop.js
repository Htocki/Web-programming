"use strict"

function cws_start(){
    window.timerId = window.setInterval(cws_timer, 1000);
    document.getElementById('cws_start_button').disabled = true;
    document.getElementById('cws_stop_button').disabled = false;
}

function cws_stop(){
    window.clearInterval(window.timerId);
    document.getElementById('cws_start_button').disabled = false;
    document.getElementById('cws_stop_button').disabled = true;
    document.getElementById('cws_start_button').value = "Продолжить";
}
function cws_timer(){
    let counter = document.getElementById('cws_counter');
    cws_counter.innerHTML = parseInt(counter.innerHTML) + 1;
}