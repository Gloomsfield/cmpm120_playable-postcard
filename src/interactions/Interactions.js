let InteractionManager = {
	ui_scene: false,
	active_interaction: false,

	// interactions

	debug_interaction_0: { 
		text: 'haiii :3',
		next_key: 'debug_interaction_1',
		global_mutator: false,
	},

	debug_interaction_1: {
		text: 'omg...!',
		next_key: false,
		global_mutator: () => {
			console.log('test function');
		},
	},

	// end interactions
	
	interaction_map: new Map([
		{
			tilemap_key: 'infirmary_bed_occupied',
			interaction_key: 'debug_interaction_0',
		},
	].map((obj) => [ obj.tilemap_key, obj.interaction_key ])),
	
	interact: function(tilemap_key) {
		if(!this.ui_scene) {
			console.error('ui_scene undefined in InteractionManager!');
			return;
		}

		let interaction_key = this.interaction_map.get(tilemap_key);

		if(!interaction_key) {
			console.error(`attempted to start interaction with undefined tile "${tilemap_key}"!`);
			return;
		}

		let interaction = this[interaction_key];

		if(!interaction) {
			console.error(`attempted to start undefined interaction "${interaction_key}"!`);
		}

		this.ui_scene.dialogue_box.visible = true;
		this.ui_scene.dialogue_text.visible = true;
		this.ui_scene.dialogue_text.text = interaction.text;

		this.interaction_map.set(tilemap_key, interaction.next_key);
	},
};

