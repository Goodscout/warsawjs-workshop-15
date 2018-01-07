//zapobiegamy że divy się jeszcze nie utworza zanim JS zacznie je wyszukiwac, ten listner bedzie dbal  to aby caly dokumement sie zaladowal

document.addEventListener('DOMContentLoaded', function() {
	var resetButton = document.getElementById('reset-score');
    var playerClasses = {
        'playerA': 'red', 
        'playerB': 'blue'
    };

    var scores = {
		'playerA': 0,
		'playerB': 0
    }
    var names = {
		'playerA': 'playerA',
		'playerB': 'playerB'
	}

    var currentPlayer;
	var emptyFields;

    initGame();

    resetButton.addEventListener('click', function() {
    	scores['playerA'] = 0;
    	scores['playerB'] = 0;

		displayPlayerScore('playerA');
		displayPlayerScore('playerB');
    });
    
    for (let player in names) {
		let renameButton = document.getElementById(`${player}-rename`);
		renameButton.innerText = `Rename ${player}`;
		renameButton.addEventListener('click', function () {
			names[player] = prompt(`Rename ${player} to:`);
			renameButton.innerText = `Rename ${names[player]}`;
			displayRoundInformation();
			displayPlayerScore('playerA');
			displayPlayerScore('playerB');
		})
	}

	function displayPlayerScore(player) {
		var score = document.getElementById(`${player}-score`);

		score.innerHTML = `${player} score: ${scores[player]}`;
	}

	function updatePlayerScore(player) {
		scores[player]++;
	}

    function displayRoundInformation() {
		var round = document.getElementById('round-info');

		round.className = playerClasses[currentPlayer];
		round.innerHTML = `Round for ${names[currentPlayer]}`;
    }

    function initGame() {
		var fields = document.querySelectorAll('.board > div');

		currentPlayer = 'playerA';
		emptyFields = 9;
    	fields.forEach(field => field.addEventListener('click', fieldClickHandler));
		fields.forEach(field => field.removeAttribute('class'));

		displayRoundInformation();
		displayPlayerScore('playerA');
		displayPlayerScore('playerB');
	}

	function fieldClickHandler () {
        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);

		emptyFields--;
        currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';

		displayRoundInformation();
		this.removeEventListener('click', fieldClickHandler);

		checkWinner();
	}

	function  checkWinner() {
		var fields = document.querySelectorAll('.board > div');

		// Horizontal winning configurations
		var row1 = fields[0].className + fields[1].className + fields[2].className;
		var row2 = fields[3].className + fields[4].className + fields[5].className;
		var row3 = fields[6].className + fields[7].className + fields[8].className;

		// Vertical winning configurations
		var column1 = fields[0].className + fields[3].className + fields[6].className;
		var column2 = fields[1].className + fields[4].className + fields[7].className;
		var column3 = fields[2].className + fields[5].className + fields[8].className;

		// Diagonal winning configurations
		var diagonal1 = fields[0].className + fields[4].className + fields[8].className;
		var diagonal2 = fields[6].className + fields[4].className + fields[2].className;

		var boardCheck = [
			row1,
			row2,
			row3,
			column1,
			column2,
			column3,
			diagonal1,
			diagonal2
		];

		if (boardCheck.includes('redredred')) {
			setTimeout(() => {
				alert("Player A - YOU ROCK !!!");
				updatePlayerScore('playerA');
				initGame();
			}, 100);
			return;
		}

		if (boardCheck.includes('blueblueblue')) {
			setTimeout(() => {
				alert("Player B - YOU ROCK !!!");
				updatePlayerScore('playerB');
				initGame();
			}, 100);
			return;
		}

		if(emptyFields === 0) {
            setTimeout(() => {
                alert('TRY AGAIN');
                initGame();
            }, 100);
            return;
		}
	}
});