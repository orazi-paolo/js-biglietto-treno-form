
// prendo dal dom i 'tag' che mi servono
const fullNameField = document.getElementById('fullName');
const kmField = document.getElementById('km');
const ageField = document.getElementById('age');
const button = document.getElementById('button');
const form = document.getElementById('form');
const resetButton = document.getElementById('resetButton');


// genero numero casuale
function numberCasualGeneration(min,max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// quanto clicco sul bottone stampo in pagina il valore 
button.addEventListener('click', function(){

    // do il valore interno degli input
    const km = kmField.value;
    const fullName = fullNameField.value;
    const age = ageField.value;

    // imposto il prezzo base e i sconti
    let price = km * 0.21;
    const discountTwenty = price * 0.8;
    const discountForty = price * 0.6;

    // preparo i calcoli qual ora ci sono i sconti
    if(age < 18){
        price = discountTwenty;
    }else if (age > 65){
        price = discountForty;
    }
    // mostro il tutto in console
    console.log('Nome e cognome ' + fullName);
    console.log('Chilometri da percorrere ' + km);
    console.log('Età ' + age);
    console.log('Il prezzo del biglietto è di ' + price.toFixed(2) + ' euro');

    // inserisco nel biglietto i risultati
    document.getElementById('fullNameResult').innerText = fullName;
    document.getElementById('priceResult').innerText = price.toFixed(2) + '$'

    // seleziono il div per il numero casuale della carrozza
    let casualNumber = document.getElementById('casualNumber');
    let numberOneToNine = numberCasualGeneration(1,9);
    casualNumber.innerText = numberOneToNine;
    console.log( 'il numero casuale della carrozza è ' + numberOneToNine);

    // resetto il form al click
    let form = document.getElementById('form');
    form.reset();

})

// resetto il form al click di annulla
resetButton.addEventListener('click', function(){
    form.reset();

})








