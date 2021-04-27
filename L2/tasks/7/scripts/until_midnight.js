"use strict"

function um_start(){
    window.timerId = window.setInterval(um_timer, 1000);
}

function um_timer(){
    let hours = document.getElementById('um_hours');
    let minutes = document.getElementById('um_minutes');
    let seconds = document.getElementById('um_seconds');
    
    let now = new Date();
    let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    
    let difference =  Math.floor((midnight - now) / 1000);
    
    var hours_remain = Math.floor(difference / (60 * 60));
    var minutes_remain = Math.floor((difference - hours_remain * 60 * 60) / 60);
    var seconds_remain = Math.floor(difference % 60);
    
    um_hours.innerHTML = add_zero(hours_remain);
    um_minutes.innerHTML = add_zero(minutes_remain);
    um_seconds.innerHTML = add_zero(seconds_remain); 
}

function add_zero(number) {
    if (number <= 9) return '0' + number;
    else return number;
}