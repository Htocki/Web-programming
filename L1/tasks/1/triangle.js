"use strict"

let a = prompt("Введете а: ", 0);
let b = prompt("Введете b: ", 0);
let c = prompt("Введете c: ", 0);

alert(`Значение a равно: ${a}\nЗначение b равно: ${b}\nЗначение c равно: ${c}`);

if ((a * a + b * b) == c * c) {
    let result = "Ура! Вы угадали длины сторон треугольника!";
    alert(`${result}`);
} else {
    let result = "Ваша удача вас подвела...";
    alert(`${result}`);
}