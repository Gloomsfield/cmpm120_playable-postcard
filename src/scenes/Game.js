class Game extends Phaser.Scene {
	constructor() {
		super('game_scene');
	}

	create() {
		this.player = new Player(this);
	}

	update() {
		this.player.update();
	}
}

