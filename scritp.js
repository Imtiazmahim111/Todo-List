//getting all required elements
const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');

inputBox.onkeyup = () => {
    let userData = inputBox.value; //getting user entered value
    if (userData.trim() != 0) { //if user value aren't space
        addBtn.classList.add('active'); //acitive the add button
    } else {
        addBtn.classList.remove('active'); //deactive the add buttons
    }
}  

//if user click on add button
addBtn.onclick = () => {
    let userData = inputBox.value; //getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if (getLocalStorage == null) { //if localstorage === null
        listArr = []; //creating a blank array
    } else {
        listArr = JSON.parse(getLocalStorage); //transforming JSON string into JS object
    }
    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming JS object into a JSON string
    showTasks(); //calling showtaska function
}

function showTasks() {
    let getLocalStorage = localStorage.getItem('New Todo'); //getting localstorage
    if (getLocalStorage == null) { //if localstorage === null
        listArr = []; //creating a blank array
    } else {
        listArr = JSON.parse(getLocalStorage); //transforming JSON string into JS object
    }
    let newLiTag = '';
    listArr.forEach(element, index => {
        newLiTag = `<li> ${element} <span><i class="fas fa-trash"></i></span></li>`;


    });
    todoList.appendChild(newLiTag);//adding new tag inside ul tag
}