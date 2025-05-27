let home = 0;
let away = 0;


function drawScores() {
  let homeScore = document.getElementById("home-score");
  let awayScore = document.getElementById("away-score");
  homeScore.innerText = home;
  awayScore.innerText = away;
}

function reset() {
  home = 0;
  away = 0;
  drawScores();
};

function updateScores(team, points) {
  if (team === "home") {
    home += points;
    drawScores();
  } else {
    away += points;
    drawScores();
  } if (home >= 30 || away >= 30) {
    window.alert(`${team} Team Wins! Game Over!`);
    reset();
  }
};