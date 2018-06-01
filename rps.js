var userScore = 0;
var compScore = 0;

$(document).ready(function() {
  $('.circle_rock').click(function() {
    var userChoice = "rock";
    play(userChoice);
  })

  $('.circle_paper').click(function() {
    var userChoice = "paper";
    play(userChoice);
  })

  $('.circle_scissor').click(function() {
    var userChoice = "scissor";
    play(userChoice);
  })

  $('.bottom_rectangle').click(function() {
    resetGame();
  })
});

// Prints the scoreboard to the screen
var scoreBoard = function() {
  $('.top_rectangle').empty();
  $('.top_rectangle').append('User Score: ' + userScore + ('<br>') + 'Computer Score: ' + compScore);
}

// Clears the middle rectangle, preparing it for the new score
var clearMiddleRectangle = function() {
  $('.middle_rectangle').empty().append("CHOICES AND RESULTS");
}

// Clears the top rectangle, preparing it for the new score
var clearTopRectangle = function() {
  $('.top_rectangle').empty().append('SCORE');
}

// Clears the score
var resetGame = function() {
  userScore = 0;
  compScore = 0;
  clearTopRectangle();
  clearMiddleRectangle();
}

// sets the game in motion.  clears the score, computes the computer choice, prints the choices and prints the scoreboard
var play = function(userChoice) {
  clearMiddleRectangle();
  var computerChoice = computerPick();
  $('.middle_rectangle').empty().append('User:  ' + userChoice + ('<br>') +
    'PC:  ' + computerChoice + ('<br>') +
    compare(userChoice, computerChoice));
  scoreBoard();
}

// chooses either rock, paper or scissor for the computer
var computerPick = function() {
  var computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissor';
      break;
  }
};

// compares computer and user choices, updates the score variables and returns the winner
var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return ("The result is a Tie!");
  } else if (choice1 === "rock") {
    if (choice2 === "scissor") {
      userScore++;
      return ("ROCK WINS!");
    } else {
      compScore++;
      return ("PAPER WINS!");
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      userScore++;
      return ("PAPER WINS!");
    } else {
      compScore++;
      return ("SCISSOR WINS!");
    }
  } else if (choice1 === "scissor") {
    if (choice2 === "rock") {
      compScore++;
      return ("ROCK WINS!");
    } else {
      userScore++;
      return ("SCISSOR WINS!");
    }
  }
};
