ESERCIZI STANDARD:

1. Crea una funzione che controlli due numeri interi: ritorna `true` se uno dei due é 50 o se la loro somma é 50.

2. Crea una funzione che rimuova un carattere ad una stringa ad una specifica posizione, passa la stringa e la posizione come parametri; ritorna la stringa modificata.

3. Crea una funzione che ritorni `true` se due numeri sono compresi tra 40 e 60 o tra 70 e 100; altrimenti `false`.

4. Crea una funzione che ritorna `true` se il nome della cittá inizia con "Los" o "New", altrimenti `false`.

5. Crea una funzione che, specificato un array, ritorni la somma di tutti i suoi elementi.

6. Crea una funzione che ritorni `true` se un array NON contiene 1 o 3.

7. Crea una funzione che ritorni il tipo di angolo, accettando i gradi come parametro:
    (angolo) => (output);
    a. meno di 90deg => "acuto";
    b. tra 90deg e 180deg => "ottuso";
    c. uguale a 90deg => "retto";
    d. uguale a 180deg => "piatto";

8. Crea una funzione che crei un acronimo data una frase. Ad esempio "Fabbrca Italiana Automobile Torino" deve ritornare "FIAT".

================================================================

ESERCIZI EXTRA:

1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna true , altrimenti ritorna `false`.

3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].

4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.

Es.
X = 2
`'# '
'##'`
X = 3
`'# '
'## '`
`'###'`

7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]

9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
Es.

X = 3
`' # '
' ### '
'#####'`

10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:

Es.

N = 2

[[1, 2],
[4, 3]]

N = 3

[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]

N = 4

[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10, 9, 8, 7]]

================================================================

ESERCIZI EXTRA (MARCO):

1. Dato un array di numeri interi (nums) ed un numero intero (target), ritornare i 2 indici degli elementi nell’array nums che, sommati, restituiscano il numero target. Assumere che ogni nums fornito in input accetti solo una soluzione e che questo contenga solo numeri diversi fra loro.

Esempio:
Input: nums = [4, 9, 11, 13] , target = 22
Output: [1, 3]

2. Scrivere un programma che stampi nella console tutti i numeri da 1 a 100, con due eccezioni:
- Per tutti i numeri divisibili per 3, stampa “Fizz”;
- Per tutti i numeri divisibili per 5 (e non 3) stampa “Buzz”;
- Per tutti i numeri divisibili per 5 ed anche 3 stampa “FizzBuzz”.