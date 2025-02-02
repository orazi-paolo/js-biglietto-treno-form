
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

    // impedisco il caricamento pagina
    event.preventDefault();

    // do il valore interno degli input
    const km = kmField.value;
    const fullName = fullNameField.value;
    const age = ageField.value;

    if (fullName.length > 0 && km > 0 && age > 0){

        
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
        
        // seleziono il div per il numero casuale della carrozza e lo assegno
        let casualNumber = document.getElementById('casualNumber');
        let numberOneToNine = numberCasualGeneration(1,9);
        casualNumber.innerText = numberOneToNine;
        console.log( 'il numero casuale della carrozza è ' + numberOneToNine);
        
        // seleziono il div per il numero casuale del biglietto e lo assegno
        let numberTicket = document.getElementById('codeCP');
        let numberCasualTicket = numberCasualGeneration(90000,99999);
        numberTicket.innerText = numberCasualTicket;
        console.log('il numero casuale del biglietto è ' + numberCasualTicket);

        // quando schiaccio mi compare il biglietto
        const ticket = document.getElementById('ticket');
        ticket.classList.remove('d-none');
        ticket.classList.add('d-block');
        
        // resetto il form al click
        let form = document.getElementById('form');
        form.reset();
    }else{
        alert('i valori non sono esatti');
    }

})

// resetto il form al click di annulla
resetButton.addEventListener('click', function(){
    form.reset();

})








