const params = new URLSearchParams(window.location.search);
const code = params.get('gc');
if(code===null){
	document.querySelectorAll('body > div').forEach(e => e.style.display = (e.style.display === 'none') ? 'block' : 'none');
}else{
	const traitParams = code.split(/;/);

	const type = traitParams.shift();
	const parsed = {};
	type.replace(/^([A-Z]{2,3})(?:\((.+\.png)\))?$/, function(m, br1, br2){
		parsed.type = br1;
		parsed.url = br2;
	});

	if(parsed.url !== undefined){
		const img = document.getElementById('profilePic');
		img.src = parsed.url;
		img.setAttribute('style', 'display: block');
	}
	const classificationElem = document.getElementById('classification');
	const elem = document.createElement('div');
	elem.innerText = types[parsed.type];
	classification.appendChild(elem);

	traitParams.forEach((trait) => {
		GeekTrait(trait);
	});
}
