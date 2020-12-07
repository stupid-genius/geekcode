const Traits = {
	a: {
		name: 'Age',
		section: 'personalTraits'
	},
	b: {
		name: 'Browser',
		section: 'computerTraits',
		type: 'choice',
		value: ['Brave', 'Chrome', 'Edge', 'Firefox', 'Internet Explorer', 'Lynx', 'Opera', 'Safari']
	},
	bk: {
		name: '# Books read',
		section: 'hobbyTraits'
	},
	c: {
		name: 'Computers',
		section: 'computerTraits',
		type: 'opinion',
		value: {
			100: ['First in line to get BCI'],
			75: ['Computers are a large part of my existence'],
			50: ['Computers are just a tool'],
			25: ['Can\'t find the "any" key']
		}
	},
	cl: {
		name: 'Cloud',
		section: 'computerTraits',
		type: 'opinion',
		value: {
			100: ['I live in the cloud'],
			75: [],
			50: ['I think this cloud thing is catching on', 'I gotta get me one of those cloud computing jobs'],
			25: ['There is no cloud…just other people\'s computers']
		}
	},
	d: {
		name: 'Doom',
		section: 'hobbyTraits',
		type: 'opinion',
		value: {
			100: ['Nightmare'],
			75: ['Ultraviolence'],
			50: ['Hurt me plenty'],
			25: ['I\'m too young to die']
		}
	},
	dd: {
		name: 'D&D',
		section: 'hobbyTraits',
		type: 'opinion',
		value: {
			100: ['Dungeon Master', 'LARPer'],
			75: ['Occassionally play'],
			50: ['Enjoyed it as a teen'],
			25: ['Dungeons and dragons is the Debil!']
		}
	},
	e: {
		name: 'Education',
		section: 'personalTraits',
		type: 'choice',
		value: ['HS diploma', 'Bachelor\'s', 'Master\'s', 'Doctorate']
	},
	ed: {
		name: 'Editor',
		section: 'computerTraits',
		type: 'choice',
		value: ['Atom', 'Notepad++', 'Sublime', 'ed', 'emacs', 'vim']
	},
	f: {
		name: 'Feed',
		section: 'hobbyTraits',
		type: 'choice',
		value: ['Facebook', 'HN', 'RSS', 'Reddit', 'Usenet']
	},
	ff:{
		name: 'Firefly',
		section: 'hobbyTraits',
		type: 'opinion',
		value: {
			100: ['Browncoat'],
			75: ['I get all the references, Captain Tightpants.'],
			50: ['meh'],
			25: ['Hate it']
		}
	},
	h: {
		name: 'Housing',
		section: 'personalTraits',
		type: 'choice',
		value: ['nomad', 'lives with parents', 'lives alone', 'lives with roommates/others', 'lives with partner', 'lives with partner and children']
	},
	k: {
		name: 'Pubkey',
		section: 'personalTraits',
		type: 'link'
	},
	l: {
		name: 'Personal links',
		section: 'personalTraits',
		type: 'link'
	},
	o: {
		name: 'OS',
		section: 'computerTraits',
		type: 'choice',
		value: ['GNU/Linux', 'Linux', 'MacOS', 'Raspberry PI OS', 'Windows']
	},
	p: {
		name: 'Programming Language',
		section: 'computerTraits',
		type: 'choice',
		value: ['C#', 'C/C++', 'Go', 'Java', 'JavaScript', 'Python', 'Rust', 'assembly', 'machine']
	},
	ps: {
		name: 'Social',
		section: 'politicalTraits',
		type: 'opinion',
		value: {
			100: ['Ultra-conservative', 'MAGA'],
			80: ['Right'],
			60: ['Center'],
			40: ['Left'],
			20: ['SJW']
		}
	},
	pe: {
		name: 'Economic',
		section: 'politicalTraits',
		type: 'opinion',
		value: {
			100: ['Far right'],
			80: ['Right'],
			60: ['Center'],
			40: ['Left'],
			25: ['Far left']
		}
	},
	pi: {
		name: 'Raspberry Pi\'s owned',
		section: 'computerTraits'
	},
	pp: {
		name: 'Cypherpunk',
		section: 'politicalTraits',
		type: 'opinion',
		value: {
			100: ['Anonymous'],
			80: ['EFF member'],
			60: ['passive concern for privacy'],
			40: ['safety > privacy'],
			20: ['I have nothing to hide']
		}
	},
	q: {
		name: 'Quake',
		section: 'hobbyTraits',
		type: 'opinion',
		value: {
			100: ['Nightmare'],
			75: ['Hardcore'],
			50: ['Hurt me plenty'],
			25: ['I can win']
		}
	},
	r: {
		name: 'Relationships',
		section: 'personalTraits',
		type: 'choice',
		value: ['single', 'attatched', 'married', 'poly', 'widowed', 'complicated']
	},
	s: {
		name: 'SMBC',
		section: 'hobbyTraits',
		type: 'opinion',
		value: {
			100: [],
			75: [],
			50: [],
			25: []
		}
	},
	t: {
		name: 'Star Trek',
		section: 'hobbyTraits',
		type: 'opinion',
		value: {
			100: [],
			75: [],
			50: [],
			25: []
		}
	},
	tv: {
		name: 'TV',
		section: 'hobbyTraits',
		type: 'opinion',
		value: {
			100: ['watch daily'],
			75: ['watch 2-3 times per week'],
			50: ['watch occasionally'],
			25: ['rarely watch']
		}
	},
	w: {
		name: 'Star Wars',
		section: 'hobbyTraits',
		type: 'opinion',
		value: {
			100: [],
			75: [],
			50: [],
			25: []
		}
	},
	ws: {
		name: 'Tabs vs Spaces',
		section: 'computerTraits',
		type: 'choice',
		value: ['Tabs', 'Spaces']
	},
	x: {
		name: 'xkcd',
		section: 'hobbyTraits',
		type: 'opinion',
		value: {
			100: ['There is an xkcd for every situation', 'I know rule 34'],
			75: ['xkcd is hilarious'],
			50: ['I don\'t get it'],
			25: ['xkcd sucks']
		}
	}
};

/*
 * Ideas:
 *	cryptocurrencies
 *	AI
 *	Dilbert
 *	Babylon 5
 */

Array.prototype.random = function(){
	return this[Math.floor((Math.random()*this.length))];
};
