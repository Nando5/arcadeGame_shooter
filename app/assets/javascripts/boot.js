var BasicGame = {
  SEA_SCROLL_SPEED: 12,
  PLAYER_SPEED: 300,
  ENEMY_MIN_Y_VELOCITY: 120,
  ENEMY_MAX_Y_VELOCITY: 240,
  SHOOTER_MIN_VELOCITY: 120,
  SHOOTER_MAX_VELOCITY: 320,
  BOSS_Y_VELOCITY: 15,
  BOSS_X_VELOCITY: 200,
  BULLET_VELOCITY: 500,
  ENEMY_BULLET_VELOCITY: 500,
  POWERUP_VELOCITY: 250,

  SPAWN_ENEMY_DELAY: Phaser.Timer.SECOND,
  SPAWN_SHOOTER_DELAY: Phaser.Timer.SECOND * 3,

  SHOT_DELAY: Phaser.Timer.SECOND * 0.1,
  SHOOTER_SHOT_DELAY: Phaser.Timer.SECOND * 2,
  BOSS_SHOT_DELAY: Phaser.Timer.SECOND,

  ENEMY_HEALTH: 2,
  SHOOTER_HEALTH: 5,
  BOSS_HEALTH: 100,

  BULLET_DAMAGE: 1,
  CRASH_DAMAGE: 5,

  ENEMY_REWARD: 100,
  SHOOTER_REWARD: 400,
  BOSS_REWARD: 10000,
  POWERUP_REWARD: 100,

  ENEMY_DROP_RATE: 0.3,
  SHOOTER_DROP_RATE: 0.5,
  BOSS_DROP_RATE: 0,

  PLAYER_EXTRA_LIVES: 3,
  PLAYER_GHOST_TIME: Phaser.Timer.SECOND * 3,

  INSTRUCTION_EXPIRE: Phaser.Timer.SECOND * 10,
  RETURN_MESSAGE_DELAY: Phaser.Timer.SECOND * 2
};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

  init: function () {

    //  Unless the game needs multi-touch, this setting should be set to 1
    this.input.maxPointers = 1;

    //  Phaser will automatically pause if the browser tab the game is in loses focus. However it can be disabled like this:
    // this.stage.disableVisibilityChange = true;

    if (this.game.device.desktop) {
      //  If any desktop specific settings, they can go here
    } else {
      //  Same goes for mobile settings.
      //  This means "scale the game, no lower than 480x260 and no higher than 1024x768"
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.setMinMax(480, 260, 1024, 768);
      this.scale.forceLandscape = true;
    }
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },

  preload: function () {
    //  load the assets required for the preloader - aka the loading bar
    this.load.image('preloaderBar', 'assets/preloader-bar.png');
  },

  create: function () {
    //  By this point the preloader assets have loaded to the cache, the game settings have been set
    this.state.start('Preloader');
  }

};
