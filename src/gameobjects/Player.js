let Player = new Phaser.Class({
	Extends: Phaser.GameObjects.Sprite,

	Mixins: [
		Inventory,
		Direction,
		Move,
	],

	initialize: function Player(scene) {
		Phaser.GameObjects.Sprite.call(this, scene, 0.0, 0.0, 'player_sprite');

		scene.add.existing(this);
	},
});

