//chiedere all’utente il numero di chilometri che vuole percorrere
const kilometres = prompt("Quanti kilometres devi percorrere?");
console.log('kilometres:', kilometres);
//chiedere all’utente l’età del passeggero
const years = prompt("Quanti anni hai?");
console.log('Years:', years);
//prezzo del biglietto è definito in base ai kilometres
let fullPrice = kilometres*0.21;

//errore
validData= true;
errorMsg =" ";

//controllo validità
if(years < 1 || years > 120){
  validData = false;
  errorMsg = "Inserire una età valida";
}
if(isNaN(years)){
  validData = false;
  errorMsg = "il dato deve essere un numero";
}
if(isNaN(kilometres)){
  validData = false;
  errorMsg = "il dato deve essere un numero";
}
if(kilometres <= 0){
  validData = false;
  errorMsg="Inserire un chilometraggio corretto";
}


//booking-area
if(validData){
  if(years > 65){
    fullPrice = fullPrice-(fullPrice*0.40);
    document.getElementById('booking').innerHTML = 
    `

    <h1>Prezzo Scontato per Over 65!</h1>

    <h2>Il prezzo finale del biglietto è: ${fullPrice.toFixed(2)} &euro;</h2>

    `;
  }

  else if(years < 18){
    fullPrice = fullPrice-(fullPrice*0.20);
    document.getElementById('booking').innerHTML = 
    `

    <h1>Prezzo Scontato per Under 18!</h1>

    <h2>Il prezzo finale del biglietto è: ${fullPrice.toFixed(2)} &euro;</h2>

    `;
  }

  else{
    document.getElementById('booking').innerHTML = 
    `

    <h1>Prezzo Pieno</h1>

    <h2>Il prezzo finale del biglietto è: ${fullPrice.toFixed(2)} &euro;</h2>

    `;
  }

}
else{
  document.getElementById('booking').innerHTML = 
  `
  <h2>${errorMsg}</h2>

  `;
}









