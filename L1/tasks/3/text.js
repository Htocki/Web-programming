"use strict"

let size = Math.floor(Math.random() * 50);
let text = "";
if ((size == 1) || (size == 21) || (size == 31) || (size == 41)) {
    text = prompt(`Введите текст размером не менее ${size} символа:`);
} else {
    text = prompt(`Введите текст размером не менее ${size} символов:`);
}

let words = text.split(' ');
let temp = words[0];
words[0] = words[words.length - 1];
words[words.length - 1] = temp;
text = words.join(" ");

alert(text);