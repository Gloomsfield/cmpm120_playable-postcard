let Player = new Phaser.Class({
	Extends: Phaser.GameObjects.Sprite,

	Mixins: [
		GridPosition,
		Inventory,
		Direction,
	],
});

