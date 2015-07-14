window.onload = function() {

  if ( $("#gameContainer").length > 0 ) {
    var game = new Phaser.Game(1000, 700, Phaser.AUTO, '#gameContainer');

    //  Add the States to game has.
    //  Don't have to do this in the html, it could be done in the Boot state too.
    //  As each state gets started it will call the next state.
    game.state.add('Boot', BasicGame.Boot);
    game.state.add('Preloader', BasicGame.Preloader);
    game.state.add('MainMenu', BasicGame.MainMenu);
    game.state.add('Game', BasicGame.Game);


    //  Start the Boot state.
    game.state.start('Boot');
  }
};
