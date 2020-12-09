function GeekTrait(code){
	const parsed = {};
	// https://regex101.com/r/c7NP1D/2
	code.replace(/^([a-z]{1,2})(?:(\d+)|\((.+)\))(.*)$/, function(m, br1, br2, br3, br4){
		parsed.trait = br1;
		parsed.value = br2 || br3;
		parsed.modifiers = br4;
	});

	const thisTrait = Traits[parsed.trait];
	if(thisTrait === undefined){
		throw new Error(`unknown code: ${code}`);
	}

	let traitElem;
	switch(thisTrait.type){
		case 'choice':
			if(parsed.value >= thisTrait.value.length){
				console.log(new Error(`invalid value ${code}`));
				return;
			}
			traitElem = renderTrait(thisTrait.name, thisTrait.value[parsed.value]);
			break;
		case 'link':
			const link = document.createElement('a');
			link.href = parsed.value;
			link.innerHTML = parsed.value;
			traitElem = renderTrait(thisTrait.name, link.outerHTML);
			break;
		case 'opinion':
			if(parsed.value > 100){
				console.log(new Error(`invalid value ${code}`));
				return;
			}
			let opinion;
			const tiers = Object.keys(thisTrait.value).map(e => +e).sort((a,b) => b>a);
			while(parsed.value <= tiers[0]){
				const tier = tiers.shift();
				opinion = thisTrait.value[tier];
			}
			traitElem = renderTrait(thisTrait.name, opinion.random());
			break;
		case 'text':
			// trait[text]
		default:
			traitElem = renderTrait(thisTrait.name, parsed.value);
	}

	const section = document.getElementById(thisTrait.section);
	if(section === null){
		throw new Error(`unknown section: ${thisTrait.section} for code: ${code}`);
	}
	section.appendChild(traitElem);
}

function renderTrait(name, value){
	const traitElem = document.createElement('div');
	const nameElem = document.createElement('h3');
	const valueElem = document.createElement('div');
	nameElem.innerText = name;
	valueElem.innerHTML = value;
	traitElem.appendChild(nameElem);
	traitElem.appendChild(valueElem);
	return traitElem;
}
