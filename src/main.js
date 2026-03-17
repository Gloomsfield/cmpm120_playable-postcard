// amory acosta
// CMPM120 - playable postcard project
// title: "a murder on the obsidian sea"
// approximate hours spent: 25

let phaser_config = {
	type: Phaser.WEBGL,
	scale: {
		width: WIDTH,
		height: HEIGHT,
		zoom: 1.0,
	},
	antialias: false,
	roundPixels: true,
	scene: [ Load, Menu, Play, Game, UI, ],
}

let game = new Phaser.Game(phaser_config);

