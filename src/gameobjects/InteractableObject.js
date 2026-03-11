let InteractableObject = new Phaser.Class({
	Extends: GridObject,

	initialize: function InteractableObject(scene, interaction_key, x, y) {
		GridObject.call(this, scene, x, y, '');

		scene.add.existing(this);

		this.visible = false;

		this.key = interaction_key;
	},

	on_interact() {

	},
});
