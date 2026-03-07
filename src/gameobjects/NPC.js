let NPC = new Phaser.Class({
	Extends: Phaser.GameObjects.Sprite,

	Mixins: [
		GridPosition,
		Direction,
	],
});

