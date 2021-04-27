"use strict"

let array = [];

for (let i = 2; i < 100; ++i) {
    if (((i % 5) == 2) && ((i % 11) == 2)) {
        array.push(i);
    }
}

alert(`Числа из промежутка [2, 100), которые делятся на 5 и 11 с остатком 2: ${array.join(", ")}.`);