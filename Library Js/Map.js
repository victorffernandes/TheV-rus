function Map()
{
this.b = [];
this.b.push(new Button(173,50,140,25,"Monera"));
this.b.push(new Button(545,90,75,65,"Protista"));
this.b.push(new Button(377,234,115,25,"Fungi"));
this.b.push(new Button(370,77,135,25,"Plantae"));
this.b.push(new Button(273,274,80,74,"Animalia"));
this.virus = new Button((canvas.width - 160),300,80,74,"Virus");
this.virus.avaible = false;
this.voltar = (new Button(0,0,120,65,"Voltar"));



this.update = function()
{
	if( !KD[4].kingC.working )
	{
		this.virus.avaible = true;
	}


	this.voltar.update();
	if(this.virus.avaible)
	{
		this.virus.update();
	}
	if(this.voltar.col)
	{
		manager.go(new Menu());
		manager.save();
	}
	for(var i in this.b)
	{
		this.b[i].update();
	}
	
	if(this.virus.col)
	{
		manager.go(cutF[0]);
	}
	
	for(var i in this.b){
	if(this.b[i].col && player.acess[i])
	{
		manager.go(cutK[i]);
	}
	
	}
	
}


this.draw = function()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawImage(sprite.map,0,0,canvas.width,canvas.height);
	ctx.font = "14px Liddie";
	ctx.fillStyle = "White";
	wrapText(t[5],15,480,780,25);
	this.voltar.draw();
	if(this.virus.avaible)
	{
		drawImage(sprite.virus,this.virus.x,this.virus.y,this.virus.w,this.virus.h);
	}
}

}