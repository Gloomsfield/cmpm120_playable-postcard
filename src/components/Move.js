var Move = {
	move: function(direction) {
		let new_pos = WorldGrid.gridpos_from_object(this);
		if(!new_pos) {
			console.error("an object didn't have a position on the grid!");
			return;
		}

		if(this.direction) {
			this.direction = direction;
		}

		switch(direction) {
			case LEFT:
				new_pos.x -= 1;

				break;
			case RIGHT:
				new_pos.x += 1;

				break;

			case UP:
				new_pos.y += 1;

				break;

			case Down:
				new_pos.y -= 1;

				break;
			default:
				console.error("invalid movement direction!");
		}

		switch(WorldGrid.associate_object_with_gridpos(this, new_pos.x, new_pos.y)) {
			case ObjectPositionAssociationResult.bonk:
				console.log('bonk!');
				return;
			case ObjectPositionAssociationResult.success:
				return;
			default:
				return;
		}
	},
};

