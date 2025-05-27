let home = 0;
let away = 0;

/*
function increaseHome(points) {
  home += points;
  drawHomeScore();
};

function increaseAway(points) {
  away += points;
  drawAwayScore();
};

function drawHomeScore() {
  let homeScore = document.getElementById("home-score");
  homeScore.innerText = home;
};

function drawAwayScore() {
  let awayScore = document.getElementById("away-score");
  awayScore.innerText = away;
};

function decreaseHome(points) {
  if (home - points >= 0) {
    home -= points;
  } else {
    home = 0;
  }
  drawHomeScore();
};

function decreaseAway(points) {
  if (away - points >= 0) {
    away -= points;
  } else {
    away = 0;
  }
  drawAwayScore();
}
*/

function drawScores() {
  let homeScore = document.getElementById("home-score");
  homeScore.innerText = home;
  let awayScore = document.getElementById("away-score");
  awayScore.innerText = away;
}

function reset() {
  home = 0;
  away = 0;
  drawScores();
}

function updateScores(team, points) {
  if (team == "home") {
    home += points;
    drawScores();
  } else {
    away += points;
    drawScores();
  } if (home >= 50 || away >= 50) {
    alert(`${team} Team Wins! Game Over!`);
    reset();
  }
}