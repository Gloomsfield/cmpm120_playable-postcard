class UI extends Phaser.Scene {
	constructor() {
		super('ui_scene');
	}

	create() {
		this.dialogue_box = this.add.image(0, HEIGHT, 'text-box_sprite').setOrigin(0.0, 1.0);
		this.dialogue_text = this.add.text(
			WIDTH / 2.0,
			HEIGHT - 112,
			'',
			{
				fontFamily: 'serif',
				fontSize: '24px',
				color: '#e3ddd1',
				stroke: '#e3ddd1',
				fixedWidth: 580,
				wordWrap: {
					width: 580,
				},
			}
		).setOrigin(0.5, 0.0);

		this.dialogue_box.visible = false;
		this.dialogue_text.visible = false;
	}
}

