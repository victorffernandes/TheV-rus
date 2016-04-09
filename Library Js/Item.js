function Item(a)
{
/*
As strings q podem ser usadas de argumento são 
1 - "Weapon"
2 - "Armor"
3 - "POTION" - Pode ser LARGE , SMALL , MEDIUM
4 - "Poison"


*/
this.type = a;

	switch (this.type)
	{
		case "PV":
		this.effect = function()
		{
			player.lp += 100;
		}
		this.img = sprite.pv;
		break;
		case "PM":
		this.effect = function()
		{
			player.lp += 60;
		}
		this.img = sprite.pm;
		break;
	}
}