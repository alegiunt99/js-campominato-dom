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

// creo il punteggio

const pointsCounter = document.querySelector('.points');

// creo una funzione generale

function startGame(totCells, levelsGame) {
    
    createElementsInGrid(totCells, levelsGame);
    
    const bombsGroup = createBombs(totCells);

    let punteggio = 0;

    const allCells = document.querySelectorAll('.boxes');

    // creo un ciclo per controllare tutti i div 
    for (let i = 0; i < allCells.length; i++) {

       
        //recupero tutti i div all'interno della griglia
        const cells = allCells[i];

        //console.log(cells)

        // creo un evento al click della casella
        cells.addEventListener('click', () => {

            const containerGrid = document.querySelector('.container');

            const isBomb = bombsGroup.includes(i+1);

            if (isBomb) {

                cells.classList.add('red-box');

                containerGrid.classList.add('pointer-events')

                loseMessage.style.display = 'block';
            } else {
                punteggio++
                
                cells.classList.add('pointer-events')

                cells.classList.add('blue-box');

                pointsCounter.innerText = 'POINTS:' + ' ' + punteggio; 

                const clearBox = allCells.length - bombsGroup.length;

                if (punteggio >= clearBox) {
                    
                    containerGrid.classList.add('pointer-events');

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
        loseMessage.style.display = 'none';
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