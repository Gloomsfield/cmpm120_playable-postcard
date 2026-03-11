var Move = {
	move: function(direction) {
		let new_pos = WorldGrid.deep_gridpos_from_object(this);
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
				new_pos.y -= 1;

				break;

			case DOWN:
				new_pos.y += 1;

				break;
			default:
				console.error("invalid movement direction!");
		}

		let association_result = WorldGrid.associate_object_with_gridpos(this, new_pos.x, new_pos.y);

		switch(association_result) {
			case ObjectPositionAssociationResult.bonk:
				this.scene.sound.get('bonk_audio').play();
				return;
			case ObjectPositionAssociationResult.success:
				return;
			default:
				return;
		}
	},
};

