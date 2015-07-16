
BasicGame.MainMenu = function (game) {

  this.music = null;
  this.playButton = null;

};

BasicGame.MainMenu.prototype = {

  // preload: function() {
  //   this.load.image('titlepage', 'assets/titlepage.png');
  // },

  create: function () {
    //  Already preloaded the assets, so let's kick right into the Main Menu.
    // this.add.sprite(0, 0, 'titlepage');

    this.loadingText = this.add.text(this.game.width / 2, this.game.height / 2 - 100, "GAME CONTROLS", { font: "40px helvetica", fill: "#fff" });
    this.loadingText.anchor.setTo(0.5, 0.5);

    this.add.text(this.game.width / 2, this.game.height - 350, "Press SPACEBAR to start/restart game and to SHOOT", { font: "20px helvetica", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
    this.add.text(this.game.width / 2, this.game.height - 300, "Use ARROW keys to MOVE", { font: "20px helvetica", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);

    this.add.text(this.game.width / 2, this.game.height - 90, "image assets Copyright (c) 2015 Fernando Lucero", { font: "12px helvetica", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
    this.add.text(this.game.width / 2, this.game.height - 75, "sound assets Copyright (c) 2012 - 2013 Devin Watson", { font: "12px helvetica", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
  },

  update: function () {

    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || this.input.activePointer.isDown) {
      this.startGame();
    }
    //  Hopefuly i have time to some nice funky main menu effect here
  },

  startGame: function (pointer) {

    //  Ok, the Play Button has been clicked or touched, so stop music (otherwise it'll carry on playing)
    // this.music.stop();

    //  And start the actual game
    this.state.start('Game');

  }

};
