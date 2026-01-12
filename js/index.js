'use strict'

let elButton = document.getElementById('my-button')
elButton.addEventListener("click", sayAlert)

function sayAlert() { 
    console.log("Спасибо, что нажали)")
}

sayAlert()

// console.log("Привет!!!!", elButton)


let boolean = true; // false
let number = 1; // 1.2, -1
let string = "text"; // 'text'
let undefinedType; // undefined
undefinedType = 1; // 1
let nullType = null; // null
let object = {
    number: 123,
    str: 123,
};
let arr = [1, 2, 3, 4] // Array
console.log(typeof number)
console.log(typeof object)


console.log("b" + "a" + +"a" + "a") // NaN
console.log(NaN === NaN)

console.log(!![]) // true
console.log([] == true) // false


true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true

parseInt("f*ck", 10); // -> NaN
parseInt("f*ck", 16); // -> 15

true + true; // -> 2
(true + true) * (true + true) - true; // -> 3