//chiedere all’utente il numero di chilometri che vuole percorrere
const kilometres = prompt("Quanti KM devi percorrere?");
console.log('Km:', kilometres);
//chiedere all’utente l’età del passeggero
const years = prompt("Quanti anni hai?");
console.log('Years:', years);
//prezzo del biglietto è definito in base ai km
let fullPrice = kilometres*0.21;

//booking-area

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









