// Реализовать объект пользователя с полями name, lastname ,middleName, birthDate. Реализовать геттер/сеттер fullname, 
// который возвращает одной строкой полное имя пользователя и записывает имя, 
// фамилию и отчество при присвоении значения. Реализовать геттер age, который 
// возвращает возраст используя данные даты рождения.

let user = {
    name: "Fedor",
    lastname: "Shalyapin",
    middleName: "Ivanovich",
    birthDate: "13.02.1873",
    get fullname () {
        return `${this.name} ${this.middleName} ${this.lastname}`
    },
    set fullname (value) {
        let [name, middleName, lastname] = value.split(" ");
        this.name = name;
        this.middleName = middleName;
        this.lastname = lastname;
    },
    get age () {        
        return 2021 - this.birthDate.split('.')[2];        
    },

    set age (value) {
        this.birthDate = value
    }

}

console.log(user.fullname);
console.log(user.age);

user.fullname = 'Алексей Максимович Пешков'
user.birthDate = "28.03.1868"

console.log(user.fullname);
console.log(user.age);

// С помощью замыкания реализовать реализуйте генератор случайных чисел в указанном промежутке (min и max). 
// Важное условие: при генерировании чисел они не должны повторяться.

function randomNumber() {
    let randomArr = []
    
    return function (min, max) {
        for (let i = 0; i<max; i++){
            i = Math.floor(Math.random()*(max-min))+min
            randomArr.push(i)
        }
        return randomArr = [...new Set(randomArr)]
    }
    
}

let random = randomNumber()
console.log(random(1,10));

// 3. Что выведет функция? 
// Function f() {
//   alert( this ); // window или null
// }

// let user = {
//   g: f.bind(null)
// };

// user.g(); 

// 4. Можем ли мы изменить this дополнительным связыванием?
// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();
//Не можем,т.к второй bind применяется уже не к обычной функции,а к превращенному первым bind экзотическому объекту. 
// Будет Вася.




// 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.
// loginOk/loginFail в зависимости от ответа.
// В текущей реализации Сообщение не соответствует тому, 
// что мы ожидаем увидеть(“Имя пользователя  logged in” или “Имя пользователя failed to log in”)

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user1 = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user1.loginOk.bind(user1), user1.loginFail.bind(user1));

// 6 .Напишите в указанном месте конструкцию с методом bind() так, 
// чтобы this внутри функции func всегда указывал на value

var elem = {value: 'Привет'}

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

let boundFunc = func.bind(elem)
//Тут напишите конструкцию с bind()

boundFunc('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
boundFunc('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// 7. Есть функция const sum = (a, b, c) => a + b + c, которая складывает три числа. 
// Выполните каррирование. Т.е. напишите вспомогательную функцию currySum, 
// в которую вы передадите функцию sum, и которую можно будет вызвать слуедующим образом -  currySum(a)(b)(c). 

const sum = (a, b, c) => a + b + c;

function currySum (a){
    return function (b) {
        return function (c) {
            return a+b+c;
        }
    }
}

console.log(currySum(1)(2)(3));

// 8. Напишите функцию создания задачи(createTask), принимающая название задачи, 
// которая возвращает функцию смены статуса задачи.
// При вызове функции смены статуса возвращается строка с названием задачи и текущим статусом. 
// Список статусов: “Не назначена”, “В работе”, “Тестирование”, “Завершена’. 
// Статус Завершена - присваивается только после передачи флага true и только после тестирования.  
// Статус Не назначена - только при первом вызове.
 
const task = createTask("Название задачи");

function createTask(taskName) {
    let count = 0   
        
        return function(flag=undefined){


            if (count === 0){
                console.log(taskName+" - не назначена");
                
                count++        
                
            } else if (count === 1) {
                console.log(taskName+" - В работе");
                
                count++
                
            } else if (count === 2){
                console.log(taskName+" - Тестирование");
                
                count++
            
            
            } else if ( count === 3 && flag === undefined) {
                console.log(taskName+" - В работе");
                
                count=2
                
            } else if (count > 2 && flag === true)  {  
                console.log(taskName+" - Завершена");
                
                count++


            } else if (count === 4) {
            console.log(taskName+" - Завершена");
            
            }
        
        }
        
} 



task() // => ‘Название задачи - не назначена’
task() // => ‘Название задачи - В работе’
task() // => ‘Название задачи - Тестирование’
task() // => ‘Название задачи - В работе’
task() // => ‘Название задачи - Тестирование’
task() // => ‘Название задачи - В работе’
task() // => ‘Название задачи - Тестирование’
task(true) // => ‘Название задачи - Завершена’
task() // => ‘Название задачи - Завершена’

