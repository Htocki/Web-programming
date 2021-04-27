"use strict"

function tc_start() {
    window.timerId = window.setInterval(tc_timer, 1000);
}

function tc_timer() {
    let clock = document.getElementById('tc_clock');
    let date = new Date();
    tc_clock.innerHTML = add_zero(date.getHours()) + ':' + add_zero(date.getMinutes()) + ':' + add_zero(date.getSeconds());
}

function add_zero(number) {
    if (number <= 9) return '0' + number;
    else return number;
}