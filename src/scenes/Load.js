class Load extends Phaser.Scene {
	constructor() {
		super('load_scene');
	}

	preload() {
		this.load.once('complete', () => {
			this.scene.start('play_scene');
		});

		this.load.image('player_sprite', 'assets/sprites/player_debug.png');
		this.load.image('debug_gift_sprite', 'assets/sprites/gift_debug.png');

		this.load.image('ship_tileset', './assets/tilesets/ship_tileset.png');
		this.load.tilemapTiledJSON('ship_tilemap', './assets/tilemaps/ship.json');
	}
}

