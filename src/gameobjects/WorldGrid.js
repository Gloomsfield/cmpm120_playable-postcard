let WorldGrid = new Phaser.Class({
	Extends: Phaser.GameObjects.GameObject,

	Mixins: [],

	grid: new Map(),

	tile_is_blocked: function(x, y) {
		return !this.grid.has(`(${x}, ${y})`);
	},
});

let world_grid = new WorldGrid();

