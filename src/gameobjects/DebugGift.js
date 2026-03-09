let DebugGift = new Phaser.Class({
	Extends: GridObject,

	Mixins: [
		Interact,
		Block,
	],

	initialize: function DebugGift(scene, grid_position) {
		GridObject.call(this, scene, grid_position.x, grid_position.y, 'debug_gift_sprite');

		scene.add.existing(this);
	},

	on_interact: function(player_instance) {
		console.log("wow!");
	},
});
