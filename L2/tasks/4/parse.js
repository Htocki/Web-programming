"use strict"

let default_time = Date.now();
let parse_time = Date.parse('1988-04-01T00:00:00');
let difference_in_minutes = Math.floor((default_time - parse_time) / 1000 / 60 / 60);
alert(`Количество часов, прошедшее между 1 марта 1988 года и текущим моментом: ${difference_in_minutes}`);