// Creo una lista nomi con dentro 4 nomi: "lista nomi"
const listNames = ["Giacomo", "Matteo", "Maria", "Giovanna"];
console.table(listNames);

// Creo una lista cognomi con dentro 4 nomi: "lista cognomi"
const listLastNames = ["Fontana", "Rossi", "Conti", "Esposito"];
console.table(listLastNames);

// per ogni nome nella "lista nomi" aggiungo un cognome nella "lista cognomi"

for (let i = 0; i < 5; i++) {
  let numberName = Math.floor(Math.random() * listNames.length);
  let name = listNames[numberName];

  let numberLastName = Math.floor(Math.random() * listLastNames.length);
  let lastName = listLastNames[numberLastName];

  // stampo lista invitati

  console.log(name + " " + lastName);
}
