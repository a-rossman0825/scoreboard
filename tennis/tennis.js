let home = 0;
let away = 0;
let homeSets = 0;
let awaySets = 0;
let advantage = "";

function increaseHome() {
  if (home == 40 && away == 40) {
    if (advantage == "home") {
      homeSets++;
      resetScores();
    } else if (advantage == "away") {
      advantage = "";
    } else {
      advantage = "home";
    }
  } else if (home == 40 && away < 40) {
    homeSets++;
    resetScores();
  } else {
    home = getNextPoint(home);
  }
  updateScore();
};

function increaseAway() {
  if (home == 40 && away == 40) {
    if (advantage == "away") {
      awaySets++;
      resetScores()
    } else if (advantage == "home") {
      advantage = "";
    } else {
      advantage = "away";
    }
  } else if (home < 40 && away == 40) {
    awaySets++;
    resetScores();
  } else {
    away = getNextPoint(away);
  }
  updateScore();
};

function decreaseHome() {
  if (advantage == "home") {
    advantage = "";
  } else {
    switch (home) {
      case 40:
        home = 30;
        break;
      case 30:
        home = 15;
        break;
      case 15:
        home = 0;
        break;
      default:
        home = 0;
    }
  }
  updateScore();
};

function decreaseAway() {
  if (advantage == "away") {
    advantage = "";
  } else {
    switch (away) {
      case 40:
        away = 30;
        break;
      case 30:
        away = 15;
        break;
      case 15:
        away = 0;
        break;
      default:
        away = 0;
    }
  }
  updateScore();
};

function resetScores() {
  home = 0;
  away = 0;
  advantage = "";
  updateScore();
};

function bigReset() {
  home = 0;
  away = 0;
  homeSets = 0;
  awaySets = 0;
  advantage = "";
  updateScore();
};

function getNextPoint(score) {
  if (score == 0) return 15;
  if (score ==15) return 30;
  if (score == 30) return 40;
  return 40;
};

function updateScore() {
  let homeScore = document.getElementById("home-score");
  let awayScore = document.getElementById("away-score");
  let homeSetsText = document.getElementById("home-sets");
  let awaySetsText = document.getElementById("away-sets");

  if (home == 40 && away == 40) {
    if (advantage == "home") {
      homeScore.innerText = "AD-IN";
      awayScore.innerText = "AD-OUT";
    } else if (advantage == "away") {
      homeScore.innerText = "AD-OUT";
      awayScore.innerText = "AD-IN";
    } else {
      homeScore.innerText = "DEUCE";
      awayScore.innerText = "DEUCE";
    }
  } else {
    homeScore.innerText = scoreToText(home);
    awayScore.innerText = scoreToText(away);
  }
  homeSetsText.innerText = homeSets;
  awaySetsText.innerText = awaySets;
};

function scoreToText(score) {
  if (score == 0) 
    return "L🥚VE";
    return score.toString();
};

