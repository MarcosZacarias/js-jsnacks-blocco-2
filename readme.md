# Snacks blocco 2

## Traccia

**1. JSnack1**

- Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

**2. JSnack2**

- Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

**3. JSnack3**

- Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

**4. JSnack4 (Bonus)**

- Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

## Istruzioni

**1. JSnack1**

- Scrivo un numero

  - creo un valore "_numero scritto_"

- Creo un valore "_numero stampato_"

- **SE** "_numero scritto_" è un numero pari
  - "_numero stampato_" = "_numero scritto_"
- **Altrimenti**

  - "_numero stampato_" = "_numero scritto_" + 1

- Stampo "_numero stampato_"

**2. JSnack2**

- Creo una lista nomi con dentro 4 nomi: "_lista nomi_"
  - do un valore numerico ad ogni nome
- Creo una lista cognomi con dentro 4 nomi: "_lista cognomi_"

  - do un valore numerico ad ogni cognome

- Creo una lista invitati

  - per ogni nome nella "_lista nomi_" aggiungo un cognome nella "_lista cognomi_"

- stampo lista invitati

**3. JSnack3**

- creo una lista di numeri dal 1 al 10 "_lista di numeri_"

- **per ogni** "_numero_" dentro "_lista di numeri_"

  - **SE** il "_numero_" ha un numero d'ordine dispari
    - "_numero dispari_" = "_numero_"
    - "_numero dispari_" = la somma del numero del "_numero dispari_" + "_numero dispari_" successivo

- Stampo il numero dispari
  - che sarà la somma dei numeri dispari
