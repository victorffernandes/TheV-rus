function Fade(c,color,time)
{
	this.canvas = c;
	this.color = c;
	this.timer = time / 500;

	this.newCanvas = document.createElement('canvas');
	this.newCanvas.id = 'fade';
	this.newCanvas.className = 'canvas';

	this.newCanvas.setAttribute('width', this.canvas.width + 5);
	this.newCanvas.setAttribute('height', this.canvas.height + 5);

	//main.appendChild(this.newCanvas);

	this.ctx = this.newCanvas.getContext('2d');

	this.update = function(){
	this.ctx.clearRect(0,0,this.newCanvas.width,this.newCanvas.height);
	if(this.ctx.globalAlpha > 0){
	this.ctx.globalAlpha -= this.timer;
	}
	if(this.ctx.globalAlpha < this.timer){this.ctx.globalAlpha = 0}
	this.ctx.fillStyle = this.color;
	this.ctx.fillRect(0,0,this.newCanvas.width,this.newCanvas.height);
	}

	this.begin=function()
	{
		this.ctx.globalAlpha = 1;
	}
}