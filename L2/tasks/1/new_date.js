"use strict"

function GetFormattedDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (day < 10) { day = "0" + day }
    if (month < 10) { month = "0" + month; }

    return hours + ":" + minutes + ":" + seconds + " " + day + "." + month + "." + year;
}

let date = new Date();

alert(`Текущий день: ${date.getDate()}\nТекущий месяц: ${date.getMonth()}\nТекущий год: ${date.getFullYear()}`);
alert(`Форматированная текущая дата-время: ${GetFormattedDate(date)}`);

