let Player = new Phaser.Class({
	Extends: GridObject,

	Mixins: [
		Inventory,
		Direction,
		Move,
	],

	initialize: function Player(scene) {
		GridObject.call(this, scene, 9, 5, 'player_sprite');

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
	},

	update: function() {
		GridObject.prototype.update.call(this);
	},
});

