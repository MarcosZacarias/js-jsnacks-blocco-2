// Creo una lista numeri
const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.table(listNumbers);

// Variabile numero dentro la lista
let number;

// Numero dispari dentro la lista
let numberOdd = 0;

// Numero somma numeri dipsari
let numberResult = 0;

// Conteggio dei numeri
for (let i = 0; i < listNumbers.length; i++) {
  number = listNumbers[i];
  console.log(number);

  if (!(i % 2 == 0)) {
    numberOdd = number;
    console.log("Numero dispari: " + numberOdd);
    numberResult += listNumbers[i];
  }
}

console.log("Totale della somma dei numeri dispari: " + numberResult);
