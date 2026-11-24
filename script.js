// Uppgift 4
// Variabel 1
const checkboxStyle = document.getElementById('divStyle');

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
    // Variabel för att lagra id-attributet för avsändaren
    const idAttribute = e.target.id;

    if (idAttribute === 'content') {
        divElement.innerHTML = e.target.value;
    }
}

// Uppgift 6
// Eventlyssnare till checkboxen
checkboxStyle.addEventListener('change', (e) => {
    divElement.style.backgroundColor = textfieldElement[0].value; //Ändar bakgrundsfärg till värdet i textfält 1
});

// Eventlyssnare till textfälten
// foreach loop för att lägga till eventlyssnare till båda textfälten
textfieldElement.forEach((field) => {
    field.addEventListener('input', handleEvent); //Fångar uppdateringar i textfälten och skickar dem till handleEvent-funktionen
});

// Eventlyssnare till knappen
buttonElement.addEventListener('click', (e) => {
    divElement.remove();
});
