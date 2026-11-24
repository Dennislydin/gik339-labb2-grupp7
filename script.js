// Uppgift 4
// Variabel 1
const checkboxStyle = document.getElementsByName('divStyle')[0];

// Variabel 2
const textfieldElement = document.querySelectorAll('.textfield');

// Variabel 3
const buttonElement = document.querySelector('#buttonElement');

// Variabel 4
const divElement = document.getElementsByClassName('container')[0];

// Uppgift 5
// Funktion för eventlyssnare till textfälten
function handleEvent(e) {
    console.log("Avsändaren:" , e.target);
    const idAttribute = e.target.id;

    if (idAttribute === 'content') {
        divElement.innerHTML = e.target.value;
    }
}

// Uppgift 6
// Eventlyssnare till checkboxen
checkboxStyle.addEventListener('change', (e) => {
    divElement.style.backgroundColor = textfieldElement[0].value;
});

// Eventlyssnare till textfälten
textfieldElement.forEach((field) => {
    field.addEventListener('input', handleEvent);
});

// Eventlyssnare till knappen
buttonElement.addEventListener('click', (e) => {
    divElement.remove();
});
