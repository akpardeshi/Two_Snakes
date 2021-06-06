function C_StrokeCell ( l_PosX, l_PosY, l_Width, l_Height, l_StrokeWidth, l_Color )
{
	this.PosX = l_PosX ;
	this.PosY = l_PosY ;
	this.Width = l_Width ;
	this.Height = l_Height ;
	this.Color = l_Color ;
	this.BoolIsActive = true ;
	this.StrokeWidth = l_StrokeWidth ;
	
	this.M_StrokeSquare = function ( l_Ctx )
	{
		if ( this.BoolIsActive )
		{
			l_Ctx.lineWidth = this.StrokeWidth ;
			l_Ctx.strokeRect ( this.PosX, this.PosY, this.Width, this.Height ) ;
			l_Ctx.stroke() ;
		}
	}
}