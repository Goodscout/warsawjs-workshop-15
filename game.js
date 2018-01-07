//zapobiegamy że divy się jeszcze nie utworza zanim JS zacznie je wyszukiwac, ten listner bedzie dbal  to aby caly dokumement sie zaladowal

document.addEventListener('DOMContentLoaded', function() {

    initGame();

    function initGame() {
        var fields = document.querySelectorAll('.board > div');

    fields.forEach(field => {
        field.addEventListener('click', fieldClickHandler)
        });
    }

    function fieldClickHandler() {
            console.log('clicked', this);
        }
});