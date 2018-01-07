//zapobiegamy że divy się jeszcze nie utworza zanim JS zacznie je wyszukiwac, ten listner bedzie dbal  to aby caly dokumement sie zaladowal

document.addEventListener('DOMContentLoaded', function() {

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

        var fields = document.querySelectorAll('.board > div');//wszystko co ma klasę board i jest divem jest zaznaczone

        //ustawiamy playera A jako inicjującego

        currentPlayer = 'playerA';

    fields.forEach(field => {
        field.addEventListener('click', fieldClickHandler)//iterujesz po każdym elemencie field i jak jest kliknęcie to wywołuje się funkcja fieldClickHandler
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
       if (emptyFields === 0) {
           alert('Co bys nie zrobił Marta i tak wygrała:)')
       }
     }
});