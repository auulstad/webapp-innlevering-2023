
//Oppgave 1
const removeElement = document.getElementById("remove"); 
const removeBtn = document.getElementById("remove-btn"); 

removeBtn.addEventListener('click', function () {
    if (removeElement) {
        removeElement.remove();
    }
});

//Oppgave 2
const changeParagraphElement = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener('click', function () {
    changeParagraphElement.textContent = "Hei, håper du har en fin dag - ditt fantastiske menneske! :D"
});

//Oppgave 3
const inputElement = document.getElementById("input");
const inputTxt = document.getElementById("input-text");


inputElement.addEventListener('input', function () {
    const personalTextInput = this.value;
    inputTxt.textContent = personalTextInput;
});

//Oppgave 4

const writeList = document.getElementById("write-list"); 
const myList = ["item one", "item two", "item three"];
const ul = document.getElementById("ul"); 

writeList.addEventListener('click', function () {
    myList.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
});

//Oppgave 5
const createElement = document.getElementById("create");

createElement.addEventListener('click', function () {
    const selectElement = document.getElementById("select");
    const input = document.getElementById("text").value;
    const placeholder = document.getElementById("placeholder");

    const newElement = document.createElement(selectElement.value);

    newElement.textContent = input;
    placeholder.appendChild(newElement);
});


//Oppgave 6
const removeLi = document.getElementById("remove-li");

removeLi.addEventListener('click', function () {
    const ul = document.getElementById('list');
    const firstLi = ul.children[0];

    if (ul.hasChildNodes()) {
        ul.removeChild(firstLi);
    }
});


//Oppgave 7

const writeName= document.getElementById("name")

writeName.addEventListener("input", function() {
    const nameInput = this.value; 
    const orderButton = document.getElementById("order");

    if (nameInput.length > 4) {
        orderButton.disabled = true; 
        orderButton.style.border = '1px solid red';
    } else {
        orderButton.disabled = false;
        orderButton.style.border = 'none';
    }
    }
); 

//Oppgave 8;

const color = document.getElementById("color");

color.addEventListener('click', function () {
    const children = document.querySelectorAll('.children li');

    children.forEach(function (child, index) {
        if (index % 2 === 0) {
            child.style.border = '10px solid pink';
        } else {
            child.style.border = '10px solid green';
        }
    });
});

