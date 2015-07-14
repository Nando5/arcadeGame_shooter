window.onload = function() {

  //  Create the game and inject it into the gameContainer div.
  //  Its done in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready,)
  var game = new Phaser.Game(600, 800, Phaser.AUTO, 'gameContainer');

  //  Add the States your game has.
  //  Don't have to do this in the html, it could be done in the Boot state too.
  //  As each state gets started it will call the next state.
  game.state.add('Boot', BasicGame.Boot);
  game.state.add('Preloader', BasicGame.Preloader);
  game.state.add('MainMenu', BasicGame.MainMenu);
  game.state.add('Game', BasicGame.Game);


  //  Now start the Boot state.
  game.state.start('Boot');

};
