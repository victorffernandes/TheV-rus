
var l2 = {x:[],y:[],c:[],cor:[]};

function Player()
{
	this.x = 100;
	this.y = 200;
	this.w = 100;
	this.h = 200;
	this.img = sprite.pInfo;
	this.hasKey = false;
	this.inv = new Inventory();
	this.armorUp = 0;
	this.atackUp = 0;
	this.lifeUp = 0;
	this.manaUp = 0;
	this.lvl = 1;
	this.armor = 3*(this.armorUp) + 2*this.lvl + 3;
	this.atack = 5*(this.atackUp) + this.lvl + 12;
	this.life = 100 + 50*(this.lifeUp) + 20*(this.lvl - 1);
	this.mana = 30*(this.manaUp) + 10*(this.lvl) + 10;
	this.acess = [true];
	this.defPos = false;
	this.LifeBar = {x:70,y:120,w:100,h:15,lp:this.life, mp: this.mana, w2:100};
	
	this.levelUp = function()
	{
		this.lvl++;
		this.armor = 3*(this.armorUp) + 2*this.lvl + 3;
		this.atack = 5*(this.atackUp) + this.lvl + 12;
		this.life = 100 + 30*(this.lifeUp) + 20*(this.lvl - 1);
		this.mana = 30*(this.manaUp) + 10*(this.lvl) + 10;
		this.LifeBar.lp = this.life;
		this.LifeBar.mp = this.mana;
	}
	
	this.defense = function()
	{
		this.defPos = true;
	}
	
	this.pot = function(T)
	{
		if(T == "Vida")
		{
			if((this.life/this.LifeBar.lp) * 100 + (this.LifeBar.lp/100) * 30 > this.LifeBar.lp)
			{
				l2.x.push(player.x);
				l2.y.push((400 - player.img.height));
				l2.c.push("+" + (this.LifeBar.lp - this.life));
				l2.cor.push("green");
				this.life = this.LifeBar.lp;
			}
			
			else
			{
				this.life += (this.LifeBar.lp/100) * 30;
				l2.x.push(player.x);
				l2.y.push((400 - player.img.height));
				l2.c.push("+" + ((this.LifeBar.lp/100) * 30));
				l2.cor.push("green");
			}
		}
		
		else if("Mana")
		{
			if((this.mana/this.LifeBar.mp) * 100 + (this.LifeBar.mp/100) * 30 > this.LifeBar.mp)
			{
				l2.x.push(player.x);
				l2.y.push((400 - player.img.height));
				l2.c.push("+" + (this.LifeBar.mp - this.mana));
				l2.cor.push("blue");
				this.mana = this.LifeBar.mp;
			}
			
			else
			{
				this.mana += (this.LifeBar.mp/100) * 30;
				l2.x.push(player.x);
				l2.y.push((400 - player.img.height));
				l2.c.push("+" + ((this.LifeBar.mp/100) * 30));
				l2.cor.push("blue");
			}
		}
	}	
		
	this.attack = function(e)
	{
		if(e.defPos)
		{
			if(e.armor + 3< this.atack)
			{
				e.life -= (this.atack - (e.armor + 3));
				l.x.push(e.x);
				l.y.push((400 - e.img.height) );
				l.c.push("-" + (this.atack - (e.armor + 3)));
				l.cor.push("red");
			}
			e.defPos = false;
		}
		
		else if(e.armor < this.atack)
		{
			e.life -= (this.atack - e.armor);
			l.x.push(e.x);
			l.y.push((400 - e.img.height) );
			l.c.push("-" + (this.atack - (e.armor)));
			l.cor.push("red");
		}
	}
	
	this.special = function(e)
	{
		if(this.mana > 10 + 2*this.lvl)
		{
			this.mana -= (10 + 2*this.lvl);
			e.life -= 2*this.atack;
			l.x.push(e.x);
			l.y.push((400 - e.img.height) + 10);
			l.c.push("-" + (2*this.atack));
			l.cor.push("red");
		}
	}
	
	this.draw = function()
	{
		this.LifeBar.w = (this.life/this.LifeBar.lp) * 100;
		this.LifeBar.w2 = (this.mana/this.LifeBar.mp) * 100;
		//drawCapsule(this.x - 30 , this.y - 70,this.lp * (this.lp/200),30,"blue",200);
		drawImage(sprite.pInfo,this.x,(400 - this.img.height),sprite.pInfo.width,sprite.pInfo.height);
		if(this.life > 0)
		{
			drawRect(this.LifeBar.x,(400 - this.img.height) - 50,this.LifeBar.w,this.LifeBar.h,"red");
		}
		
		if(this.mana > 0)
		{
			drawRect(this.LifeBar.x,(400 - this.img.height) - 30,this.LifeBar.w2,this.LifeBar.h,"blue");
		}
		for(var i in l2.x)
		{
			l2.y[i] -= 1;
			
			if(l2.y[i] < -50)
			{
				l2.x.splice(0,i);
				l2.y.splice(0,i);
				l2.c.splice(0,i);
				l2.cor.splice(0,i);
			}
			
			drawText(l2.c[i],l2.x[i] + 80,l2.y[i],l2.cor[i],"35px Arial");
		}
		
	}
}