// var player = $.get("/player2.png").done(function(e){console.log(e)});
// var img = new Image();
//
// $(img).load(function(){
//
//   $('#container').append($(this));
//
// }).attr({
//
//   // src: someRemoteImage
//
// }).error(function(){
//   //do something if image cannot load
// });


var mainState = {
  preload: function(){
    game.load.image('player', $('#player2')[0]);
    game.load.image('wallV', '../../../public/wallVertical.png');
    game.load.image('wallH', '../../../public/wallHorizontal.png');
    game.load.image('coin', '../../../public/coin.png');
  },

  create: function(){
    game.stage.backgroundColor = "#4A0B61";
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.player = game.add.sprite(game.world.randomX, game.world.randomY, 'player');
    game.physics.arcade.enable(this.player);
    // commented out code moves sprite down
    this.player.body.gravity.y = 10000;
    this.cursor = game.input.keyboard.createCursorKeys();
    this.createWorld();
    this.coin = game.add.sprite(60, 140, 'coin');
    game.physics.arcade.enable(this.coin);
    this.coin.anchor.setTo(0.5, 0.5);

    this.scoreLabel = game.add.text(30, 30, 'score: 0', {font: '18px Arial', fill: '#ffffff'});
    this.score = 0;

    this.createWorld();

  },

  update: function(){
    game.physics.arcade.collide(this.player, this.walls);
    this.movePlayer();
    game.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);

    if (!this.player.inWorld){
      this.playerDie();
    }
  },

  movePlayer: function(){
    if(this.cursor.left.isDown){
      this.player.body.velocity.x = -200;
    } else if (this.cursor.right.isDown){
      this.player.body.velocity.x = 200;
    } else if (this.cursor.up.isDown){
      this.player.body.velocity.y = -500;
    } else if (this.cursor.down.isDown){
      this.player.body.velocity.y = 200;
    }
    else {
      this.player.body.velocity.x = 0;
      this.player.body.velocity.y = 0;

    }

    if (this.cursor.up.isDown && this.player.body.touching.down){
      this.player.body.velocity.y = -320;
    }
  },

  takeCoin: function(player, coin){
    this.score += 5;
    this.scoreLabel.text = 'score: ' + this.score;

    this.updateCoinPosition();
  },

  updateCoinPosition: function(){
    var coinPosition = [
    {x: 140, y: 60}, {x: 360, y: 60},
    {x: 60, y: 140}, {x: 440, y: 140},
    {x: 130, y: 300}, {x: 370, y: 300}
    ];

    for(var i=0; i<coinPosition.length;i++){
      if(coinPosition[i].x === this.coin.x){
        coinPosition.splice(i, 1);
      }
    }

    var newPosition = coinPosition[game.rnd.integerInRange(0, coinPosition.length-1)];
    this.coin.reset(newPosition.x, newPosition.y);
  },

  createWorld: function(){
    //Create our wall group with Arcarde physics
    this.walls = game.add.group();
    this.walls.enableBody = true;
    // Create the 10 walls
    game.add.sprite(0, 0, 'wallV', 0, this.walls); //left
    game.add.sprite(480, 0, 'wallV', 0, this.walls); //right

    game.add.sprite(0, 0, 'wallH', 0, this.walls); //top left
    game.add.sprite(300, 0, 'wallH', 0, this.walls); //top right
    game.add.sprite(0, 320, 'wallH', 0, this.walls); //bottom left
    game.add.sprite(300, 320, 'wallH', 0, this.walls); //bottom right

    game.add.sprite(-100, 160, 'wallH', 0, this.walls); //middle left
    game.add.sprite(400, 160, 'wallH', 0, this.walls); //middle right

    var middleTop = game.add.sprite(100, 80, 'wallH', 0, this.walls);
    middleTop.scale.setTo(1.5, 1);
    var middleBottom = game.add.sprite(100, 240, 'wallH', 0, this.walls);
    middleBottom.scale.setTo(1.5, 1);

    //set all walls to be immovable
    this.walls.setAll('body.immovable', true);



  },
  playerDie: function(){
    game.state.start('main');
  },

};

var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

game.state.add('main', mainState);

game.state.start('main');
