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

buttonEasy.addEventListener('click', ()=> createElementsInGrid(100, 'easy'));

buttonMedium.addEventListener('click', ()=> createElementsInGrid(81, 'medium'));

buttonHard.addEventListener('click', ()=> createElementsInGrid(49, 'hard'));

// prendo i messaggi dei risultati e li nascondo

let winMessage = document.querySelector('.you-win');

let loseMessage = document.querySelector('.you-lose');

winMessage.style.display = 'none';

loseMessage.style.display = 'none';

// creo una funzione per creare 16 numeri casuali

function createBombs() {

    // creo l'array
    const bombsGroup = [];

    // creo un ciclo che prenda tutti gli elementi del container
    for (let i = 1; i < bombsGroup.length; i++){
        
        // creo 16 numeri random 
        let randomBombs = Math.floor(Math.random() * 16) + 1;

        if (bombsGroup.contain(randomBombs)) {
            
            randomBombs = Math.floor(Math.random() * 16) + 1;
        } else {
            bombsGroup.push(randomBombs)
        }
    }

    console.log("l'array è:", bombsGroup)
}

function createElementsInGrid(totalCells, levelClass){

    // 1. recupero la griglia con l'id
    const container = document.querySelector('.container');
    // resetto il contenuto della griglia
    container.innerHTML = '';

    // 2. creo totalCells div all'interno della griglia
    for(let i=0; i < totalCells; i++){
    //      2a: creo l'elemento
        const boxes = document.createElement('div');
    //      2b: aggiungo eventuali classi css per dargli uno stile
        // cell.classList.add('cell');
        boxes.className = 'boxes';
        boxes.classList.add(levelClass);
    //      2c: associamo il numero da 1 a 100 al testo contenuto nella cella
        boxes.innerText = (i + 1); 
    //      2d: aggiungo l'elemento creato alla griglia   
        container.appendChild(boxes);

    //      2e: aggiungo un listener sul click dell'elemento
                // 2e-pt1: se non ha già lo sfondo verde lo metto
                // 2e-pt2: se è già verde tolgo il colore dallo sfondo

        boxes.addEventListener('click', ()=> boxes.classList.toggle('green-cell'));

    }


}








