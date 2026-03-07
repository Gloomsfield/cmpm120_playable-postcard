let Door = new Phaser.Class({
	Extends: Phaser.GameObjects.Sprite,

	Mixins: [
		GridPosition,
		Interact,
		Block,
	],
});

