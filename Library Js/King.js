function King(img,lvl)
{
this.id = "K";
this.img = img;
this.lvl = player.lvl + 2;
this.x = 540;
this.y = 190;
this.w = 150;
this.h = 210;
this.type = "boss"

this.life = 120 + 30 * this.lvl;
this.armor = 3 + 1.5*this.lvl;
this.atack = 7 + 2*this.lvl;
this.defPos = false;
this.LifeBar = {x:540,y:this.y - 50,w:100,h:15,lp:this.life};

this.atualizeStatus = function()
{
	this.lvl = player.lvl + 2;
	this.attackLevel = this.lvl * 3;
}

this.drop = function(P,t)
{
	player.acess.push(true);
	
	if(P < 75)
	{
		player.inv.mp+= 3;
		player.inv.mv+= 3;
	}
}

this.defense = function()
{
	this.defPos = true;
}

this.attack = function()
{
	if(player.defPos)
	{
		if(this.atack > player.armor + 3 + player.armorUp)
		{
			player.life -= (this.atack - (player.armor + 3 + player.armorUp));
			l2.x.push(player.x);
			l2.y.push((400 - player.img.height));
			l2.c.push("-" + (this.atack - (player.armor + 3 + player.armorUp)));
			l2.cor.push("red");
		}
		player.defPos = false;
	}
	
	else if(this.atack > player.armor)
	{
		player.life -= this.atack - player.armor; 
		l2.x.push(player.x);
		l2.y.push((400 - player.img.height));
		l2.c.push("-" + (this.atack - player.armor));
		l2.cor.push("red");
	}
}

this.ability = function()
{
	this.life += (this.LifeBar.lp/100)*15;
}

this.specialAttack=function()
{
	if(player.defPos)
	{
		if(2*this.atack > player.armor + 3 + player.armorUp)
		{
			player.life -= (2*this.atack - (player.armor + 3 + player.armorUp));
			l2.x.push(player.x);
			l2.y.push((400 - player.img.height));
			l2.c.push("-" + (this.atack - (player.armor + 3 + player.armorUp)));
			l2.cor.push("red");
		}
		player.defPos = false;
	}
	
	else if(2*this.atack > player.armor)
	{
		player.life -= this.atack - player.armor; 
		l2.x.push(player.x);
		l2.y.push((400 - player.img.height));
		l2.c.push("-" + (this.atack - player.armor));
		l2.cor.push("red");
	}
}

this.ai = function()
{
	var move = randomRange(1,100);
	if((this.life/this.LifeBar.lp) * 100 > 75)
	{
		if(move < 15)
		{
			return this.defense();
		}
		
		else if(move < 85)
		{
			return this.attack();
		}
		
		else
		{
			return this.specialAttack();
		}
	}
	
	else if((this.life/this.LifeBar.lp) * 100 > 50)
	{
		if(move < 25)
		{
			return this.defense();
		}
		
		else if(move < 80)
		{
			return this.attack();
		}
		
		else
		{
			return this.specialAttack();
		}
	}
	
	else if((this.life/this.LifeBar.lp) * 100 > 25)
	{
		if(move < 30)
		{
			return this.defense();
		}
		
		else if(move < 75)
		{
			return this.attack();
		}
		
		else
		{
			return this.specialAttack();
		}
	}
	
	else
	{
		if(move < 30)
		{
			return this.defense();
		}
		
		else if(move < 70)
		{
			return this.attack();
		}
		
		else if(move < 90)
		{
			return this.specialAttack();
		}
		
		else
		{
			return this.ability();
		}
	}
}

this.draw = function()
{	
	this.LifeBar.w = (this.life/this.LifeBar.lp) * 100;
	drawImage(this.img,(canvas.width - this.img.width) - 45,(400 - this.img.height) - 100,this.img.width,this.img.height);
	if(this.life > 0)
	{
		drawRect((canvas.width - this.img.width) + 5 ,(400 - this.img.height) - 130 ,this.LifeBar.w,this.LifeBar.h,"red");
	}
	
	for(var i in l.x)
	{
		l.y[i] -= 1;
		drawText(l.c[i],l.x[i] - 50,l.y[i] + 35,l.cor[i],"35px Arial");
	}
	
}

}