'use strict'

const textEl = document.querySelector('#text-container');
let buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length; i++) {
    const button = initButton(buttons[i]); // 0, 1, 2, 3
    button.el.addEventListener("click", function() { 
        if (button.isDisabled()) {
            button.activate()
        }
        else {
            button.disable()
        }

        button.classList.toggle('btn--active');
        let newText = button.dataset.toggleText; //
        button.dataset.toggleText = button.innerHTML;
        button.innerHTML = newText;

        // button.toggleAttribute('disabled')
    })
}

// const arr = ['hello', 'world'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// hello
// world

// buttons.forEach(function (button) {
//    button.addEventListener("click", function onClick() { 
//         button.classList.toggle('btn--active')
//     }) 
// });

/* типы в JS
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

*/

/* 
// Приколы JS

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

*/


function doSomething (value) {
    function increment() {
        value++
        return value
    }

    function decrement() {
        value--
        return value;
    }

    function getValue() {
        return value;
    }

    return {
        increment, decrement, getValue
    }
}

const res = doSomething(25);
res.increment()
res.increment()
res.increment()
console.log(res.getValue())

function initButton(el) {

    function disable() {
        el.setAttribute('disabled', 'disabled');
    }

    function activate() {
        el.removeAttribute('disabled');
    }

    function isDisabled() {
        console.log(el.getAttribute('disabled'))
        return el.getAttribute('disabled')
    }

    return {
        disable,
        activate,
        isDisabled,
        el
    }
}

const num1 = 42;
const num2 = 42;
console.log({ num2, num1 })

const obj1 = { a: 'foo', b: 'bar' };
const obj2 = obj1

const { a, b } = obj1 // Распаковываем значения
console.log('--> Распакованные значения', a, b)
console.log('--> \'Запаковываем значения\'', { obj1, obj2 })

// obj1.a = foo
// obj1.b = bar

// obj2.a = foo
// obj2.b = bar

console.log('obj1.b', obj1.b)
console.log('obj2.b', obj2.b)

function getDog() {
    fetch('https://dog.ceo/api/breeds/image/random').then(function (value) {
        return value.json();
    }).then(function(value){
        /** @type {HTMLImageElement} */
        const el = document.querySelector('img');
        console.log(value.message)
        el.setAttribute('src', value.message)
    }).catch(function(error) {
        console.error(error)
    })
}

const myPromise = new Promise(function(resolve /** принять */, reject /** отклонить */) {
    setTimeout(() => {
        console.log('Я не сделаль')
        reject()
    }, 3000);
})

myPromise.then(/** --> */ function() {
    console.log('Молодец')
}).catch(function() {
    console.log('Как так?')
})


getDog()
// PascalCase
// camelCase
// dot.case
// cabeb-case
// snake_case
// CONSTANT_CASE