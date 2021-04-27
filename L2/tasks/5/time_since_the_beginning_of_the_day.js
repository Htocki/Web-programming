"use strict"

let begin_day_date = new Date();
begin_day_date.setHours(0);
begin_day_date.setMinutes(0);
begin_day_date.setSeconds(0);
begin_day_date.setMilliseconds(0);

let begin = Date.parse(begin_day_date);
let now = Date.now();
let difference_in_seconds = Math.floor((now - begin) / 1000);

alert(`Количество секунд с начала дня до настоящего момента времени: ${difference_in_seconds}`);