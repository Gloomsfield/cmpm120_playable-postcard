let Player = new Phaser.Class({
	Extends: Phaser.GameObjects.Sprite,

	Mixins: [
		GridPosition,
		Inventory,
		Direction,
		Move,
	],

	constructor(scene) {
		super(scene, 0.0, 0.0, 'player');

		scene.add.existing(this);
	}
});

