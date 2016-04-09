var m = {x:0,y:0,p:false,w:0,h:0}
var _mouseMove = function(e)
	{ 
		m.x = (e.x - 15) - canvas.offsetLeft;
		m.y = (e.y - 15) - canvas.offsetTop;
	}
	var _mouseUp = function(e)
	{
		m.p = false;
	}
		var _mouseDown = function(e)
	{
		m.p = true;
	}	
	
	document.addEventListener("mousemove", _mouseMove, false);
	document.addEventListener("mouseup",   _mouseUp,   false);
	document.addEventListener("mousedown", _mouseDown, false);


function Button(x,y,w,h,name)
{
this.x = x;
this.y = y;
this.w = w;
this.w = w;
this.h = h;
this.col = false;
this.avaible = true;
this.name = name;

	this.draw = function()
	{
		if(this.avaible)
		{
			//drawRect(this.x,this.y,this.w,this.h,"yellow");
			drawText(this.name,this.x + (this.w/8),this.y + (this.h/3),"black","14px Liddie");
		}
	}
	
	this.update = function()
	{
		if(this.x < m.x && this.x + this.w > m.x && this.y < m.y && this.y + this.h > m.y && m.p && this.avaible) 
		{
			m.p = false;
			this.col = true;
		}else 
		{
			this.col = false;
		}
	}

}