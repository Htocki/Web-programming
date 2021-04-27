"use strict"

function GetDaysCount(birthday) {
    let current = new Date();
    current.setHours(0);
    current.setMinutes(0);
    current.setSeconds(0);

    birthday.setFullYear(current.getFullYear());
    if (Date.parse(birthday) < Date.parse(current)) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }

    return Math.floor((Date.parse(birthday) - Date.parse(current)) / 1000 / 60 / 60 / 24);
}

input.onfocus = function() {
    this.value = "";
    result.innerHTML = "";
}

input.onblur = function() {
    let date = new Date(this.value);
    result.innerHTML = `Дней до дня рождения: ${GetDaysCount(date)}`;
}