var makeChar;
var player1;
var player2;
var userID;

$(function(){
  if (makeChar != []){
      makeChar = $('#createCharacter');
      player1 = $('#player1');
      player2 = $('#player2');
      player1.click(function(){
        makeChar.append("<p>You have chosen!</p>");
        $('p').fadeOut().fadeIn().fadeOut();
        makeChar.fadeOut();
        $('h3').fadeOut();
        // userID = $('#userID');

        $.ajax({
          type: "POST",
          url: "/character",
          data: {character: "player1", user_id: $('#userID')},
          processData: false,
        }).done(function(){
          console.log("it's a go.");
        });

      });
      player2.click(function(){
        makeChar.append("<p>You have chosen!</p>");
        $('p').fadeOut().fadeIn().fadeOut();
        makeChar.fadeOut();
        $('h3').fadeOut();

        $.ajax({
          type: "POST",
          url: "/character",
          data: {character: "player2", user_id: $('#userID')},
          processData: false,
        }).done(function(){
          console.log("it's a go.");
        });
      });

  }


});
