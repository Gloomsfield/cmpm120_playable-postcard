let DebugGift = new Phaser.Class({
	Extends: GridObject,

	Mixins: [
		Block,
	],

	interaction_key: 'debug_interaction_0',

	initialize: function DebugGift(scene, grid_position) {
		GridObject.call(this, scene, grid_position.x, grid_position.y, 'debug_gift_sprite');

		scene.add.existing(this);
	},
});
