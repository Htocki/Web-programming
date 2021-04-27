"use strict"

let date = new Date(); 
alert(`Количество минут c 1-го января 1970 года до настоящего момента времени: ${Math.floor(date.getTime() / 1000 / 60)}`);