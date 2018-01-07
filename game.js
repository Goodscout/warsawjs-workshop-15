//zapobiegamy że divy się jeszcze nie utworza zanim JS zacznie je wyszukiwac, ten listner bedzie dbal  to aby caly dokumement sie zaladowal

document.addEventListener('DOMContentLoaded', function() {
    var fields = document.querySelectorAll('.board > div'); //wszystko co ma klasę board i jest divem jest zaznaczone
    var emptyFields;

    //deklarujemy obiekt 
    var playerClasses = {
        'playerA': 'red',
        'playerB': 'blue'
    };
    var currentPlayer;

    initGame();

    function initGame() {
        emptyFields = 9;
        console.log('dziala');

        //ustawiamy playera A jako inicjującego

        currentPlayer = 'playerA';

    fields.forEach(field => {
        field.addEventListener('click', fieldClickHandler)//iterujesz po każdym elemencie field i jak jest kliknęcie to wywołuje się funkcja fieldClickHandler
        field.className ='';    
    });    
    }

    function fieldClickHandler() {
            var playerClass = playerClasses[currentPlayer];
            console.log('clicked', this);//wywołana pokażdym kliknięciu, w konsoli pojawia się napis clicked przy każdym divie
            this.classList.add(playerClass);
            
//jeśli playerA klika to potem się ma zmieniac na playeraB 
        if(currentPlayer === 'playerA') {
            currentPlayer = 'playerB';
        } 
        else {
            currentPlayer = 'playerA';
        }
        this.removeEventListener('click', fieldClickHandler);
        emptyFields--; //odejmuje o 1, mozesz zapisać "emptyFields = emptyFields - 1"albo emptyFields -=1
       checkWinner();
        if (emptyFields === 0) {
            setTimeout(function () {
                alert('Game over')
                initGame();
            }, 100)
       }
    }
    function checkWinner() {
        var row1 = fields[0].className + fields[1].className + fields[2].className;
        var row2 = fields[3].className + fields[4].className + fields[5].className;
        var row3 = fields[6].className + fields[7].className + fields[8].className;
        
        var col1 = fields[0].className + fields[3].className + fields[6].className;
        var col2 = fields[1].className + fields[4].className + fields[7].className
        var col3 = fields[2].className + fields[5].className + fields[8].className;

        var diag1 = fields[0].className + fields[4].className + fields[8].className;
        var diag2 = fields[2].className + fields[4].className + fields[6].className;

        if (row1 === 'redredred'|| row2 === 'redredred' || row3 === 'redredred' || col1 === 'redredred' || col2 === 'redredred' || col3 === 'redredred' || diag1 === 'redredred' || diag2 === 'redredred') {

            setTimeout(function () {
                alert('playerA won!')
                initGame();
            }, 100) 
        }
        if (row1 === 'blueblueblue'|| row2 === 'blueblueblue' || row3 === 'blueblueblue' || col1 === 'blueblueblue' || col2 === 'blueblueblue' || col3 === 'blueblueblue' || diag1 === 'blueblueblue' || diag2 === 'blueblueblue') {
            
            setTimeout(function () {
                alert('playerB won!')
                initGame();
            }, 100) 
        }
    }
});