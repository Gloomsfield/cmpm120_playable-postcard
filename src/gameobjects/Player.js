let Player = new Phaser.Class({
	Extends: Phaser.GameObjects.Sprite,

	Mixins: [
		Inventory,
		Direction,
		Move,
	],

	constructor(scene) {
		super(scene, 0.0, 0.0, 'player');

		scene.add.existing(this);
	}
});

