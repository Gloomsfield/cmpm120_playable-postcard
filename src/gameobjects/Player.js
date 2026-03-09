let Player = new Phaser.Class({
	Extends: Phaser.GameObjects.Sprite,

	Mixins: [
		Inventory,
		Direction,
		Move,
	],

	initialize: function Player(scene) {
		Sprite.call(scene, 0.0, 0.0, 'player');

		scene.add.existing(this);
	}
});

