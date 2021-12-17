// Что будет выведено в консоль? Ответить не запуская код
// function foo() {
//  	console.log(this);
// }
// foo()
// Ответ window


// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  getName() {
//  console.log(this.name);
// },
// };
// obj.getName();

// Ответ "Дмитрий"

// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  getName() {
//    function bar() {
//      console.log(this.name);
//    }
//    bar();
//  },
// };
// obj.getName();

// ответ Window

// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  getName: () => {
//    function bar() {
//      console.log(this.name);
//    }
//    bar();
//  },
// };
// obj.getName();

// ответ window

// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  getName() {
//    const bar = () => {
//      console.log(this.name);
//    }
//    bar();
//  },
// };
// obj.getName();

// ответ Дмитрий


// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  getName() {
//    console.log(this.name);
//  },
// };
 
// const obj2 = {
//  getName: obj.getName,
// };
 
// obj2.getName();

// Ответ undefined


// Что будет выведено в консоль? Ответить не запуская код
// const getName = () => {
//  console.log(this.name);
// };
 
// const obj = {
//  name: 'Дмитрий',
//  getName,
// };
 
// const obj2 = {
//  getName,
// };
// obj.getName();
// obj2.getName();

// Ответ obj.getName(); Window obj2.getName();Window

// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  friend: {
//    name: 'Владимир',
//    getName() {
//      function innerGetName() {
//        console.log(this.name);
//      }
//      innerGetName();
//    },
//  },
// };
 
// obj.friend.getName(); Window???

// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  friend: {
//    name: 'Владимир',
//    getName() {
//      return function() {
//        console.log(this.name);
//      }
//    },
//  },
// };
//  obj.friend.getName()();Window?

// Что будет выведено в консоль? Ответить не запуская код
// const obj = {
//  name: 'Дмитрий',
//  friend: {
//    name: 'Владимир',
//    getName() {
//      return () =>  {
//        console.log(this.name);
//      }
//    },
//  },
// };
// obj.friend.getName()(); Владимир... или Дмитрий...

// Что будет выведено в консоль? Ответить не запуская код
// const object = {
//  		message: 'Hello, World!',
//  		logMessage() {
//    		console.log(this.message);
//  		}
// };
// setTimeout(object.logMessage, 1000);

// Воспользуйтесь функцией logMessage таким образом, чтобы в консоли увидеть сообщение "Hello, World!"



const object = {
 message: 'Hello, World!'
};
function logMessage() {
 console.log(this.message); // "Hello, World!"
}

object.logMessage = logMessage

object.logMessage();

// Реализовать объект калькулятора calculator с 3 методами. Первый метод setValues(a, b) 
// присваивает значения свойствам a и b.Второй sum()(обратите внимание, что он не принимает аргументы)  
// возвращает сумму свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не присвоены. 
// Третий метод mult() возвращает произведение свойств a и b текущего объекта или сообщение об ошибке, 
// если значения свойств не присвоены.



let calculator = {
    setValues (){           
        
    },
    sum(){        
            if (this.a === undefined || this.b === undefined) {
                return "ошибка"
            } else return this.a+this.b
        
    } ,
    mult(){

    if (this.a === undefined || this.b === undefined) {
                return "ошибка"
            } else return this.a*this.b
    
}
};

function setValues(a,b){
    this.a=a
    this.b=b
}
calculator.setValues = setValues


calculator.setValues(3,4)
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mult());
// Дополнительно: сделать в функции setValues(a, b) проверку и разрешить присвоение только чисел, 
// иначе возвращать сообщение об ошибке.


// Создать объект calculator2 с 3 методами. 1 метод - setVales(a, b) - создать используя метод из предыдущего 
// задания(можно скопировать по ссылке метод из объекта calculator либо создать функцию setValues, как мы делали на 
//     лекции и присвоить обоим объектам). 2 метод - div() - возвращает результат деления a на b. 
//     3 метод - diff() - возвращает разность чисел a и b.

let calculator2 = {
    setValues(){},
    div(){
        return this.a / this.b
    },
    diff(){
        return this.a - this.b
    }
}

calculator2.setValues = setValues;

calculator2.setValues(6,3);
console.log(calculator2);
console.log(calculator2.div());
console.log(calculator2.diff());

// Создать объект пользователя  user1 со свойствам name, age, city, favoriteColor и методами setName, 
// setAge, setCity, setFavoriteColor, которые меняют значения соответствующих свойств. 
// Создать объект второго юзера user2 из существующего объекта user1. 
// Изменить значения всех свойств второго юзера с помощью методов setName, setAge, setCity, setFavoriteColor. 
// Вывести в консоль оба объекта и убедиться, что значения свойств разные.

let user1 ={
    name: "Vasili",
    age: 67,
    city: "N.Novgorod",
    favoriteColor: "White",
    setName(name){
        return this.name = name
    },
    setAge(age){
        return this.age = age
    },
    setCity(city){
        return this.city = city
    },
    setFavoriteColor(color){
        return this.favoriteColor = color
    }
}

let user2= {...user1}

user2.setName("Ivan")
user2.setAge(101)
user2.setCity("Moscow")
user2.setFavoriteColor("blue")
console.log(user1);
console.log(user2);

// Исправьте код таким образом, чтобы вывод логов соответствовал комментариями

const  firstUser = {
    name: 'Василий',
    surName: 'Иванов'
}

const func = (user) => {
    const otherUser ={...user} ;
    otherUser.name = 'Дмитрий';
    otherUser.surName = 'Сидоров';
    return otherUser;
}

console.log(func(firstUser)) // { name: 'Дмитрий', surName: 'Сидоров' }

console.log(firstUser) // { name: 'Василий', surName: 'Иванов' }
   
