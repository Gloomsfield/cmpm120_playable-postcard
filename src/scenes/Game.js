class Game extends Phaser.Scene {
	constructor() {
		super('game_scene');
	}

	create() {
		this.cameras.main.setBackgroundColor(0x141f25);

		const map = this.add.tilemap('ship_tilemap');
		const tileset = map.addTilesetImage('ship', 'ship_tileset');
		const floor_layer = map.createLayer('floor', tileset, 0, 0);
		const walls_layer = map.createLayer('walls', tileset, 0, 0);
		const foreground_layer = map.createLayer('foreground', tileset, 0, 0);

		map.forEachTile(
			(tile) => {
				if(tile.index > -1) {
					WorldGrid.create_wall(tile.x, tile.y);
				}
			},
			this,
			0,
			0,
			MAP_WIDTH,
			MAP_HEIGHT,
			{ },
			'walls'
		);

		map.filterObjects('interactables', (object) => {
			let x_offset = Math.floor(object.x / 64);
			let y_offset = Math.floor(object.y / 64);

			for(let y = y_offset; y < y_offset + Math.floor(object.height / 64); y++) {
				for(let x = x_offset; x < x_offset + Math.floor(object.width / 64); x++) {
					let interactable = new InteractableObject(this, object.name, x, y);
					WorldGrid.place_interactable(interactable, x, y);
				}
			}
		});

		// TODO remove hardcoding coords
		this.player = new Player(this, { x: 3, y: 36 });

		this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
	}

	update() {
		this.player.update();
	}
}

