const readline = require('readline');

var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

var starAdv = function(){

	console.log('Kolb era um bravo guerreiro Nórdico.');
	console.log('Certo dia, seu chefe pediu para Kolb matar um terrível dragão que ameaçava sua vila.');
	console.log('\"Vá através da passagem da montanha, Kolb\", disse o chefe. \"Você encontrará o dragão no outro lado!\" ');
	console.log('Kolb pega seu machado e escudo favorito e caminha até a passagem, quando ele encontra uma caverna fria, uma caverna ventosa e uma trilha estreita. Então Kolb...');

	ask = rl.question('Entra na caverna fria (1) \n\ Entra na caverna ventosa (2) \n\ Sobe pela trilha (3) \n\ ', (answer) => {
		var victory = '';

		if (answer == 1) {
			victory = fronzenCave();
		} else if (answer == 2) {
			victory = windyCave();
		} else {
		 	victory = narrowTrail();
		}

		console.log(victory);
		ask = rl.question('Deseja repetir a aventura (y/n)?', (answer) => {
			if (answer == 'y') {
				starAdv();
			} else {
				console.log('aperte Ctrl+C');
			}
		});
	});
}

var windyCave = function() {
	return 'Um forte sopro vindo do topo da montanha apaga a tocha de Kolb que atordoado pela violência do vento cai num fosso onde parte sua cabeça no chão e ali morre \n\ FIM';
}

var fronzenCave = function() {
	console.log('Kolb caminha adentro da caverna congelante, mas seu sangue nórdico o mantém aquecido.');
	console.log('Um túnel fedorento está a sua frente, o vento uiva através de outro à sua esquerda. Havia uma escada por perto também.');

	ask2 = rl.question('Ir pelo túnel fedorento(1) \n\ Ir pelo túnel que o vento úiva(2) \n\ Subir a escada(3) \n\ ', (answer) => {

		var chosen;
		if (answer == 1) {
			
		} else if (2) {
			chosen = windyCave();
		} else {

		}

		return chosen;
	});

}

starAdv();