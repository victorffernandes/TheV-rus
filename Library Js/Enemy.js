var l = {x:[],y:[],c:[],cor:[]};

function randomRange(min, max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}
function Enemy(img,lvl)
{
	this.x = 550;
	this.w = 120;
	this.h = 120;
	this.y = 400 - this.h;
	this.img = img;
	if(lvl >= 0)
	{
		this.life = 90 + 20 * lvl;
		this.armor = 3 + lvl;
		this.atack = 7 + 2*lvl;
	} //+ 10*type;
	else if(lvl < 0)
	{
		this.life = 90;
		this.armor = 2; //+ type;
		this.atack = 7;
	}
	this.defPos = false;
	this.LifeBar = {x:540,y:this.y - 50,w:100,h:15,lp:this.life};
		
	this.drop = function(P,t)
	{
		if(P < 25)
		{
			if(t == 1)
			{
				player.inv.mp++;
			}
			
			else
			{
				player.inv.mv++;
			}
		}
	}
	
		this.randomize=function()
		{	
			enemy = new Enemy(randomRange(player.lvl-2,player.lvl+2));
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
	
	this.defense = function()
	{
		this.defPos = true;
	}
	
	this.ai = function(move)
	{
		if((this.life/this.LifeBar.lp) * 100 > 75)
		{
			if(move > 15)
			{
				return this.attack();
			}
			
			else
			{
				return this.defense();
			}
		}
		
		else if((this.life/this.LifeBar.lp) * 100 > 50)
		{
			if(move > 25)
			{
				return this.attack();
			}
			
			else
			{
				return this.defense();
			}
		}
		
		else if((this.life/this.LifeBar.lp) * 100 > 25)
		{
			if(move > 40)
			{
				return this.attack();
			}
			
			else
			{
				return this.defense();
			}
		}
		
		else
		{
			if(move > 50)
			{
				return this.attack();
			}
			
			else
			{
				return this.defense();
			}
		}
	}
	
	this.draw = function()
	{
		this.LifeBar.w = (this.life/this.LifeBar.lp) * 100;
		//drawCapsule(this.x - 30 , this.y - 70,this.lp * (this.lp/150),30,"blue",150);
		drawImage(this.img,this.x,(400 - this.img.height),this.img.width,this.img.height);
		if(this.life > 0)
		{
			drawRect(this.LifeBar.x,(400 - this.img.height) - 30 ,this.LifeBar.w,this.LifeBar.h,"red");
		}
		
		for(var i in l.x)
		{
			l.y[i] -= 1;
			if(l.y[i] < -50)
			{
				l.x.splice(0,i);
				l.y.splice(0,i);
				l.c.splice(0,i);
				l.cor.splice(0,i);
			}
			drawText(l.c[i],l.x[i] - 50,l.y[i] + 35,l.cor[i],"35px Arial");
		}
		
		//drawText(this.lp,this.x,this.y,"black","25px Arial");
	}
}