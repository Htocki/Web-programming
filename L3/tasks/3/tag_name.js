"use strict"

function PrintTagInformation() {
    let element = document.querySelector("#elem")
    alert(`Название тега: "${element.tagName}"\n` + 
          `Hазавание тега в нижнем регистре: "${element.tagName.toLowerCase()}"`
    );
}

let www_elements = document.getElementsByClassName("www");
for (let www_element of www_elements) {
    www_element.textContent = 'Тег: "' + www_element.tagName + '"';
}