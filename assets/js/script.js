/***************************Variables*******************************/
$(document).ready(function () {
  
var roundNumber = 0;
var simonGame = [];
var simonColours = ['#green', '#red', '#blue', '#yellow'];
var simonColoursWakeUp = ['#yellow', '#green', '#red', '#blue', '#red', '#green', '#yellow', '#blue'];
var motivation = ['Nice move!', 'Great move!', 'You are a genius!', 'Good stuff!', 'What a memory!', 'Perfect!', 'Excellent!']
var playerGame = [];
var myTimerWaitForInformation = 0;
var greenSound = new Audio("assets/audio/greenSound.mp3");
var redSound = new Audio("assets/audio/redSound.mp3");
var blueSound = new Audio("assets/audio/blueSound.mp3");
var yellowSound = new Audio("assets/audio/yellowSound.mp3");
var wrongMoveSound = new Audio("assets/audio/Buzzer-SoundBible.com-188422102.mp3");
var InformationString = ``;

/*Common Functions*/

(function() {
  emailjs.init("user_gqsmetIRnz8HskVK7nXeh");
})();

/*When a navigation link is clicked the page will scroll smoothly*/
$(document).ready(function() {
  // Add smooth scrolling to all links
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
      }, 1500, function() {

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
      var myTimer = setTimeout(waitForNextRound, 2000);

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
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('#information').html(infoDescription).addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
}

/*When the start/reset button is pressed this function is called*/
function resetGamePressed() {
  clearTimeout(myTimerWaitForInformation);
  information("Let's play. Copy the random colours");
  wakeUp();
  resetGame();

  var myTimer = setTimeout(waitForNextRound, 4000);

  function waitForNextRound() {
    roundNumber = 0;
    nextRound();
  }
}

/*Reset the game*/
function resetGame() {
  console.log("resetGame function...");
  simonGame = [];
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
    }
  }, 800)
  clearPlayerGame();
}

/*Display the generated moves*/
function playGame(elementColour) {
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  playSound(elementColour);
  $(elementColour).addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
}

/*Clear the player moves*/
function clearPlayerGame() {
  playerGame = [];
}

function information(infoDescription) {
  var animationName = 'animated tada';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

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

/***************************Button Click Functions*******************************/

/*Shake the red button when it is pressed*/
$('#red').click(function() {
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
  $('#red').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
})

/*Shake the yellow button when it is pressed*/
$('#yellow').click(function() {
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
  $('#yellow').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
})

/*Shake the blue button when it is pressed*/
$('#blue').click(function() {
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
  $('#blue').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
})

/*Shake the green button when it is pressed*/
$('#green').click(function() {
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
  $('#green').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
})

/***************************Google Map Functions*******************************/

/*Initialize and add the map*/

function initMap() {
  // The location of my location
  var myCenter = new google.maps.LatLng(51.241896, -0.210983);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: myCenter
  });
  var marker = new google.maps.Marker({
    position: myCenter,
    map: map
  });
  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(11);
    map.setCenter(marker.getPosition());
  });
}

/*Call the function to Initialze the map*/
  initMap();
});
