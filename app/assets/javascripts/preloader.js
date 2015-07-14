
BasicGame.Preloader = function (game) {

  this.background = null;
  this.preloadBar = null;

  //this.ready = false;

};


BasicGame.Preloader.prototype = {

  preload: function () {

    //  Show the loading progress bar asset loaded in boot.js
    this.stage.backgroundColor = '#107E82';

    this.preloadBar = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'preloaderBar');
    this.add.text(this.game.width / 2, this.game.height / 2 - 30, "Loading...", { font: "32px monospace", fill: "#fff" }).anchor.setTo(0.5, 0.5);

    //  This sets the preloadBar sprite as a loader sprite.
    //  What that does is automatically crop the sprite from 0 to full-width
    //  as the files below are loaded in.
    this.load.setPreloadSprite(this.preloadBar);

    //  Here we load the rest of the assets our game needs.

    // this.load.image('titlepage', 'assets/titlepage.png');

    this.load.image('sea', 'assets/starfield.png');
    this.load.image('bullet', 'assets/starBullet.png');
    this.load.image('enemyBullet', 'assets/starEnemyBullet.png');
    this.load.image('powerup1', 'assets/starPowerup.png');
    this.load.spritesheet('greenEnemy', 'assets/starEnemyBIG.png', 48, 48);
    this.load.spritesheet('whiteEnemy', 'assets/starShootingEnemyBIG.png', 48, 48);
    this.load.spritesheet('boss', 'assets/starBoss.png', 128, 128);
    this.load.spritesheet('explosion', 'assets/starExplosion.png', 64, 64);
    this.load.spritesheet('player', 'assets/starFighterBIG.png', 96, 96);
    //load in the audio just the same
    this.load.audio('explosion', ['assets/explosion.ogg', 'assets/explosion.wav']);
    this.load.audio('playerExplosion', ['assets/player-explosion.ogg', 'assets/player-explosion.wav']);
    this.load.audio('enemyFire', ['assets/enemy-fire.ogg', 'assets/enemy-fire.wav']);
    this.load.audio('playerFire', ['assets/player-fire.ogg', 'assets/player-fire.wav']);
    this.load.audio('powerUp', ['assets/powerup.ogg', 'assets/powerup.wav']);
    //this.load.audio('titleMusic', ['audio/main_menu.mp3']);
    //  + lots of other required assets here

  },

  create: function () {
    this.preloadBar.cropEnabled = false;
  },

  update: function () {

    //  Basically it will wait for the audio file to be decoded before proceeding to the MainMenu.
    //  You can jump right into the menu if you want and still play the music, but you'll have a few
    //  seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
    //  it's best to wait for it to decode here first, then carry on.
    
    //  If no music in the game then put the game.state.start line into the create function and delete
    //  the update function completely.
    
    //if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
    //{
    //  this.ready = true;
      this.state.start('MainMenu');
    //}

  }

};
