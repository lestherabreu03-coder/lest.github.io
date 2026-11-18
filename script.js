
let scoreA = 0;
let scoreB = 0;

function changeScore(team, amount) {

    if (team === 'A') {
        scoreA = Math.max(0, scoreA + amount);

        document.getElementById('scoreA').textContent = scoreA;
    }

    if (team === 'B') {
        scoreB = Math.max(0, scoreB + amount);

        document.getElementById('scoreB').textContent = scoreB;
    }
}

function resetScores() {

    scoreA = 0;
    scoreB = 0;

    document.getElementById('scoreA').textContent = 0;
    document.getElementById('scoreB').textContent = 0;
}
