//chiedere all’utente il numero di chilometri che vuole percorrere
const kilometres = prompt("Quanti KM devi percorrere?");
console.log('Km:', kilometres);

//chiedere all’utente l’età del passeggero
const years = prompt("Quanti anni hai?");
console.log('Years:', years);

//codice sconto
let coupon = prompt("Inserisci Coupon");
console.log('Coupon:', coupon);

if(coupon == "SCONTO20" && years <= 20){
  coupon = true;
}
else if(coupon != "SCONTO20" && years <= 20){
  coupon = false;
  alert("spiacenti, il codice sconto inserito non è valido.");

}
else if(coupon == "SCONTO20" && years > 20){
  coupon = false;
  alert("spiacenti, il codice sconto inserito non è valido per la sua fascia d'età.");

}

//prezzo del biglietto è definito in base ai km
let fullPrice = kilometres*0.21;

//booking-area

//over 65
if(years > 65){
  fullPrice = fullPrice-(fullPrice*0.40);
  document.getElementById('booking').innerHTML = 
  `

  <h1>Prezzo Scontato per Over 65!</h1>

  <h2>Il prezzo finale del biglietto è: ${fullPrice.toFixed(2)} &euro;</h2>

  `;
}


//under 21
else if(years <= 20){

  if(years < 18 && coupon){
  fullPrice = fullPrice-(fullPrice*(0.20 + 0.20));
  document.getElementById('booking').innerHTML = 
  `

  <h1>Prezzo Scontato per Under 18 e coupon SCONTO20!</h1>

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

  else if(years >= 18 && coupon){
  fullPrice = fullPrice-(fullPrice*(0.20));
  document.getElementById('booking').innerHTML = 
  `

  <h1>Prezzo Scontato coupon SCONTO20!</h1>

  <h2>Il prezzo finale del biglietto è: ${fullPrice.toFixed(2)} &euro;</h2>

  `;
  }

  else if(years >= 18 && !coupon){
    fullPrice = fullPrice;
    document.getElementById('booking').innerHTML = 
    `
  
    <h1>Prezzo Pieno</h1>
  
    <h2>Il prezzo finale del biglietto è: ${fullPrice.toFixed(2)} &euro;</h2>
  
    `;
    }
}

//FROM 21 TO 65

else{
  document.getElementById('booking').innerHTML = 
  `

  <h1>Prezzo Pieno</h1>

  <h2>Il prezzo finale del biglietto è: ${fullPrice.toFixed(2)} &euro;</h2>

  `;
}









