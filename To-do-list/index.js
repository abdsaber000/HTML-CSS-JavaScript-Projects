const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));

list.reverse();

list.forEach(task=>{
    toDoList(task);
})

formEl.addEventListener("submit", (event)=>{
    event.preventDefault(); // to prevent auto refresh after submit
    toDoList();
    
});


function toDoList(task){
    let newTask = inputEl.value;
    if(task){
        newTask = task.name;
    }

    const liEl = document.createElement("li");
    liEl.innerHTML = `<div class = "div-text">${newTask}</div>`;
    inputEl.value = "";


    if(task && task.checked){
        liEl.classList.add("checked");
    }
    
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `<i class="fa-solid fa-square-check">`;
    liEl.appendChild(checkBtnEl);
    
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fa-solid fa-trash">`;

    liEl.appendChild(trashBtnEl);
    ulEl.insertBefore(liEl , ulEl.firstChild) ;

    checkBtnEl.addEventListener("click" , ()=>{
        liEl.classList.toggle("checked");
        updateLocalStorage();
    });

    trashBtnEl.addEventListener("click" , ()=>{
        liEl.remove();
        updateLocalStorage();
    })

    updateLocalStorage();
}

function updateLocalStorage(){
    const liEls = document.querySelectorAll("li");
    let list = [];

    liEls.forEach(liEl=>{
        list.push({
            name:liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
    })

    localStorage.setItem("list" , JSON.stringify(list));
}