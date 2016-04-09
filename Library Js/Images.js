function Images()
{
this.menu = new Image();
this.menu.src = 'PNG/MENU.png';

this.creditos = {bkg: new Image(),img: new Image()};
this.creditos.img.src = 'PNG/CREDITOS.png';
this.creditos.bkg.src = 'PNG/FUNDO DOS CREDITOS.png';

this.tutorial = new Image();
this.tutorial.src = 'PNG/INSTRUCOES.png';

this.map = new Image();
this.map.src = "PNG/Mapa_Biologia.png";

this.player = new Image();
this.player.src = "";

this.animalKing = new Image();
this.animalKing.src = "PNG/AREI.png";

this.amebaKing = new Image();
this.amebaKing.src = "PNG/Ameba.png";

this.cogumeloKing = new Image();
this.cogumeloKing.src = "PNG/Cogumelo.png";

this.coqueiroKing = new Image();
this.coqueiroKing.src = "PNG/Coqueiro.png";

this.protozoarioKing = new Image();
this.protozoarioKing.src = "PNG/Protozoario.png";

this.virus = new Image();
this.virus.src = "PNG/Virus_Malvadao.png";

this.animalia = new Image();
this.animalia.src = "PNG/Reino_Animalia.png";


this.fungi = new Image();
this.fungi.src = "PNG/Reino_Fungi.png";


this.monera = new Image();
this.monera.src = "PNG/Reino_Monera.png";


this.plantae = new Image();
this.plantae.src = "PNG/Reino_Plantae.png";


this.protista = new Image();
this.protista.src = "PNG/Reino_Protista.png";

this.pv = new Image();
this.pv.src = "PNG/pv.png";

this.pm = new Image();
this.pm.src = "PNG/pm.png";

this.tick = new Image();
this.tick.src = "PNG/tick.png";


this.pInfo = new Image();
this.pInfo.src = "PNG/personagem.png";
this.barra = new Image();
this.barra.src = "PNG/barrinha.png";

this.animais = [];
this.plantas = [];
this.bacterias = [];
this.proto = [];
this.fungos = [];

this.a1 = new Image();
this.a1.src = "PNG/s1.png";


this.a2 = new Image();
this.a2.src = "PNG/s2.png"

for(var i = 1; i < 4;i++)
{
	this.animais[i-1] = new Image();
	this.animais[i-1].src = "PNG/A"+i+".png";
	this.plantas[i-1] = new Image();
	this.plantas[i-1].src = "PNG/PL"+i+".png";
	this.bacterias[i-1] = new Image();
	this.bacterias[i-1].src = "PNG/B"+i+".png";
	this.proto[i-1] = new Image();
	this.proto[i-1].src = "PNG/P"+i+".png";
	this.fungos[i-1] = new Image();
	this.fungos[i-1].src = "PNG/F"+i+".png";
}
this.room = [];
for(var i = 1; i < 8;i++)
{
	this.room[i-1] = new Image();
	this.room[i-1].src ="PNG/sala"+i+".jpg";
}
this.cut = new Image();
this.cut.src = "PNG/textomedica.jpg";

this.tg = new Image();
this.tg.src = "PNG/Voce_ganhou.png";

this.tp = new Image();
this.tp.src = "PNG/Voce_perdeu.png";

}