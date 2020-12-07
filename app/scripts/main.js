//GCS/M/S/MU d-(--)(++) s:+ a+ C++ UL P- L++ E--- W+++ N+ w+ M PS+ PE Y++ PGP+ t+ tv b++ D++ e++ h---- r+++(+) y++++*
//a(44);b(firefox);bk(books);c$$$;cl(some);d(hurtmeplenty);dd(DM);e(BS);f(rss);ff(shiney);h(rent);k(gpg);l(here);o(linux);p(java);ps(mod);pe(mod);pe(mod);pi(13);pp(mod);q(rail);r(mwk);s(daily);t(tng);tv(some);vi(vim);w(jedi);ws(tabs);x(everything)
//GCS;a44;b3;bk100;c100;cl50;d80;dd50;e1;ed5;f1;ff80;h1;l0;o1;p3;ps50;pe50;pi13;pp90;q80;r2;s75;t66;tv50;w66;ws0;x100

const params = new URLSearchParams(window.location.search);
const traitParams = params.get('gc').split(/;/);

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

