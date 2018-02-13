$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  $('#randomNumber').text(Random);
  var blue= Math.floor(Math.random()*11+1)
  var green= Math.floor(Math.random()*11+1)
  var pink= Math.floor(Math.random()*11+1)
  var white= Math.floor(Math.random()*11+1)
   var playerScore= 0;
  var wins= 0;
  var losses = 0;
$('#wins').text(wins);
$('#losses').text(losses);
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      blue= Math.floor(Math.random()*11+1);
      green= Math.floor(Math.random()*11+1);
      pink= Math.floor(Math.random()*11+1);
      white= Math.floor(Math.random()*11+1);
      playerScore= 0;
      $('#finalTotal').text(playerScore);
      }
function wooHoo(){
alert("You Win!");
  wins++;
  $('#wins').text(wins);
  reset();
}
function loser(){
alert ("Try Again!");
  losses++;
  $('#losses').text(losses);
  reset()
}
  $('#one').on ('click', function(){
    playerScore = playerScore + blue;
    console.log("New playerScore= " + playerScore);
    $('#finalTotal').text(playerScore);
                  if (playerScore == Random){
          wooHoo();
        }
        else if ( playerScore > Random){
          loser();
        }
  })
  $('#two').on ('click', function(){
    playerScore = playerScore + green;
    console.log("New playerScore= " + playerScore);
    $('#finalTotal').text(playerScore);
        if (playerScore == Random){
          wooHoo();
        }
        else if ( playerScore > Random){
          loser();
        }
  })
  $('#three').on ('click', function(){
    playerScore = playerScore + pink;
    console.log("New playerScore= " + playerScore);
    $('#finalTotal').text(playerScore);
          if (playerScore == Random){
          wooHoo();
        }
        else if ( playerScore > Random){
          loser();
        }
  })
  $('#four').on ('click', function(){
    playerScore = playerScore + white;
    console.log("New playerScore= " + playerScore);
    $('#finalTotal').text(playerScore);

          if (playerScore == Random){
          wooHoo();
        }
        else if ( playerScore > Random){
          loser();
        }
  });
});
