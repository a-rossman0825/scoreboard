let home = 0;
let away = 0;


function increaseHome(points) {
  home += points;
  drawHomeScore();
  if (home >= 30) {
    alert("Home Team Wins!");
    reset();
  }
};

function increaseAway(points) {
  away += points;
  drawAwayScore();
  if (away >= 30) {
    alert("Away Team Wins!");
    reset();
  }
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

function drawHomeScore() {
  let homeScore = document.getElementById("home-score");
  homeScore.innerText = home;
};

function drawAwayScore() {
  let awayScore = document.getElementById("away-score");
  awayScore.innerText = away;
};

function reset() {
  home = 0;
  away = 0;
  drawHomeScore();
  drawAwayScore();
};

function drawScores() {
  drawHomeScore();
  drawAwayScore();

};
