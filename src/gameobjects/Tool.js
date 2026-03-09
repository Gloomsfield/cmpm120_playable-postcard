let Tool = new Phaser.Class({
	Extends: Phaser.GameObjects.Sprite,

	Mixins: [
		Interact,
		Collect,
	]
});

