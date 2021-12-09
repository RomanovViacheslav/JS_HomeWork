// 1. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), 
// которая возвращает подстроку, состоящую из указанного количества символов.

var str = 'Каждый охотник желает знать';
function delete_characters(str, length) {
    return str.slice (0, length)

};

console.log(delete_characters(str, 10))

// 2.Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами.
//  При этом все символы строки необходимо перевести в верхний регистр.


var str = "HTML JavaScript PHP";

function insert_dash(str) {
    return str.replaceAll(" ", "-").toUpperCase ();

}
console.log(insert_dash(str))

// 3. Сделать первую букву строки прописной
// Напишите функцию, которая принимает
// строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

var str = "string not starting with capital";  

function cursive_letter(str) {
    return str[0].toUpperCase()+ str.substring(1)


}

console.log(cursive_letter(str))

// 4. Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

var str = "каждый охотник желает знать";  

function capitalize(str) {
    return str.split(' ').
    map(function(word) {return word[0].toUpperCase() + word.substr(1);}).
    join(' ');
}

console.log(capitalize(str))

// 5.Напишите функцию change_register(str), которая принимает в качестве аргумента строку и 
// и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», 
// то на выходе должно быть «кАжДыЙ оХоТнИк».

var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  

function change_register(str) {
    return str.split('').    
    map(function(letter) {
        if (letter === letter.toUpperCase()){
          return letter.toLowerCase(); 
        } else return letter.toUpperCase(); }).
    join('');

}
console.log(change_register(str))

// 6. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  
 
function remove_char(str) {
    return str.split('').
    map(function(symbol){
        return symbol.replace(/[^\w\s]|_/, "")
        
    }).
    join('');
};

console.log(remove_char(str))

// 7. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение 
// с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.


// function zeros (num, len, sign) {
    

// };


// 8. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.


function comparison(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();

};

console.log(comparison("Javascript", "JaVaScrIpT"))

// 9. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), 
// которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

function insensitive_search(str1, str2) {
if (str1.toUpperCase().includes(str2.toUpperCase())) {
    return true;
} else return false;     
    
};

console.log(insensitive_search('privet, Vasili', 'VASILI'))

// 10. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных 
// слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, 
// при этом каждое слово внутри строки пишется с заглавной буквы.

str = "hEllo world";
function initCap(str) {
    return str.toLowerCase().split(' ').
    map(function(word) {return word[0].toUpperCase() + word.substr(1);}).
    join(' ').
    replace(/\ /g, '');
};

console.log(initCap(str))

// 11. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case,
//  при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

str = 'SnakeCase';

function initSnake(str) {
    return str.replace(/([A-Z])/g, '_$&').slice(1).toLowerCase()
};
console.log(initSnake(str))

// 12. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.

function repeatStr(str, n) { 
    return str.repeat(n);
};
console.log(repeatStr('Повторяю строку', 3))

// 13. Получить имя файла
// Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

var pathname = "/home/user/dir/file.txt";

function path(pathname) { 
    let res = pathname.split("/")
    return res[res.length -1]
};

console.log(path(pathname))

// 14. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет 
// заканчивается ли строка символами подстроки.

var str = "Каждый охотник желает знать"; 
var str1 = "скрипт";
var str2 = "знать";

String.prototype.endsWith = function(substring) {
    let endStr = this.split(' ');
    if (endStr[endStr.length -1] === substring){
        return true;
    } else return false;
};

console.log(str.endsWith(str1));
console.log(str.endsWith(str2));

// 15. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после 
// или до указанного символа char в зависимости от параметра pos.

var str = 'Астрономия — Наука о небесных телах';

function getSubstr(str, char, pos) {
     let result = str.split(char);
     if(pos === 'до') {
         pos = 0;
     } else if (pos ==='после') {
         pos = 1;
     }
     return result[pos];
};     

console.log(getSubstr(str, '—', 'до'));

// 16. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указханную позицию pos строки str.
//  По умолчанию подстрока вставляется в начало строки.

function insert(str, substr, pos) {
   let result = str.split(' ');
    result.splice(pos,0, substr);
    return result.join(' ');
};

console.log(insert('2 3', '4', 1 ));

// 17. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, 
// если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться 
// троеточием «...» (если не задан параметр symb) или заданным символом symb.

function limitStr(str, n, symb) {
    let ellipsis = '...'
    if (str.length > n) {
        return str.slice(0, n) + (symb || ellipsis);
    }
};

console.log(limitStr('Напишите функцию limitStr(str, n, symb)', 8));
console.log(limitStr('Напишите функцию limitStr(str, n, symb)', 16, '\'далее\''))


// 18. Поделить строку на фрагменты
function cutString(str, n) {
    
    let part = Math.ceil(str.length/n);
    let newStr = [];
    for (let i= 0; i < str.length; i += part) {
        newStr.push(str.substr(i, part))
    }
    return newStr
};

console.log(cutString('Поделитьстроку', 2))

// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

var symb = "о", str = "Астрономия это наука о небесных объектах";
function count(str, symb) {
    let result = str.split(symb)
    return result.length-1
};

console.log(count(str, symb))

// 20. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

var str = "    Max is a good      boy     "; 

function strip(str) {
    return str.replace(/ +/g, ' ').trim()
};

console.log(strip(str))


// 21. Удалить лишние слова из строки

// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

var str = "Сила тяжести приложена к центру масс тела"; 

function cutString(str, n) {
    return str.split(' ').
    slice(0, n).
    join(' ')
};

console.log(cutString(str, 3))

// 22. Сортировка символов строки по алфавиту
// Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её символы в алфавитном порядке.

function alphabetize(str) {
    return str.split('').
    sort().
    join('');

};

console.log(alphabetize('dbsfggsgsfgfsadd'))

// 23. Найти слово в строке
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

var str = 'abc def ghi jkl mno pqr stu';

function findWord(word, str) {
    return str.includes(word)
};

console.log(findWord('def', str))

// 24. Преобразовать строку в массив слов

// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

var str = 'Каждый охотник желает знать';
function stringToarray(str) {
return str.split(' ')

};

var arr = stringToarray(str);

console.log(arr)

// 25. Реализовать объект

// Создать объект с начальным полем title. Добавить поле с ключом description начальным значением строкой. 
// Добавить метод addField, который при вызове добавляет новое поле в объект с переданным именем и значением 
// addField(fieldName, value), добавить метод editField(fieldName, value), который меняет указанное свойство 
// объекта. Добавить метод удаление свойства deleteField(fieldName), удаляющий указанное поле. 
// Добавить и изменить поля с помощью этих методов.

// 26.
// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(digit) {
    let str = digit + "";
    str.split("");
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i])
    }
    return sum;    
    
}
console.log(getDigitsSum(155))

// 27.
// Найдите все года от 1 до 2020, сумма цифр которых равна 13. 
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
function searchNum(year) {
    sum =[]
    for (let i = 0; i <= year; i++) {
        if (getDigitsSum(i) === 13) {
            sum.push(i)
        }    
    } 
    return sum
}

console.log(searchNum(2020))

// 28.
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
// И так, пока сумма не станет однозначным числом (9 и менее).
function getSum(num) {
    let str = num + "";
    let sum = 0
    for (let i = 0; i < str.length; i++ ) {
        sum += Number(str[i]) 
    }
    if (sum > 9) {
        return getSum(String(sum))
    } else return sum
        
}

console.log(getSum(9999999999999))


// // 29.
// //  Напишите функцию, которая возвращает новый объект без указанных значений.

const without = (obj, field) => {
    delete obj[field];
    return obj
}
const user1 = {
	name: 'Дмитрий',
	city: 'Нижний Новгород'
}
// without(user, 'city') =>  { name: 'Дмитрий' }

console.log(without(user1, 'city'))

// // Дополнительно: реализовать удаление любого количества полей

// Написать функцию, которая проверяет наличие поля в объекте.
const checkField= (obj, field) => {
    if (field in obj){
        return true
    } else return false
    
}
const user = {
	name: 'Дмитрий',
	city: 'Нижний Новгород'
}
checkField(user, 'name') 
checkField(user, 'lastname') 

console.log(checkField(user, 'name'))
console.log(checkField(user, 'lastname'))

// 31.
//  Написать функцию, которая принимает число от 1 до 7 и возвращает день недели.
//  Решить с помощью объектов.

const day = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
}

const checkDay = (num) => {
    let result = day[num] 
    return result
}

console.log(checkDay(7))

var str = "JavaScript"; 

let foo2 = (arr) => {
let result=[]
return str.substring(0,2)
}

// foo(arr); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt] 
console.log(foo2(str));
