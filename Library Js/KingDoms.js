
var t = ["O reino Monera é composto por organismos unicelulares e procariontes. Ele é composto principalmente por bactérias e algas. Tome cuidado, eles podem não parecer mas são muito ofensivos. Boa sorte ao tentar vacina-los!",
"Os protozoários são seres unicelulares e eucariontes. Eles ainda podem viver em colônias, sozinhos ou parasitando. Podem ser encontrados em água doce, salgada, em terras úmidas ou ainda dentro de outros seres. Seu modo de vida é livre, mas alguns protozoários são parasitas, e podem causar doenças ao homem."
,
"Os fungos apresentam grande variedade de modos de vida. Podem viver obtendo seus alimentos decompondo organismos mortos; como parasitas, prejudicando o parasitado ou podendo estabelecer associações mutualísticas com outros organismos, em que ambos se beneficiam. Existem alguns grupos de fungos considerados predadores que capturam pequenos animais e deles se alimentam."
,
"Os organismos do Reino Plantae são multicelulares, com células eucarióticas. São autossuficientes, ou seja, produzem o próprio alimento através da fotossíntese, sendo assim chamados de autótrofos. Todas as células vegetais possuem celulose em sua parede celular, vacúolos e cloroplastos em seu interior."
,
"O Reino Animalia é o mais conhecido na ilha e é definido segundo características comuns a todos os animais: organismos eucariontes, multicelulares, heterotróficos, que obtêm seu alimento por ingestão de nutrientes do meio."
,
"A ilha de Verasul é admirada não só pela sua enorme diversidade de seres vivos, mas também por suas maravilhosas paisagens naturais. Água cristalina, dunas e densas florestas são algumas características  que destacam a ilha. Há algum tempo, infelizmente, ela tem tornado-se referência de doença, tristeza e horror. O ataque de um vírus a população local mudou a ilha completamente e a mesma, agora, é oposto do que sempre foi."
]
function AEnemy(img)
{
	var b = (Math.floor(Math.random()*2)+1);
	return new Enemy(sprite[img][(Math.floor(Math.random()*3))] , randomRange(player.lvl,player.lvl+2));
}

function KingDom(back,a,b,c,d,f,k,kingImg,arrayEnemyImages,room,textos)
{
this.once = false;
this.eneImg = arrayEnemyImages;
this.back = back;
this.roomImg = room;
this.text = textos;

this.b = [];
this.b.push(a);
this.b.push(b);
this.b.push(c);
this.b.push(d);
this.b.push(f);
this.castle = k;
this.voltar = (new Button(0,0,120,65,"Voltar"));

this.room = [new Room(room, AEnemy(this.eneImg)),new Room(room, AEnemy(this.eneImg)),new Room(room, AEnemy(this.eneImg)),new Room(room, AEnemy(this.eneImg)),new Room(room, AEnemy(this.eneImg))];
this.kingC = new Room( room , new King(kingImg,player.lvl + 5) );
this.kingC.hasEnemy = true;
this.random = Math.floor(Math.random()*4);

this.room[this.random].hasKey = true;

this.update = function()
{
this.voltar.update();
this.castle.update();
	if(this.castle.col && player.hasKey)
	{
		manager.save();
		manager.go(this.kingC);
		this.kingC.rada = this.castle;
	}
	if(this.voltar.col)
	{
		manager.go(new Map());
	}
	for(var i in this.b)
	{
		this.b[i].update();
		if(this.b[i].col )
		{
			manager.save();
			manager.go(this.room[i]);
			this.room[i].rada = this.b[i];
		}
	}
}

	this.draw = function()
	{
		ctx.clearRect(0,0,canvas.width,canvas.height);
		drawImage(this.back,0,0,canvas.width,canvas.height);
		this.voltar.draw();
		for(var i in this.b)
		{
			if(!this.b[i].avaible)
			{
				drawImage(sprite.tick,this.b[i].x ,this.b[i].y,60,60);
			}
		}
		if(!this.castle.avaible)
		{
			drawImage(sprite.tick,this.castle.x,this.castle.y,this.castle.w,this.castle.h);
		}
		ctx.font = "14px Liddie";
		ctx.fillStyle = "White";
		wrapText(this.text,20 , 480 , 780 , 25);
	}
}
//var example = new KingDom('rada');	
var KD = [
new KingDom(sprite.monera,new Button(101,97,75,66,""),new Button(215,62,57,54,""),new Button(340,104,90,71,""),new Button(463,193,68,66,""),new Button(482,90,66,56,""),new Button(566,227,108,119,""),sprite.amebaKing,"bacterias",sprite.room[3],t[0])
,new KingDom(sprite.protista,new Button(229,59,62,54,""),new Button(307,65,65,57,""),new Button(266,185,55,54,""),new Button(489,220,73,64,""),new Button(567,292,51,48,""),new Button(367,157,109,115,""),sprite.protozoarioKing,"proto",sprite.room[1],t[1])
,new KingDom(sprite.fungi,new Button(185,116,45,58,""),new Button(306,124,68,78,""),new Button(400,258,51,79,""),new Button(591,207,53,70,""),new Button(654,304,44,71,""),new Button(438,143,106,117,""),sprite.cogumeloKing,"fungos",sprite.room[2],t[2]),
new KingDom(sprite.plantae,new Button(181,57,58,56,""),new Button(349,237,60,57,""),new Button(455,170,70,57,""),new Button(570,107,57,56,""),new Button(566,280,65,53,""),new Button(304,72,108,111,""),sprite.coqueiroKing,"plantas",sprite.room[3],t[3]),
new KingDom(sprite.animalia,new Button(369,49,86,35,""),new Button(433,137,108,44,""),new Button(589,158,77,29,""),new Button(184,338,76,29,""),new Button(335,375,101,32,""),new Button(383,202,99,113,""),sprite.animalKing,"animais",sprite.room[1],t[4])];

var finalFase = new Room(sprite.room[6] ,new King(sprite.virus,10));

