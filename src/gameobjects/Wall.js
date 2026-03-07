let Wall = new Phaser.Class({
	Extends: Phaser.GameObjects.Sprite,

	Mixins: [
		GridPosition,
		Block,
	],
});

