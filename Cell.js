// this is a cell class
// its only job is to draw a cell
// it is designed to be subclass of the bigger class like player spaceship, enemy spaceship or bullet

function C_Cell(l_PosX, l_PosY, l_SizeX, l_SizeY, l_Color )
{
  this.PosX = l_PosX ;
  this.PosY = l_PosY ;
  this.SizeX = l_SizeX ;
  this.SizeY = l_SizeY ;

  this.Color = l_Color ;

  // draw the cell
  this.M_DrawCell = function ( l_Ctx )
  {
	l_Ctx.fillStyle = this.Color ;
    l_Ctx.fillRect (this.PosX, this.PosY, this.SizeX, this.SizeY) ;
	l_Ctx.strokeStyle = "White" ;
	l_Ctx.lineWidth = 2 ;
	l_Ctx.strokeRect (this.PosX, this.PosY, this.SizeX, this.SizeY) ;
  }
}
