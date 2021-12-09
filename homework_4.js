
// 1.Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function mathPow (a) {
    return a ** 2
}
console.log(mathPow(3)); 

// 2.Сделайте функцию, которая возвращает сумму двух чисел.

function sum(a, b) {
    return a + b

}
console.log(sum(2, 3))

// 3.Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function math(a, b, c) {
    return (a - b) / c  
}

console.log(math(4, 1, 3));

// 4.Сделайте функцию, которая принимает параметром число от 1 до 7, 
//  возвращает день недели на русском языке.

function getDay(day) {
    if (day == 1) {
    return "понедельник";
    } else if (day == 2) {
    return "вторник";
    } else if (day == 3) {
    return "среда";
    } else if (day == 4) {
    return "четверг";
    } else if (day == 5) {
    return "пятница";
    } else if (day == 6) {
    return "суббота";
    } else if (day == 7) {
    return "воскресенье";
    }
}

console.log(getDay(7));

// 5. Сделайте функцию, которая параметрами принимает 2 числа. 
// Если эти числа равны - пусть функция вернет true, а если не равны - false.

function calcMath(a, b) {
    if (a === b) {
        return true;
    } else if (a !== b ) {
        return false;
    }
}

console.log(calcMath(3, 4));

// 6.Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма 
// больше 10 - пусть вернет true, а если нет то - false.

function mathSumm(a, b) {
    sum = a + b
    if (sum > 10) {
        return true;
    } else if (sum <= 10) {
        return false;
    }
}

console.log(mathSumm(5, 12));

// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
// Если отрицательное - пусть функция вернет true, а если нет - false.

function checkNumber(a) {
    if (a < 0) {
        return true;
    } else 
    return false;
}

console.log(checkNumber(-1))

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange(a) {
    if (a > 0 && a < 10) {
        return true;
    } else
    return false;
}

console.log(isNumberInRange(2))

// 9. Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
//  Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных.


// 10. Написать функцию, которая принимает в себя три параметра - число и две функции.
//  Первая переданная функция  возвращает возведенное в квадрат переданное число и будет вызываться, если число четное. 
//  Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом , если число нечетное, 
//  и будет возвращать число, увеличенное на 1.

function funcNum(a, numB, numC) {
    if (numB % 2 === 0) {
        return numB
    } else if (numC % 2 !== 0)
        return numC 
}

function numB(a) {
    return  a ** 2;    
}

function numC(a) {
    return a + 3;
}

numB(2)
numC(2)

console.log(funcNum(1, numB, numC ))

// 11. Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2 столько раз, 
// сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2. 

function mult(num1=1, num2=1 , num3=2) {
    result = 1
    for (let i = 1; i <= num3; i++) {
        result *=  num1 * num2        
    }
    return result;
}

console.log(mult(2,2,2));

// 12.Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и возвращает строку с этими 
// 3 словами, расположенными в алфавитном порядке.

function arrWord(a,b,c) {
   let arr= [a, b , c]
    arr.sort ()
    return arr.join (" ")
}
console.log(arrWord('my', "hello", "world"))

// 16.Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
// Если четное - пусть функция возвращает true, если нечетное - false.

function isEven(even) {
    if (even % 2 === 0) {
        return true;
    } else
    return false;
}

console.log(isEven(5))

