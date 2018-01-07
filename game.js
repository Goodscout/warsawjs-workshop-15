//zapobiegamy że divy się jeszcze nie utworza zanim JS zacznie je wyszukiwac, ten listner bedzie dbal  to aby caly dokumement sie zaladowal

document.addEventListener('DOMContentLoaded', function() {

    initGame();

    function initGame() {
        var fields = document.querySelectorAll('.board > div');//wszystko co ma klasę board i jest divem jest zaznaczone

    fields.forEach(field => {
        field.addEventListener('click', fieldClickHandler)//iterujesz po każdym elemencie field i jak jest kliknęcie to wywołuje się funkcja fieldClickHandler
        });
    }

    function fieldClickHandler() {
            console.log('clicked', this);//wywołana pokażdym kliknięciu, w konsoli pojawia się napis clicked przy każdym divie
        }
});