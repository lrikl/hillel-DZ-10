'use strict';

let userNumbInput = prompt("Введіть ціле число");
userNumbInput = userNumbInput?.trim();

if (!userNumbInput || !Number.isInteger(Number(userNumbInput))) { // Перевірка на пусте значення, null, NaN, ціле число
    console.log("Error! Некоректне число. Введіть ціле число.");
}
else {
    const userNumb = Number(userNumbInput);
    
    if (userNumb <= 1) {
        console.log("не просте число");
    }
    else {
        let isPrime = true;

        for(let i = 2; i <= Math.sqrt(userNumb); i++) { 
            if (userNumb % i === 0) {
                isPrime = false; 
                break;
            }
        }

        if (isPrime) {
            console.log("просте число");
        } else {
            console.log("не просте число");
        }
    }
}



