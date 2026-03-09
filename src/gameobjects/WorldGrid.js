class ObjectPositionAssociationResult {
	static bonk = -1;
	static success = 0;
};

class WorldGrid {
	static stringpos_to_gridpos = new Map();
	static gridpos_to_object = new Map();
	static object_to_gridpos = new Map();

	static tile_is_blocked(x, y) {
		let gridpos = WorldGrid.stringpos_to_gridpos.get(`(${x}, ${y})`);

		if(!gridpos) { return false; }
		
		return WorldGrid.gridpos_to_object.has(gridpos);
	}

	static get_object_at_tile(x, y) {
		let gridpos = WorldGrid.stringpos_to_gridpos.get(`(${x}, ${y})`);

		if(!gridpos) { return false; }

		let object = WorldGrid.gridpos_to_object.get(gridpos);

		if(!object) { return false; }

		return object;
	}

	static get_gridpos_from_object(object) {
		let gridpos = WorldGrid.object_to_gridpos.get(object);

		if(!gridpos) { return false; }

		return gridpos;
	}

	static associate_object_with_gridpos(object, x, y) {
		if(WorldGrid.tile_is_blocked(x, y)) { return ObjectPositionAssociationResult.bonk; }

		let old_gridpos = WorldGrid.object_to_gridpos.get(object);

		if(old_gridpos) {
			WorldGrid.gridpos_to_object.delete(old_gridpos);
		}

		let new_gridpos = WorldGrid.stringpos_to_gridpos.get(`(${x}, ${y})`);

		WorldGrid.object_to_gridpos.set(object, new_gridpos);
		WorldGrid.gridpos_to_object.set(new_gridpos, object);

		return ObjectPositionAssociationResult.success;
	}

	static deep_gridpos_from_object(object) {
		let shallow_gridpos = WorldGrid.get_gridpos_from_object(object);
		if(!shallow_gridpos) { return false; }

		return JSON.parse(JSON.stringify(shallow_gridpos));
	}
}

function define_grid_bounds(width, height) {
	for(let i = 0; i < height; i++) {
		for(let j = 0; j < width; j++) {
			WorldGrid.stringpos_to_gridpos.set(`(${j}, ${i})`, { x: j, y: i });
		}
	}
}

define_grid_bounds(100, 100);

