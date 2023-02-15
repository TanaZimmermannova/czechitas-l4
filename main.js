// tady je místo pro náš program

function film() {
	let title = prompt ("Zadej název oblíbeného filmu:");
	title = title.trim();
	let a = title.length;
	let b = a - 5;
	let velka = title.toUpperCase();
	let start = title.slice(0, 5);
	let end = title.slice (b, a);

	let pocet = document.querySelector (".mnozstvi");
	console.log (a);
	pocet.textContent = `Počet písmen v zadaném názvu filmu je ${a} znaků`;
	
	let nazev = document.querySelector (".nazev");
	nazev.textContent = "Název filmu: " + velka;
	console.log (velka);
	
	let prvni = document.querySelector (".prvni");
	prvni.textContent = "Prvních 5 písmen názvu filmu je: " + start;
	console.log (start);
	
	let posledni = document.querySelector (".posledni");
	posledni.textContent = "Posledních 5 písmen v názvu filmu je: " + end;
	console.log (end);
}


function email () {
	let vstup = prompt ("Zadejte svoji emailovou adrese ve formátu xxx@xxx.xx");
	let atIndex = vstup.indexOf ("@");
	//let jmeno = vstup.slice (0, atIndex);
	//let domena = vstup.slice (atIndex + 1, vstup.length);
	
	const mail = {
		jmeno: vstup.slice (0, atIndex),
		domena: vstup.slice (atIndex + 1, vstup.length)
	} 

	let vypisJmeno = document.querySelector (".vypisJmeno");
	vypisJmeno.textContent = "Jméno uživatele: " + mail.jmeno;
	let vypisDomena = document.querySelector (".vypisDomena");
	vypisDomena.textContent = "Doména uživatele: " + mail.domena;

	console.log (mail);
}


