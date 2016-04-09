
function N()
{
	player.acess.push(true);
}

function End(img)
{
	this.timer = 0;
	this.img = img;
	this.draw=function()
	{
		ctx.drawImage(this.img,0,0,canvas.width,canvas.height);
	}
	this.update = function()
	{
		this.timer ++;
		if(this.timer == 250)
		{
			location.reload();
		}
	}
}


function Room(img,a)
{ 
this.turn = "Player Turn";
this.hasEnemy = true;//( (Math.floor(Math.random()*21) + 1) >= 10) ? this.hasEnemy = true : this.hasEnemy = false;
this.hasKey = false;
this.img = img;
this.working = true;
this.timer = 0;
this.enemy = a;

this.bx = 201;
this.by = 420;
this.confirm = new Button(55,450,100,100,"Confirmar");

this.b = [];
this.b.push(new Button(this.bx + 205,this.by,170,55,"Ataques"));
this.b.push(new Button(this.bx,this.by + 90,170,55,"Defender"));
this.b.push(new Button(this.bx,this.by,170,55,"Fugir"));
this.b.push(new Button(this.bx + 205,this.by + 90,170,55,"Itens"));

this.a = [];
this.a.push(new Button(620,445,60,60,"AtakN"));
this.a.push(new Button(690,445,60,60,"AtakM"));

this.p = [];
this.p.push(new Button(620,445,60,60,"PV"));
this.p.push(new Button(690,445,60,60,"PM"));
	this.draw=function()
	{
		ctx.clearRect(0,0,canvas.width,canvas.height);
		drawRect(-20,-20,2134,3123,"black");
		drawImage(this.img,0,0,canvas.width,canvas.height - 200)
		
		player.draw();
		this.enemy.draw();
		/*Altas Interfaces*/
		drawImage(sprite.barra,0,(canvas.height - 200),canvas.width,200,"red");
		this.confirm.draw();
		//if(this.turn == "Player Turn"){drawText(action,70,520,"black","17px Liddie");}
		
		/*----------------*/
	//Caso ataques
		if(attackDisplay)
		{
			for(var i in this.a)
			{
				drawImage(sprite.a1,this.a[0].x,this.a[0].y,this.a[0].w,this.a[0].h);
				drawImage(sprite.a2,this.a[1].x,this.a[1].y,this.a[1].w,this.a[1].h);
			}
			strokeRect(this.b[0].x,this.b[0].y,this.b[0].w,this.b[0].h,"black");
		}
	//----------------
	//Caso inventário
		if(invDisplay)
		{
			player.inv.draw();
			player.inv.update();
			strokeRect(this.b[3].x,this.b[3].y,this.b[3].w,this.b[3].h,"black");
		}
		
		for(var i in this.b)
			{
				//this.b[i].draw();
			}
	//---------------
	//switch lindão
	switch(action)
	{
		case "defender":
		strokeRect(this.b[1].x,this.b[1].y,this.b[1].w,this.b[1].h,"black");
		if(this.turn == "Player Turn"){drawText("Defesa",70,520,"black","14px Liddie");}
		break;
		case "fugir":
		strokeRect(this.b[2].x,this.b[2].y,this.b[2].w,this.b[2].h,"black");
		if(this.turn == "Player Turn"){drawText("Fuga",70,520,"black","14px Liddie");}
		break;
		case "ataqueN":
		if(attackDisplay)
		{
			strokeRect(this.a[0].x,this.a[0].y,this.a[0].w,this.a[0].h,"black");
		}
		if(this.turn == "Player Turn"){drawText("Vacina Normal",60,520,"black","14px Liddie");}
		break;
		case "ataqueS":
		if(attackDisplay)
		{
			strokeRect(this.a[1].x,this.a[1].y,this.a[1].w,this.a[1].h,"black");
		}
		if(this.turn == "Player Turn"){drawText("Vacina Especial",60,520,"black","14px Liddie");}
		break;
		case "pv":
		if(invDisplay)
		{
			strokeRect(this.p[0].x,this.p[0].y,this.p[0].w,this.p[0].h,"black");
		}
		if(this.turn == "Player Turn"){drawText("Energizador Vida",55,520,"black","14px Liddie");}
		break;
		case "pm":
		if(invDisplay)
		{
			strokeRect(this.p[1].x,this.p[1].y,this.p[1].w,this.p[1].h,"black");
		}
		if(this.turn == "Player Turn"){drawText("Energizador Mana",50,520,"black","14px Liddie");}
		break;
	}
	}
	
	this.update=function()
	{
	
	//Player Confirmar e talz.....	
	this.confirm.update();
	if(this.confirm.col)
		{
			switch(action)
			{
				case "defender":
				player.defense();
				action = "";
				this.turn = "Enemy Turn";
				break;
				case "fugir":
				manager.restore();
				action = "";
				this.turn = "Enemy Turn";
				break;
				case "ataqueN":
				player.attack(this.enemy);
				action = "";
				this.turn = "Enemy Turn";
				break;
				case "ataqueS":
				if(player.mana > 10 + 2*player.lvl)
				{
					player.special(this.enemy);
					action = "";
					this.turn = "Enemy Turn";
				}else{
					this.confirm.name = "Sem Mana!";
				}
				break;
				case "pv":
				if(player.inv.pv > 0)
				{
					player.pot("Vida")
					action = "";
					this.turn = "Enemy Turn";
					player.inv.pv --;
				}
				break;
				case "pm":
				if(player.inv.pm > 0)
				{
					player.pot("Mana");
					action = "";
					this.turn = "Enemy Turn";
					player.inv.pm --;
				}
				break;
			}
		}
		if(this.turn == "Enemy Turn")
		{
			this.confirm.name = "Turno Inimigo.";
		}
		else if(action !== "")
		{
			this.confirm.name = "Deseja usar?"
		}
		else{
			this.confirm.name = "Seu Turno.";
		}
	//---------------------------
		for(var i in this.b)
		{
			this.b[i].update();
		}
//Botoes	
	if(this.b[0].col )
	{
		attackDisplay = !(attackDisplay);
		invDisplay = false;
		action = "";
	}
	if(this.b[1].col )
	{
		action = "defender";
		invDisplay = false;
		attackDisplay = false;
	}
	if(this.b[2].col)
	{
		action = "fugir"
		invDisplay = false;
		attackDisplay = false;
	}
	if(this.b[3].col )
	{
		invDisplay = !(invDisplay);
		attackDisplay = false;
		action = "";
	}
//-----------Ataques
	if(attackDisplay)
	{
		for(var i in this.a)
		{
			this.a[i].update();
		}
		if(this.a[0].col)
		{
			action = "ataqueN";
		}
		if(this.a[1].col)
		{
			action = "ataqueS";
		}
	}
	
	
//---------------------
//Batalha doidona
	if(this.hasEnemy)
	{
		if(this.turn == "Player Turn")
		{
			
		}
		else if(this.turn == "Enemy Turn")
		{
			if(this.timer == 60)
			{
				this.enemy.ai(randomRange(1,100));
			}
			this.timer ++;
			if(this.timer > 120)
			{
				this.turn = "Player Turn";
				this.timer = 0;
			}
		}
		//----------------------------------------------
		//----Caso alguem morra
		if(this.enemy.life <= 0)
		{
			player.levelUp();
			this.enemy.drop(randomRange(1,100),randomRange(0,1));
			l = {x:[],y:[],c:[],cor:[]};
			l2 = {x:[],y:[],c:[],cor:[]};
			if(this.hasKey)
			{
				player.hasKey = true;
			}
			this.working = false;
			manager.restore();
			if(this.rada != (undefined || null))
			{
				this.rada.avaible = false;
			}
			else
			{
				manager.go(cutF[1]);
			}
			
			if(this.enemy.img == sprite.virus)
			{
				manager.go(new End(sprite.tg));
			}
			
		}
		if(player.life <= 0)
		{
			manager.go(new End(sprite.tp));
		}
	}
	else{
	if(confirm( 'Nenhum inimigo aqui :(' ))
	{
		if(this.hasKey)
		{
			alert('Achei uma Chave');
			player.hasKey = true;
			manager.restore();
		}
		else{
		manager.restore();
		}
	}
	else{
		if(this.hasKey)
		{
			alert('Achei uma Chave');
			player.hasKey = true;
			manager.restore();
		}
		else{
		manager.restore();
		}
	}
	
	
	}
//--------------------------------------------
	}
}