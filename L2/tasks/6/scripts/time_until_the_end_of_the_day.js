"use strict"

let end_day_date = new Date();
end_day_date.setHours(0);
end_day_date.setMinutes(0);
end_day_date.setSeconds(0);
end_day_date.setMilliseconds(0);
end_day_date.setDate(end_day_date.getDate() + 1);

let end = Date.parse(end_day_date);
let now = Date.now();
let difference_in_seconds = Math.floor((end - now) / 1000);

alert(`Количество секунд, которое осталось до конца дня: ${difference_in_seconds}`);