const header = document.createElement('header');
header.classList.add('header');

const h1 = document.createElement('h1');
h1.classList.add('header__title');
h1.textContent = "Мой список дел";

const body = document.querySelector('body')

const form = document.createElement('form')
form.classList.add('header__form')
form.innerHTML = 
'<input class="header__form-input" type="text" placeholder="Название..."></input> <button class="header__form-button" type ="button">Добавить</button>'

const list = document.createElement("ul");
list.classList.add("list")
const listElem = document.createElement("li");
listElem.classList.add("list-elem")
listElem.innerHTML='<div><svg class="icon" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12L10 18L20 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span></span></div> <button  type ="button">x</button>'
const textButton = listElem.querySelector('button')



header.prepend(h1);
header.append(form);
body.prepend(header);
body.append(list)




const addButtonHendler = () => {
    const input = document.querySelector('.header__form-input')
    const newListElem = listElem.cloneNode(true);
    newListElem.querySelector('span').textContent = input.value;    
    list.append(newListElem);
    input.value = '';    
    newListElem.querySelector('button').addEventListener('click', function () {
        newListElem.remove()
    })
    
    newListElem.addEventListener("click", function(){    
        this.classList.toggle('list-elem--click');        
        newListElem.querySelector('svg').classList.toggle('icon--activ');   
    })
    
}
form.querySelector('button').addEventListener('click',addButtonHendler) 

let taskList= ["Поспать", "Полежать", "Поесть", "Попить"];

const clearTextButton = () => {
    this.remove()
};

 // this.style.backgroundColor = "rgb(150, 150, 150)"
taskList.forEach((el) => {
    const newListElem = listElem.cloneNode(true);
    newListElem.querySelector('span').textContent=el;
    list.prepend(newListElem)    
    newListElem.querySelector('button').addEventListener('click', function () {
        newListElem.remove()
    })
    newListElem.addEventListener("click", function(){    
        this.classList.toggle('list-elem--click');        
        newListElem.querySelector('svg').classList.toggle('icon--activ');   
    })
})



