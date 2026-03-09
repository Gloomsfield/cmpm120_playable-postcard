class SetGridPositionResult {
	static bonk = -1;
	static success = 0;
};

let WorldGrid = new Phaser.Class({
	Extends: Phaser.GameObjects.GameObject,

	Mixins: [],

	xy_to_gridpos: new Map(),
	gridpos_to_object: new Map(),
	object_to_gridpos: new Map(),

	tile_is_blocked: function(x, y) {
		let gridpos = this.xy_to_gridpos.get(`(${x}, ${y})`);

		if(!gridpos) { return false; }

		return !this.gridpos_to_object.has(gridpos);
	},

	associate_object_with_gridpos: function(object, x, y) {
		if(this.tile_is_blocked(x, y)) { return SetGridPositionResult.bonk; }

		let old_gridpos = this.object_to_gridpos.get(object);

		if(old_gridpos) {
			this.gridpos_to_object.delete(old_gridpos);
		}

		let new_gridpos = xy_to_gridpos.get(`${x}, ${y}`);

		this.object_to_gridpos.set(object, new_gridpos);
		this.gridpos_to_object.set(new_gridpos, object);
	},
});

let world_grid = new WorldGrid();

