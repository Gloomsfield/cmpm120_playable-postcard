class Game extends Phaser.Scene {
	constructor() {
		super('game_scene');
	}

	create() {
		this.player = new Player(this, { x: 5, y: 5 });
		this.gift = new DebugGift(this, { x: 0, y: 0 });

		this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
	}

	update() {
		this.player.update();
		this.gift.update();
	}
}

