
var texts = ["Texto do Inicio do jogo",
 " Me disseram que existe um novo tipo de vírus que anda atacando algumas bactérias. Recolhi algumas amostras de bactérias infectadas para descobrir que tipo de vírus é esse e se ele é nocivo. O que posso dizer até agora é que as bactérias tem aumentado de tamanho significativamente. O que é isso!?? As bactérias estão… do meu TAMANHO!???", 
 "Agora que resolvi o problema das bactérias descobri que o vírus está infectando protozoários também, verei se a vacina que desenvolvi para eliminar o vírus das bactérias funciona também nos protozoários, caso contrário terei que fazer mais pesquisas. Hum… Parece que o efeito do vírus é o mesmo, fazendo com que os protozoários aumentem de tamanho de maneira completamente anormal e sem explicação, além de lhes conceder certa coinsciência do mundo ao redor. Infelizmente também parece que o vírus sofreu algumas mutações e a vacina que criei não funciona neles. Terei que desenvolver outra vacina. Para isso terei que coletar mais alguns espécimes.",
 "Parece que o vírus sofre mutações tão rápido quanto criamos uma vacina, e segue certa ordem na hora de mudar de ‘alvo’, se minha intuição estiver certa depois deste seu alvo será o Reino Plantae. Agora ele infectou os fungos causando os mesmos efeitos que causou as bactérias e aos protozoários. Enfim… Tenho que continuar o trabalho e coletar mais espécimes para criar a vacina.",
 "O vírus continua a sofrer mutações, porém parece que um de seus sintomas, o aumento de tamanho, não ocorre com tanta frequência, parece que isso só ocorre em seres muito menores que meio metro. Também me parece que o vírus se torna cada vez mais difícil de se combater, pode ser algo da minha mente, ou não. Sinceramente espero que seja apenas fruto da  minha mente, não sei o que poderá ocorrer se ele conseguir atacar o reino Animalia. De qualquer forma, tenho que encontrar algumas plantas infectadas.",
 "O vírus chegou ao reino animal e temos que detê-lo agora, antes que ele consiga se espalhar para fora desta ilha. O vírus tem nos causado bastantes problemas, pois seu sintoma mais perigoso até agora foi a obstrução do transporte de informações entre as células do ser ocasionando na morte do mesmo pois não conseguia distribuir os nutrientes pelo corpo. Este sintoma só ocorreu em plantas que ficaram mais de uma semana hospedando o vírus. Nos outros Reinos (monera, fungi e protista) este sintoma não foi indentificado. Não sei se este sintoma afetará também os animais. Continuarei capturando alguns espécimes infectados para estudos.",
 "O vírus está tentando escapar da ilha! Consegui desenvolver uma vacina forte suficiente para pará-lo. Preciso vacina-lo antes que infecte outros lugares.",
 "Final"];

function Cutscene(a,where)
{
this.working = true;
this.dest = where;
this.mainText = a;
this.scroll = {x:0,y:0,w:canvas.width,h:canvas.height}

this.speedy = 3;

this.tx = 50;
this.ty = canvas.height;
this.skip = (new Button(430,540,95,35,"Skip"));

this.draw = function()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawImage(sprite.cut,0,0,canvas.width,canvas.height);
	ctx.font = "16px Liddie";
	wrapText(this.mainText,this.tx ,  this.ty , 480, 30);
	//this.skip.draw();
}


this.update= function ()
{
	if(!this.working)
	{
		manager.go(this.dest);
	}
	if(this.ty > 80)
	{
		this.ty -= this.speedy;
	}
	this.skip.update();
	if(this.skip.col )
	{
		manager.save();
		manager.go(this.dest);
		this.working = false;
	}
}
}
var cutK =  [];
var cutF = [new Cutscene(texts[6],finalFase),new Cutscene(texts[7],new Menu())]
for(var i = 0; i < KD.length ; i ++)
{
	cutK.push(new Cutscene(texts[i+1],KD[i]));
}

