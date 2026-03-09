let Player = new Phaser.Class({
	Extends: GridObject,

	Mixins: [
		Inventory,
		Direction,
		Move,
],

	initialize: function Player(scene, grid_position) {
		GridObject.call(this, scene, grid_position.x, grid_position.y, 'player_sprite');

		scene.add.existing(this);
		
		this.move_left_input = scene.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.LEFT,
			false,
			false
		);

		this.move_left_input.on('down', () => {
			this.move(LEFT);
		});

		this.move_right_input = scene.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.RIGHT,
			false,
			false
		);

		this.move_right_input.on('down', () => {
			this.move(RIGHT);
		});

		this.move_up_input = scene.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.UP,
			false,
			false
		);

		this.move_up_input.on('down', () => {
			this.move(UP);
		});

		this.move_down_input = scene.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.DOWN,
			false,
			false
		);

		this.move_down_input.on('down', () => {
			this.move(DOWN);
		});

		this.interact_input = scene.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.E,
			false,
			false
		);

		this.interact_input.on('down', () => {
			this.try_interacting();
		});

		this.has_active_dialogue = false;
	},

	update: function() {
		GridObject.prototype.update.call(this);
	},

	try_interacting: function() {
		if(this.has_active_dialogue) {
			// handle dialogue continuation
			
			return;
		}

		let this_tile = WorldGrid.deep_gridpos_from_object(this);

		let that_tile = this_tile;

		switch(this.direction) {
			case LEFT:
				that_tile.x -= 1;
				
				break;
			case RIGHT:
				that_tile.x += 1;

				break;
			case UP:
				that_tile.y -= 1;

				break;
			case DOWN:
				that_tile.y += 1;

				break;
			default:
				console.log('facing invalid direction!');

				return;
		}

		let that_object = WorldGrid.get_object_at_tile(that_tile.x, that_tile.y);

		if(that_object && that_object.on_interact) {
			that_object.on_interact(this);
		}
	},
});

