var makeChar;
var player1;
var player2;

$(function(){
  if (makeChar != []){
      makeChar = $('#createCharacter');
      player1 = $('#player1');
      player2 = $('#player2');
      player1.click(function(){alert('You chose Player 1!')});
      player2.click(function(){alert('You chose Player 2!')});

  }


});
