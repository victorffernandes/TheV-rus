function Load(){

this.b = [];
this.b.push(new Button(280,100,100,40,"Slot1"));
this.b.push(new Button(280,250,100,40,"Slot2"));
this.b.push(new Button(280,400,100,40,"Slot3"));

this.draw=function()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}

this.update=function()
{

	for(var i in this.b)
	{
		this.b[i].update();
	}
	if(this.b[0].col)
	{
		if(localStorage['slot1'] != (undefined || null))
		{
			alert();
			var saved = JSON.parse(localStorage['slot1']);
			
			for(var i in KD)
			{
				for(var n in KD[i])
				{
					var b = [];
					if(typeof(KD[i][n]) == typeof(function(){}))
					{
						
					}
					else if(KD[i][n] instanceof Array)
					{
						for(var j in KD[i][n])
						{
							if(KD[i][n][j].constructor.name == 'Button')
							{
								
							}							
						}
						console.log(KD[i][n]);
					}
				}
			}
			
			manager.go(new Map());
		}
	}
	
	if(this.b[1].col)
	{
		if(localStorage['slot2'] != (undefined || null))
		{
			KD = JSON.parse(localStorage['slot2'])
			manager.go(new Map());
		}
	}
	
	if(this.b[2].col)
	{
		if(localStorage['slot3'] != (undefined || null))
		{
			KD = JSON.parse(localStorage['slot3'])
			manager.go(new Map());
		}
	}

}


}