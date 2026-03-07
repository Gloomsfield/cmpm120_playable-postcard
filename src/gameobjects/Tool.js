let Tool = new Phaser.Class({
	Extends: Phaser.GameObjects.Sprite,

	Mixins: [
		GridPosition,
		Interact,
		Collect,
	]
});

