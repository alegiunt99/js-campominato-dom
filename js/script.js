/*
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
la griglia è composta da 100 elementi che visualizzano i numeri da 1 e 100 in ordine.


Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.


BONUS:
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100 10x10
con difficoltà 2 => tra 1 e 81 9x9
con difficoltà 3 => tra 1 e 49 7x7

*/


// preparazione all'esecuzione del programma
  
const buttonEasy = document.getElementById('easy');

const buttonMedium = document.getElementById('medium');

const buttonHard = document.getElementById('hard');

buttonEasy.addEventListener('click', ()=> createElementsInGrid(100, 'easy'));

buttonMedium.addEventListener('click', ()=> createElementsInGrid(81, 'medium'));

buttonHard.addEventListener('click', ()=> createElementsInGrid(49, 'hard'));



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







