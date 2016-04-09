
function wrapText( text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        ctx.fillText(line, x, y);
      }
//randomRange(player.lvl,player.lvl+2)
function line(x1,y1,x2,y2)
{
ctx.strokeStyle = "#00ff00";
ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.stroke();
}

function checkCollision(a,b) 
	{
		return !(
			((a.y+a.height) < (b.y)) ||
			(a.y > (b.y+b.height)) ||
			((a.x+a.width) < b.x) ||
			(a.x > (b.x+b.width))
		);
	}

function drawRect(x,y,w,h,color)
{
	ctx.fillStyle = color;
	ctx.fillRect(x,y,w,h);
}

function drawCircle(x,y,r,color,p1,p2)
{
	ctx.fillStyle=color;
	ctx.beginPath();
	ctx.arc(x,y,r,p1,p2);
	ctx.fill();
}

function strokeRect(x,y,w,h,color)
{
	ctx.strokeStyle = color;
	ctx.strokeRect(x,y,w,h);
	ctx.stroke();
}


function strokeCircle(x,y,r,color)
{
	ctx.strokeStyle=color;
	ctx.beginPath();
	ctx.arc(x,y,r,Math.PI,2* Math.PI);
	ctx.stroke();
}

	function drawText (text,x,y,c,font)
{
	ctx.fillStyle = c;
	ctx.font = font;
	ctx.fillText(text,x,y);
}

function drawImage(img,x,y,w,h)
{
ctx.drawImage(img, x, y, w, h);
}

function drawCapsule(x,y,h,color,startlife,actuallife){
	if(startlife == actuallife)
	{
		drawRect(x,y,100,h,"black");
	}
	else if (startlife > actuallife){
		var percent = startlife / 100;
		var pl = percent * actuallife;
		drawRect(x,y,pl,h,"black")
	}
	
}
