// Используя метод map() напишите код, который получает из 
// массива строк новый массив, содержащий их длины.

var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

let vegetableLength = vegetables.map(function(elem){
    return elem.length;
})

console.log(vegetableLength);  ; // 7,4,7,8

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
//  Использую метод reduce() напишите функцию currentSums(numbers), 
//  которая возвращает новый массив из такого же числа элементов, 
//  в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

let numbers = [2, 3, 5, 7, 11, 13, 17]

let currentSums = (numbers) => {
    
   let result = []
   numbers.reduce(function(sum, current){
       result.push(sum + current)
       return sum+current 
    }, 0)
    return result
}

console.log(currentSums(numbers));  // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]


// Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, 
// которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

var arr = [0, 1, 2, 3, 4, 5, 6, 7];
function sumSeven(numbers) {
result = [];

numbers.forEach(function(item){  

numbers.forEach(function(elem){
    if(elem + item === 7) 
    result.push(elem+':'+ item)});
});

return result
}
console.log(sumSeven(arr));

// Перед вами переменная, содержащая строку. 
// Напишите код, создащий массив, который будет состоять из первых букв слов строки str. 
var str = "Каждый охотник желает знать, где сидит фазан."; 

let foo = (array) => {
    return array.split(" ").
    map(function(word) {return word[0]})  

}

// foo(array);  // [К,о,ж,з,г,с,ф]
console.log(foo(str));

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, 
// который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str. 


// var str = "JavaScript"; 

// let foo2 = (arr) => {

// }

// // foo(arr); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt] 
// console.log(foo2(str));

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, 
// в массив цифр расположенных по убыванию их значений.

var numerics = [5, 7, 2, 9, 3, 1, 8];
let foo3 = (numerics) => {
    return numerics.sort((a,b) => b-a)
}

// foo(numerics); // [9,8,7,5,3,2,1]
console.log(foo3(numerics));

// Напишите код, объединяющий три массива цифр, и располагающий цифры, 
// в полученном массиве, в порядке убывания их значений.

var a = [1,2,3];
var b = [4,5,6];
c = [7,8,9];
function getArr(a, b, c) {
return a.concat(b,c).sort((a,b)=> b-a);
}

console.log(getArr(a, b, c)) ; // [9,8,7,6,5,4,3, 2, 1]

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. 

let matrix = [[1, 2, 3], [4, 5], [6]];

let getSum = (matrix) => {
let sum = 0
matrix.flat().
forEach(function(item){    
    return sum+=item
})
return sum;
}
console.log(getSum(matrix));

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let matrix3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let getSumm = (matrix) => {
result = []
let sum = 0
matrix.forEach(function(item){ 
    item.forEach(function(elem){
        elem.forEach(function(a){
            return result.push(a)   
        })
    })
});
result.forEach(function(item){
    sum+=item
});
return sum;
}
console.log(getSumm(matrix3));
    
// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.    

let number = [2,5,1,8,3]

let getRever = (number) => {
    result = []
    number.reduceRight(function(a,b){return result.push(b)},0)
    return result
}
console.log(getRever(number));

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, 
// чтобы в сумме получилось больше 10-ти.

let arrNum = [2,5,1,2,8,3]

let arrSum=(numbers)=> {
    sum = 0
    result = []
    numbers.forEach(function(item){
        sum+=item;
        if (sum <= 10) {
        return result.push(item)
        }
    })
    return result.length;
}

console.log(arrSum(arrNum));

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
// Первым параметром функция принимает значение, которым заполнять массив, 
// а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) 
// сделает массив ['x', 'x', 'x', 'x', 'x'].


let arrayFill=(a,b)=> {
    let result = []
    for (let i = 0; i < b; i++) {
        result.push(a)
    }
    return result
}

console.log(arrayFill(66,8));

// Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора.
//  Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

const obj = {
    nameUser: 'Vasili',
    age: 30,
    city: 'N.Novgorod'
}

const copy = Object.assign({}, obj);
const spr = {...obj};
delete copy.city;
spr.age = 42;

console.log(obj);
console.log(copy);
console.log(spr);

// Создайте функцию, которая принимает 1 аргумент - объект пользователя user со свойствами name, 
// age, city. Функция должна возвращать новый объект пользователя с измененным полем name, 
// при этом оригинальный объект user должен остаться неизменным.

const user = {
    name: 'Vasili',
    age: 30,
    city: 'N.Novgorod'
}

let getUser = (user) => {
    let copy = {...user};
    copy.name = 'Viacheslav';
    return copy
}

console.log(user);
console.log(getUser(user));

// Написать функцию которая будет принимать n-ое количество аргументов, 
// в качестве результата функция будет возвращать сумму всех четных элементов. 
// Для решения использовать цикл for (... of ...). 

let numberArr= [56,4,3,28,7];

let evenSum = (arr) => {
    let even = []
    let sum = 0
    for (let num of arr){
        if (num % 2 === 0)
        even.push(num)
    }
    for (let num of even) {
        sum+= num
    }
    return sum;
}

console.log(evenSum (numberArr));

// Написать функцию, которая принимает слово и возвращает true, если слово является палиндромом.
let checkPalindrom = (word)=> {
    let rever = word.split('').
    reverse().
    join('');
    if (word === rever) {
        return true
    } else return false    

}

console.log(checkPalindrom('lol'));
console.log(checkPalindrom('lola'));

// Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом и во втором массиве.

let arr1 = [1, 2, 5, 11, 22]
let arr2 = [22, 2, 8, 11, 5]

let sameNum = (a, b) => {
    let result = []
    a.forEach(function(item){
        b.forEach(function(elem){
        if (elem === item) {
            return result.push(elem)
        }
    })
    })
    
    return result
}

console.log(sameNum (arr1, arr2));

