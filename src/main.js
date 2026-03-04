// amory acosta
// CMPM120 - playable postcard project

let phaser_config = {
	type: Phaser.WEBGL,
	scale: {
		width: 240,
		height: 160,
		zoom: 2.0,
	},
	antialias: false,
	roundPixels: true,
	scene: [ Load, Menu, Play, Game, UI, ],
}

let game = new Phaser.Game(phaser_config);

