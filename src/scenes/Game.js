class Game extends Phaser.Scene {
	constructor() {
		super('game_scene');
	}

	create() {
		const map = this.add.tilemap('ship_tilemap');
		const tileset = map.addTilesetImage('ship', 'ship_tileset');
		const floor_layer = map.createLayer('background', tileset, 0, 0);
		const walls_layer = map.createLayer('walls', tileset, 0, 0);
		const foreground_layer = map.createLayer('foreground', tileset, 0, 0);

		map.forEachTile(
			(tile) => {
				if(tile.index > -1) {
					WorldGrid.add_wall(tile.x, tile.y);
					console.log(tile.x);
				}
			},
			this,
			0,
			0,
			22,
			38,
			{ },
			'walls'
		);

		this.player = new Player(this, { x: 3, y: 36 });
		this.gift = new DebugGift(this, { x: 0, y: 0 });

		this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
	}

	update() {
		this.player.update();
		this.gift.update();
	}
}

