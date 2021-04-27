"use strict"

// Добавление элементу #elem класса www, если его нет, и удаление, если класс
// присутствует.
function ResetClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

// Последовательное выведение алертом классов элемента #elem.
function PrintClasses(element) {
    if (!element.classList.length) {
        alert(`Элементу #${element.id} не принадлежит ни один класс.`);
        return;
    }

    let classNames = element.classList;
    let outputString = "";
    for (let className of classNames) {
        outputString += " " + className;
    }
    alert(`Элементу #${element.id} принадлежат классы:${outputString}.`);
}

let element = document.querySelector("#elem");
PrintClasses(element);
alert("Добавление класса www...");
element.classList.add("www");
PrintClasses(element);
alert("Удаление класса www...");
element.classList.remove("www");
PrintClasses(element);
alert(`Содержит ли #${element.id} класс www?: ${element.classList.contains("www")}`);
alert("Добавление отсутсвуюещего класса www...");
ResetClass(element, "www");
PrintClasses(element);
alert("Удаление присутствующего класса www...");
ResetClass(element, "www");
PrintClasses(element);
alert(`Количество классов элемента #${element.id}: ${element.classList.length}`);
PrintClasses(element);