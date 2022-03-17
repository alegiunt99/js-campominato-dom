/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.

In seguito l'utente clicca su una cella: 

 - se il numero è presente nella lista dei numeri generati, la cella si colora di rosso e la partita termina,

La partita TERMINA quando:
- il giocatore clicca su una bomba 
- o raggiunge il numero massimo possibile di numeri consentiti.

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
3- L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

*/


// preparazione all'esecuzione del programma
  
const buttonEasy = document.getElementById('easy');

const buttonMedium = document.getElementById('medium');

const buttonHard = document.getElementById('hard');

buttonEasy.addEventListener('click', ()=> startGame(100, 'easy'));

buttonMedium.addEventListener('click', ()=> startGame(81, 'medium'));

buttonHard.addEventListener('click', ()=> startGame(49, 'hard'));

//console.log(startGame);
// prendo i messaggi dei risultati e li nascondo

let winMessage = document.querySelector('.you-win');

let loseMessage = document.querySelector('.you-lose');

winMessage.style.display = 'none';

loseMessage.style.display = 'none';

// creo il punteggio sullo schermo

const pointsCounter = document.querySelector('.points');

// creo una funzione generale

function startGame(totCells, levelsGame) {
    
    // la funzione che crea le celle
    createElementsInGrid(totCells, levelsGame);
    

    // la funzione che crea le bombe
    const bombsGroup = createBombs(totCells);

    // metto una variabile che rappresenta il punteggio
    let punteggio = 0;


    // prendo tutte i div con la classe boxes
    const allCells = document.querySelectorAll('.boxes');

    // creo un ciclo per controllare tutti i div 
    for (let i = 0; i < allCells.length; i++) {

       
        //recupero tutti i div all'interno della griglia
        const cells = allCells[i];

        // creo un evento al click della casella
        cells.addEventListener('click', () => {

            //recupero il container che contiene le celle
            const containerGrid = document.querySelector('.container');

            // creo una booleana che mi dice che è una bomba
            const isBomb = bombsGroup.includes(i+1);

            //se è una bomba 
            if (isBomb) {

                // aggiungo la classe per far spuntare lo sfondo rosso
                cells.classList.add('red-box');

                // aggiungo una classe al container che permette di bloccare ogni interazione
                containerGrid.classList.add('pointer-events')

                // faccio comparire il messaggio di sconfitta
                loseMessage.style.display = 'block';
            } else {                                        // se invece NON è una bomba

                // incremento di uno il punteggio a ogni cella pulita cliccata
                punteggio++
                

                // aggiungo la classe per far cliccare la cella solo una volta
                cells.classList.add('pointer-events')


                // faccio diventare la cella blu
                cells.classList.add('blue-box');

                // aggiungo il testo con i punti nell'Html
                pointsCounter.innerText = 'POINTS:' + ' ' + punteggio; 


                // calcolo la quantità di celle pulite
                const clearBox = allCells.length - bombsGroup.length;


                // quando il punteggio raggiunge lo stesso numero di caselle pulite
                if (punteggio >= clearBox) {
                    
                    // faccio finire il gioco 
                    containerGrid.classList.add('pointer-events');


                    // faccio spuntare il messaggio della vittoria
                    winMessage.style.display = 'block';
                }

            }
         })
    }
    
}

// creo una funzione per formare le bombe

function createBombs(max) {

    // creo un array vuoto dove inserire le posizioni
    const positionsBomb = [];

    console.log(positionsBomb);
    // creo un ciclo per creare massimo 16 numeri
    while (positionsBomb.length < 16) {

        //creo la posizione random 
        const position = generateRandomNumber(1, max)
        
        // se position non è presente all'interno dell'array, lo aggiungo
        if (!positionsBomb.includes(position)) {
            positionsBomb.push(position)
        }
    }

    // una volta usciti da qui abbiamo la certezza che siano 16 numeri tutti diversi
    return positionsBomb;
}

// creo una function per creare i numeri random

function generateRandomNumber(min, max) {
    const range = max - min + 1;

    return Math.floor(Math.random() * range) + min;
}

function createElementsInGrid(totalCells, levelClass){

    // 1. recupero la griglia con l'id
    const container = document.querySelector('.container');
    // resetto il contenuto della griglia
    container.innerHTML = '';

    container.classList.remove('pointer-events');

    // 2. creo totalCells div all'interno della griglia
    for(let i=0; i < totalCells; i++){
    //      2a: creo l'elemento
        const boxes = document.createElement('div');
    //      2b: aggiungo eventuali classi css per dargli uno stile
        // cell.classList.add('cell');
        boxes.className = 'boxes';

        boxes.classList.add(levelClass);

        // ogni volta che cambio livello, si resetta tutto

        // il messaggio di sconfitta torna invisibile
        loseMessage.style.display = 'none';

        // il messaggio di vittoria torna invisibile
        winMessage.style.display = 'none';

        // il contenuto del punteggio diventa invisibile
        pointsCounter.innerText = 'POINTS:' + ' '; 



    //      2c: associamo il numero da 1 a 100 al testo contenuto nella cella
        boxes.innerText = (i + 1); 
    //      2d: aggiungo l'elemento creato alla griglia   
        container.appendChild(boxes);

    }


}

function openAllBombs(bombsArray) {

    const allCellses = document.querySelectorAll('.boxes');

    for (let i = 0; i < allCellses; i++){

    
        const cellses = allCellses[i];

        console.log(cellses);

        if (bombsArray.includes(i)) {
            
            
            
            
        }
    }
    
}