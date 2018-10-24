/***************************Variables*******************************/

var gameScore = 0;
var simonGame = [];
var simonColours = ['#green','#red', '#blue', '#yellow'];
var motivation = ['Nice move!','Great move!','You are a genius!','Good stuff!','What a memory!','Perfect!']
var playerGame = [];
var myTimerWaitForInformation = 0;
var greenSound = new Audio("../assets/audio/greenSound.mp3");
var redSound = new Audio("../assets/audio/redSound.mp3");
var blueSound = new Audio("../assets/audio/blueSound.mp3");
var yellowSound = new Audio("../assets/audio/yellowSound.mp3");
var wrongMoveSound = new Audio("../assets/audio/Buzzer-SoundBible.com-188422102.mp3");

/***************************Game Functions*******************************/

/*function addToPlayer(id) {
  console.log("addToPlayer function...");
  var field = "#"+id
  playerGame.push(field);
  playerTurn(field);
} */

function playerClicked(id) {
  console.log("playerClicked function...");
  var field = "#" + id;
  playerGame.push(field);
  checkPlayerClick();
}

function checkPlayerClick() {
    console.log("checkPlayerClick function...");
    if (playerGame[playerGame.length - 1] !== simonGame[playerGame.length - 1]) {
        console.log('Wrong click'); 
        wrongMoveSound.play();
        var s = `Wrong move! You made it to round ${gameScore}. Try again. Press Start/Reset...`;
        information(s);
        myTimerWaitForInformation = setInterval(waitForInformation, 3000);
        function waitForInformation() {
          informationFlash(s);
       }
        resetGame();
     } else {
        
        /*information("Good move!");*/
  
        /*sound(x);*/
        var check = playerGame.length === simonGame.length;
        if (check) {
          if(gameScore == 1){
            information("Good Start!");
          }
           if(gameScore !=1){
            information(motivation[(Math.floor(Math.random()*6))]);
           }
           var myTimer = setTimeout(waitForNextGameScore, 2000);
           function waitForNextGameScore() {
              nextGameScore();
          }
        }
  }
     

}

function resetGamePressed() {
  console.log("resetGamePressed function...");
  
   clearTimeout(myTimerWaitForInformation);

  information("Let's play. Copy the random colours");
  wakeUp();
  resetGame();
  var myTimer = setTimeout(waitForNextGameScore, 2000);
   function waitForNextGameScore() {
      nextGameScore();
   }

}

function resetGame() {
  console.log("resetGame function...");
  simonGame = [];
  gameScore = 0;
}

function wakeUp(){
  setTimeout(function(){
  playGame("#yellow");
  yellowSound.play();
  }, 200);
  setTimeout(function(){
  playGame("#green");
  greenSound.play();
  }, 400);
  setTimeout(function(){
  playGame("#red");
  redSound.play();
}, 600);
setTimeout(function(){
  playGame("#blue");
  blueSound.play();
   }, 800);
   setTimeout(function(){
  playGame("#red");
  redSound.play();
}, 1000);
setTimeout(function(){
  playGame("#green");
  greenSound.play();
  }, 1200);
  setTimeout(function(){
  playGame("#yellow");
  yellowSound.play();
  }, 1400);
}

function nextGameScore() {
  console.log("nextGameScore function...");
  gameScore++;
  $('#clickNumber').addClass('animated fadeOutDown');
  
  setTimeout(function(){
    $('#clickNumber').removeClass('fadeOutDown').html(gameScore).addClass('fadeInDown');
  }, 200);
  
  generateMove();
}

function generateMove(){
  console.log("generateMove function...");
  simonGame.push(simonColours[(Math.floor(Math.random()*4))]);
  console.log("generateMove: Generated colour is: %s", simonGame[simonGame.length - 1]);

  showMoves();
}

function showMoves() {
  console.log("showMoves function...");
  var i = 0;
  var moves = setInterval(function(){
    playGame(simonGame[i]);
    i++;
    if (i >= simonGame.length) {
      clearInterval(moves);
    }
  }, 1000)
  
  clearPlayerGame();
}

function playGame(field) {
  console.log("playGame function...");
  console.log("Shake button..........................");
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
  
  $(field).addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
    playSound(field);
  })
  
}

/*function nextLevel() {
   console.log("nextLevel function...");
  nextGameScore();
}*/


function clearPlayerGame() {
   console.log("clearPlayerGame function...");
  playerGame = [];
}

function information(infoDescription) {
  console.log("information function...");
  var animationName = 'animated tada';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('#information').html(infoDescription).addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
  
  /*$('#information').addClass('animated fadeOutDown');
  
  setTimeout(function(){
    $('#information').removeClass('fadeOutDown').html("You Lost! Try Again. Press Reset...").addClass('fadeInDown');
  }, 200);*/
}

function informationFlash(infoDescription) {
  console.log("information function...");
  var animationName = 'animated flash';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('#information').html(infoDescription).addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
  
  
}


function playSound(name) {
  switch(name) {
    case'#green':
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
$('#red').click(function() {
  console.log("#red clicked function...");
  console.log("Shake button..........................");
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
  

  $('#red').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
  redSound.play();
})

$('#yellow').click(function() {
  console.log("#yellow clicked function...");
  console.log("Shake button..........................");
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('#yellow').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
   yellowSound.play();
})

$('#blue').click(function() {
   console.log("#blue clicked function...");
  var animationName = 'animated shake clickButton';
  console.log("Shake button..........................");
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('#blue').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
   blueSound.play();
})

$('#green').click(function() {
  console.log("#green clicked function...");
  console.log("Shake button..........................");
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('#green').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
   greenSound.play();
})

$(document).ready(function(){
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
      }, 1500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


