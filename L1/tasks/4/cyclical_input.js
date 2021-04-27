"use strict"

let number = 0;

do {
    number = prompt("Введите число: ", "0");
    number *= Math.floor(Math.random() * 10);
    alert(`Результат умножения случайного на введенное: ${number}`)
} while (number < 100);