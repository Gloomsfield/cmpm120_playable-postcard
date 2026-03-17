let InteractionManager = {
	ui_scene: false,
	active_interaction: false,

	// interactions

	bed_interaction_0: {
		text: 'it\'s your infirmary bed.',
		next_key: 'bed_interaction_1',
		global_mutator: false,
	},

	bed_interaction_1: {
		text: 'it was rather uncomfortable.',
		next_key: 'bed_interaction_2',
		global_mutator: false,
	},

	bed_interaction_2: {
		text: 'what are ya gonna do. sometimes beds are just like that.',
		next_key: false,
		global_mutator: false,
	},

	bed_npc_0: {
		text: 'they look fast asleep.',
		next_key: 'bed_npc_1',
		global_mutator: false,
	},

	bed_npc_1: {
		text: '"... zzzzzzz..."',
		next_key: 'bed_npc_2',
		global_mutator: false,
	},

	bed_npc_2: {
		text: 'they must be having a bee-centric dream.',
		next_key: false,
		global_mutator: false,
	},

	// end interactions
	
	interaction_map: new Map([
		{
			tilemap_key: 'infirmary_bed_unoccupied',
			interaction_key: 'bed_interaction_0',
		},
		{
			tilemap_key: 'infirmary_bed_occupied',
			interaction_key: 'bed_npc_0',
		},
	].map((obj) => [ obj.tilemap_key, obj.interaction_key ])),
	
	interact: function(tilemap_key) {
		if(!this.ui_scene) {
			console.error('ui_scene undefined in InteractionManager!');
			return;
		}

		let interaction_key = this.interaction_map.get(tilemap_key);

		if(!interaction_key) {
			if(this.active_interaction) {
				this.interaction_map.set(tilemap_key, this.active_interaction);

				this.active_interaction = false;
			}

			this.ui_scene.dialogue_box.visible = false;
			this.ui_scene.dialogue_text.visible = false;
			this.ui_scene.dialogue_text.text = '';

			return;
		}

		let interaction = this[interaction_key];

		if(!interaction) {
			console.error(`attempted to start undefined interaction "${interaction_key}"!`);
		}

		if(!this.active_interaction) {
			this.active_interaction = interaction_key;
		}

		this.ui_scene.dialogue_box.visible = true;
		this.ui_scene.dialogue_text.visible = true;
		this.ui_scene.dialogue_text.text = interaction.text;

		this.interaction_map.set(tilemap_key, interaction.next_key);
	},
};

