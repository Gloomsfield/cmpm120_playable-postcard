let GridObject = new Phaser.Class({
	Extends: Phaser.GameObjects.Sprite,

	initialize: function GridObject(scene, x, y, sprite_key) {
		Phaser.GameObjects.Sprite.call(this, scene, 0.0, 0.0, sprite_key);

		WorldGrid.associate_object_with_gridpos(this, x, y);
	},

	update() {
		let grid_pos = WorldGrid.get_gridpos_from_object(this);

		let world_pos = {
			x: (grid_pos.x * TILE_WIDTH) + TILE_WIDTH / 2.0,
			y: (grid_pos.y * TILE_WIDTH) + TILE_HEIGHT / 2.0
		};

		this.setPosition(world_pos.x, world_pos.y);
	}
});

