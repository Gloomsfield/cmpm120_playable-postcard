class ObjectPositionAssociationResult {
	static bonk = -1;
	static success = 0;
};

class WorldGrid {
	static stringpos_to_gridpos = new Map();
	static gridpos_to_object = new Map();
	static object_to_gridpos = new Map();

	static tile_is_blocked(x, y) {
		let gridpos = this.stringpos_to_gridpos.get(`(${x}, ${y})`);

		if(!gridpos) { return false; }

		return !this.gridpos_to_object.has(gridpos);
	};

	static gridpos_from_object(object) {
		let gridpos = this.object_to_gridpos.get(object);

		if(!gridpos) { return false; }

		return gridpos;
	}

	static associate_object_with_gridpos(object, x, y) {
		if(this.tile_is_blocked(x, y)) { return SetGridPositionResult.bonk; }

		let old_gridpos = this.object_to_gridpos.get(object);

		if(old_gridpos) {
			this.gridpos_to_object.delete(old_gridpos);
		}

		let new_gridpos = this.stringpos_to_gridpos.get(`${x}, ${y}`);

		this.object_to_gridpos.set(object, new_gridpos);
		this.gridpos_to_object.set(new_gridpos, object);
	};
}

function define_grid_bounds(width, height) {
	for(let i = 0; i < height; i++) {
		for(let j = 0; j < width; j++) {
			WorldGrid.stringpos_to_gridpos.set(`(${j}, ${i})`, { x: j, y: i });
		}
	}
}

define_grid_bounds(100, 100);

