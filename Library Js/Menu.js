
function Menu()
{
	this.b = [];
	this.b.push(new Button(255,205,170,70,""));
	this.b.push(new Button(255,310,170,70,""));
	this.b.push(new Button(255,420,170,70,""));

this.draw=function()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawImage(sprite.menu,0,0,sprite.menu.width,sprite.menu.height);
}

this.update = function()
{
	for(var i in this.b)
	{
		this.b[i].update();
	}
	if(this.b[0].col)
	{
		manager.go(new Map());
		m.p = false;
	}
	if(this.b[1].col)
	{
		manager.go(new Instrucao());
		m.p = false;
	}
	
	if(this.b[2].col)
	{
		manager.go(new Credito());
		m.p = false;
	}
	
	
}
}
manager.go(new Menu());

function Instrucao()
{
	this.update = function()
	{
		if(m.p)
		{
			manager.go(new Menu());
			m.p = false;
		}
	}
	
	this.draw = function()
	{
		drawImage(sprite.tutorial,0,0,sprite.tutorial.width,sprite.tutorial.height)
	}
}

function Credito()
{
	this.y = 0
	this.update = function()
	{
		if(m.p)
		{
			manager.go(new Menu());
			m.p = false;
		}
		
		this.y -= 0.5
		
		if(this.y + sprite.creditos.img.height <= 0)
		{
			manager.go(new Menu());
		}
	}

	this.draw = function()
	{
		drawImage(sprite.creditos.bkg,0,0,800,600);
		drawImage(sprite.creditos.img,0,this.y,800,2676);
	}
}

