
function Inventory()
{
	this.x = 620;
	this.y = 445;
	this.w = 130;
	this.h = 130;
	this.pv = 5;
	this.pm = 5;
	
this.b = [];

for(var i = 0;i<2;i++)
{
	if(this.x  + 15 + (45 * i) > this.x)
	{
		this.b.push(new Button(this.x  + (i * 70),this.y ,60,60,""));
	}
}


this.update = function ()
{
	for(var i in this.b)
	{
		this.b[i].update();
		if(this.b[0].col)
		{
			action = "pv";
		}
		if(this.b[1].col)
		{
			action = "pm";
		}
	}
}

this.draw = function()
{
	drawImage(sprite.pv,this.b[0].x,this.b[0].y,this.b[0].w,this.b[0].w);
	drawImage(sprite.pm,this.b[1].x,this.b[1].y,this.b[1].w,this.b[1].w);
	drawText(this.pv,this.b[0].x,this.b[0].y + this.b[0].h,"white","Arial 20px");
	drawText(this.pm,this.b[1].x,this.b[1].y + this.b[1].h,"white","Arial 20px");
}
}

