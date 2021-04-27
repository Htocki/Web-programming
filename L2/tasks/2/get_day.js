"use strict"

function ShowDay(day_number) {
    switch(day_number) {
        case 1:
            return "Понедельник";
            break;
        case 2:
            return "Вторник";
            break;
        case 3:
            return "Среда";
            break;
        case 4:
            return "Четверг";
            break;
        case 5:
            return "Пятница";
            break;
        case 6:
            return "Суббота";
            break;
        case 7:
            return "Воскресенье";
            break;
        default:
            return "Номер дня недели указан некорректно."
    }
}

let date = new Date();
alert(`Текущий день недели: ${ShowDay(date.getDay())}`);

date = new Date("December 7, 2015 00:00:00");
alert(`День недели "07.01.2015": ${ShowDay(date.getDay())}`);

