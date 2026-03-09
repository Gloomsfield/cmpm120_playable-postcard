class Load extends Phaser.Scene {
	constructor() {
		super('load_scene');
	}

	preload() {
		this.load.once('complete', () => {
			this.scene.start('play_scene');
		});

		this.load.image('player_sprite', 'assets/player_debug.png');
		this.load.image('debug_gift_sprite', 'assets/gift_debug.png');
	}
}

