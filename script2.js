let arr1 = []
for (let i = 20; i <= 30; i += 0.5) {
    arr1.push(i)
}
let outArr1 = document.getElementById('outArr1');
outArr1.innerHTML = arr1;

//========================================================================
let arr2 = [];
for (let i = 10; i <= 100; i += 10) {
    arr2.push(i * 27)
}
let outArr2 = document.getElementById('outArr2');
outArr2.innerHTML = arr2;

//========================================================================
const num = prompt('Введіть ціле число для 3 завдання');
let arr3 = [];
for (let i = 1; i <= 100; i++) {
    if (i**2 < num) {
        arr3.push(i)
    }
}
let outArr3 = document.getElementById('outArr3');
outArr3.innerHTML = arr3;

//========================================================================
const num2 = prompt('Введіть ціле число для 4 завдання');
let arr4 = [];
let result = ''

for (let i = 1; i <= num2; i++) {
    if (num2 % i === 0) {
        arr4.push(i)
    }
}
console.log(arr4)
if(arr4.length > 2) {
    result = 'Це НЕ простое число'
} else result = 'Це простое число'
let outArr4 = document.getElementById('outArr4');
outArr4.innerHTML = result;

//========================================================================
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const num3 = prompt('Введіть ціле число для 5 завдання');
let result2 = '';

function integer(num) {
    if(num <= 0) {
        return ;
    }
    while (num > 1) {
        if (num % 3 !== 0) {
            return false;
        }
        num /= 3;
    }

    return true;
}

if (integer(+num3)) {
    result2 = `Це число можна отримати шляхом зведення числа 3 у деякий ступінь`
} else result2 = `Це число Не можна отримати шляхом зведення числа 3 у деякий ступінь`

let outArr5 = document.getElementById('outArr5');
outArr5.innerHTML = result2;
