/***************************Variables*******************************/

var count = 0;
var currentGame = [];
var possibilities = ['#green','#red', '#blue', '#yellow'];
var motivation = ['Nice move!','Great move!','You are a genius!','Move over Einstein!','What a memory!','Perfect!']
var player = [];
var myTimerWaitForInformation = 0;

/***************************Game Functions*******************************/

function addToPlayer(id) {
  console.log("addToPlayer function...");
  var field = "#"+id
  player.push(field);
  playerTurn(field);
} 

function playerClicked(id) {
  console.log("playerClicked function...");
  var field = "#" + id;
  player.push(field);
  checkPlayerClick();
}

function checkPlayerClick() {
    console.log("checkPlayerClick function...");
    if (player[player.length - 1] !== currentGame[player.length - 1]) {
        console.log('Wrong Move - Start Again...'); 
        var s = `Wrong move! You made it to round ${count}. Try again. Press Start/Reset...`;
        information(s);
        myTimerWaitForInformation = setInterval(waitForInformation, 3000);
        function waitForInformation() {
          informationFlash(s);
       }
        resetGame();
     } else {
        
        /*information("Good move!");*/
  
        /*sound(x);*/
        var check = player.length === currentGame.length;
        if (check) {
          if(count == 1){
            information("Good Start!");
          }
           console.log("checkPlayerClick: Next Round Complete: %s", player[player.length - 1]);
           if(count !=1){
            information(motivation[(Math.floor(Math.random()*6))]);
           }
           var myTimer = setTimeout(waitForNextLevel, 2000);
           function waitForNextLevel() {
              nextLevel();
          }
        }
  }
     

}

function resetGamePressed() {
  console.log("resetGamePressed function...");
  
   clearTimeout(myTimerWaitForInformation);

  information("Let's play. Copy the random colours");
  resetGame();
  var myTimer = setTimeout(waitForAddCount, 2000);
   function waitForAddCount() {
      addCount();
   }

}

function resetGame() {
  console.log("resetGame function...");
  currentGame = [];
  count = 0;
}

function addCount() {
  console.log("addCount function...");
  count++;
  $('#clickNumber').addClass('animated fadeOutDown');
  
  setTimeout(function(){
    $('#clickNumber').removeClass('fadeOutDown').html(count).addClass('fadeInDown');
  }, 200);
  
  generateMove();
}

function generateMove(){
  console.log("generateMove function...");
  currentGame.push(possibilities[(Math.floor(Math.random()*4))]);
  console.log("generateMove: Generated colour is: %s", currentGame[currentGame.length - 1]);
  //alert(game.currentGame.length);
  
  showMoves();
}

function showMoves() {
  console.log("showMoves function...");
  var i = 0;
  var moves = setInterval(function(){
    playGame(currentGame[i]);
    i++;
    if (i >= currentGame.length) {
      clearInterval(moves);
    }
  }, 800)
  
  clearPlayer();
}

function playGame(field) {
  console.log("playGame function...");
  console.log("Shake button..........................");
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
  
  $(field).addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
  /*$(field).addClass('hover');*/
  /*sound(field);*/
  /*console.log(field);*/
  /*setTimeout(function(){
      $(field).removeClass('hover');
  }, 300);*/
}

function nextLevel() {
   console.log("nextLevel function...");
  addCount();
}


function clearPlayer() {
   console.log("clearPlayer function...");
  player = [];
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




/***************************Button Click Functions*******************************/
$('#red').click(function() {
  console.log("#red clicked function...");
  console.log("Shake button..........................");
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('#red').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
})

$('#yellow').click(function() {
  console.log("#yellow clicked function...");
  console.log("Shake button..........................");
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('#yellow').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
})

$('#blue').click(function() {
   console.log("#blue clicked function...");
  var animationName = 'animated shake clickButton';
  console.log("Shake button..........................");
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('#blue').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
})

$('#green').click(function() {
  console.log("#green clicked function...");
  console.log("Shake button..........................");
  var animationName = 'animated shake clickButton';
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('#green').addClass(animationName).one(animationEnd, function() {
    $(this).removeClass(animationName);
  })
})


