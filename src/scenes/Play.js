class Play extends Phaser.Scene {
	constructor() {
		super('play_scene');
	}

	create() {
		this.scene.launch('game_scene');
	}
}

