//chiedere all’utente il numero di chilometri che vuole percorrere
const kilometres = prompt("Quanti KM devi percorrere?");
console.log('Km:', kilometres);
//chiedere all’utente l’età del passeggero
const years = prompt("Quanti anni hai?");
console.log('Years:', years);
//prezzo del biglietto è definito in base ai km
const fullPrice = kilometres*0.21;
//sconto del 20% per i minorenni
const salePriceJunior = fullPrice-(fullPrice*0.20);
//sconto del 40% per gli over 65
const salePriceSenior = fullPrice-(fullPrice*0.40);







