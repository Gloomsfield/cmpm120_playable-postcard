var Move = {
	move: function(direction) {
		let new_pos = this.grid_position;

		if(this.direction) {
			this.direction = direction;
		}

		switch(direction) {
			case LEFT:
				new_pos.add(new Phaser.Math.Vector2(-1, 0));

				break;
			case RIGHT:
				new_pos.add(new Phaser.Math.Vector2(1, 0));

				break;

			case UP:
				new_pos.add(new Phaser.Math.Vector2(0, 1));

				break;

			case Down:
				new_pos.add(new Phaser.Math.Vector2(0, -1));

				break;
			default:
				console.error("invalid direction!");
		}

		if(!tile_is_blocked(new_pos)) {
			this.grid_position = new_pos;
		}
	},
};

