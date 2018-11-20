/***************************Variables*******************************/
/*jslint browser: true*/
/*global $, jQuery*/

var roundNumber = 0;
var simonGame = [];
var simonColours = ['#green', '#red', '#blue', '#yellow'];
var simonColoursWakeUp = ['#yellow', '#green', '#red', '#blue', '#red', '#green', '#yellow', '#blue'];
var motivation = ['Nice move!', 'Great move!', 'You are a genius!', 'Good stuff!', 'What a memory!', 'Perfect!', 'Excellent!'];
var playerGame = [];
var myTimerWaitForInformation = 0;
var greenSound = new Audio("assets/audio/greenSound.mp3");
var redSound = new Audio("assets/audio/redSound.mp3");
var blueSound = new Audio("assets/audio/blueSound.mp3");
var yellowSound = new Audio("assets/audio/yellowSound.mp3");
var wrongMoveSound = new Audio("assets/audio/fail-buzzer-03.mp3");
var InformationString = "";
var countdown;
var countdown_number;
var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
var animationNameclickButton = 'animated shake clickButton';

/*Common Functions*/

(function() {
  /*Initialise emailjs*/
  emailjs.init("user_gqsmetIRnz8HskVK7nXeh");
})();

$(document).ready(function() {

  /*Update the highest score*/
  if (typeof(Storage) !== "undefined") {
    if (localStorage.highscore) {
      document.getElementById("hi_score").innerHTML = "Highest Score: " + localStorage.highscore;
    }
    else {
      localStorage.highscore = 1;
    }
  }

  /*When a navigation link is clicked the page will scroll smoothly*/
  /* Add smooth scrolling to all links*/
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


/***************************Game Functions*******************************/

/*When a coloured button is pressed on the game this fuction is called. */
function playerClicked(id) {
  var elementColour = "#" + id;
  playSound(elementColour);
  playerGame.push(elementColour);
  countdown_clear(); /*Start the timer */
  countdown_init(11); /*Allow the user 10 seconds to click a button*/

  checkPlayerClick();
}

/*Check which colour the player clicked*/
function checkPlayerClick() {
  clearTimeout(myTimerWaitForInformation);
  var tmpInformationString = `Wrong move! You made it to round ${roundNumber}. Try again. Press Start/Reset...`;
  if (playerGame[playerGame.length - 1] !== simonGame[playerGame.length - 1]) {
    wrongMoveSound.play();
    information(tmpInformationString);
    InformationString = tmpInformationString;
    myTimerWaitForInformation = setInterval(waitForInformation, 3000);
    resetGame();
  }
  else {
    var check = playerGame.length === simonGame.length;
    if (check) {
      if (roundNumber == 1) {
        information("Good Start!");
      }
      if (roundNumber != 1) {
        information(motivation[(Math.floor(Math.random() * 7))]);
      }
      if (typeof(Storage) !== "undefined") {
        if (localStorage.highscore) {
          if (roundNumber > Number(localStorage.highscore)) {
            localStorage.highscore = roundNumber;
          }
          document.getElementById("hi_score").innerHTML = "Highest Score: " + localStorage.highscore;
        }
        else {
          localStorage.highscore = 1;
        }
      }
      countdown_clear(); /*Clear the timer */
      setTimeout(waitForNextRound, 2000);

      function waitForNextRound() {
        nextRound();
      }
    }
  }
}

/*Functions to flash an information message intermittently when a wrong button is pressed*/
function waitForInformation() {
  informationFlash(InformationString);
}

function informationFlash(infoDescription) {
  var animationName = 'animated flash';

  $('#information').html(infoDescription).addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
}

function waitForNextRound() {
  roundNumber = 0;
  $("#game").removeClass('disabled');
  nextRound();
}

/*When the start/reset button is pressed this function is called*/
function resetGamePressed() {
  $("#game").addClass('disabled');
  clearTimeout(myTimerWaitForInformation);
  information("Let's play. Copy the random colours");
  wakeUp();
  resetGame();

  setTimeout(waitForNextRound, 4000);
}

/*Reset the game*/
function resetGame() {
  console.log("resetGame function...");
  simonGame = [];
  countdown_clear();
}

/*When the game is reset then all the buttons light up*/
function wakeUp() {
  var interval = 250;
  var intervalIncrement = 250;

  $.each(simonColoursWakeUp, function(index, value) {
    interval += intervalIncrement;
    setTimeout(function() {
      playGame(value);
      playSound(value);
    }, interval);
  });
}

/*Increment the next round*/
function nextRound() {
  roundNumber++;
  $('#roundNumber').addClass('animated fadeOutDown');
  setTimeout(function() {
    $('#roundNumber').removeClass('fadeOutDown').html(roundNumber).addClass('fadeInDown');
  }, 200);
  generateMove();
}

/*Pick a random colour from the array*/
function generateMove() {
  $("#game").addClass('disabled');
  simonGame.push(simonColours[(Math.floor(Math.random() * 4))]);
  displayGameMoves();
}

/*Display the generated moves*/
function displayGameMoves() {
  var i = 0;
  var moves = setInterval(function() {
    playGame(simonGame[i]);
    i++;
    if (i >= simonGame.length) {
      clearInterval(moves);
      $("#game").removeClass('disabled');
    }
    countdown_clear(); /*Start the timer only after the next round has been displayed*/
    countdown_init(11); /*Allow the user 10 seconds to click a button*/
  }, 800)
  clearPlayerGame();
}

/*Display the generated moves*/
function playGame(elementColour) {
  var animationName = 'animated shake clickButton';

  playSound(elementColour);
  $(elementColour).addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
}

/*Clear the player moves*/
function clearPlayerGame() {
  playerGame = [];
}

/*Update the information 'banner'*/
function information(infoDescription) {
  var animationName = 'animated tada';

  $('#information').html(infoDescription).addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
}

/*Function to decide which sound to play*/
function playSound(name) {
  switch (name) {
    case '#green':
      greenSound.play();
      break;
    case '#red':
      redSound.play();
      break;
    case '#blue':
      blueSound.play();
      break;
    case '#yellow':
      yellowSound.play();
      break;
  };
}

/*Timer Function*/

function countdown_init(time_interval) {
  countdown_number = time_interval
  countdown = 0;
  countdown_trigger();
}

function countdown_trigger() {
  if (countdown_number > 0) {
    countdown_number--;
    var minutes = Math.floor(countdown_number / 60);
    var seconds = countdown_number % 60;

    timer.innerHTML = "Time remaining: " + seconds + " seconds";
    if (countdown_number > 0) {
      countdown = setTimeout('countdown_trigger()', 1000);
    }
    else {
      /*Times up!!!!*/
      clearTimeout(myTimerWaitForInformation);
      var tmpInformationString = `Times Up! You made it to round ${roundNumber}. Try again. Press Start/Reset...`;
      wrongMoveSound.play(); /*The player took too long to press a button during the game*/
      information(tmpInformationString);
      InformationString = tmpInformationString;
      myTimerWaitForInformation = setInterval(waitForInformation, 3000);
      resetGame();
    }
  }
}

function countdown_clear() {
  clearTimeout(countdown);
}

/***************************Button Click Functions*******************************/

/*Shake the red button when it is pressed*/
$('#red').click(function() {
  $('#red').addClass(animationNameclickButton).one(animationEnd, function() {
    $(this).removeClass(animationNameclickButton);
  })
})

/*Shake the yellow button when it is pressed*/
$('#yellow').click(function() {
  $('#yellow').addClass(animationNameclickButton).one(animationEnd, function() {
    $(this).removeClass(animationNameclickButton);
  })
})

/*Shake the blue button when it is pressed*/
$('#blue').click(function() {
  $('#blue').addClass(animationNameclickButton).one(animationEnd, function() {
    $(this).removeClass(animationNameclickButton);
  })
})

/*Shake the green button when it is pressed*/
$('#green').click(function() {
  $('#green').addClass(animationNameclickButton).one(animationEnd, function() {
    $(this).removeClass(animationNameclickButton);
  })
})
