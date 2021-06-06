function C_Text ( l_PosX , l_PosY , l_Color , l_Text, l_FontSize )
{
	this.PosX = l_PosX ;
	this.PosY = l_PosY ; 
	this.Color = l_Color ;
	this.Text = l_Text ;
	this.FontSize = l_FontSize ;
	this.Font = "bold " + this.FontSize + " system-ui";
	this.BoolIsActive = false ;

	this.M_DrawText = function ( l_Ctx )
	{
		if ( this.BoolIsActive )
		{
			l_Ctx.fillStyle = this.Color ;
			l_Ctx.font = this.Font;
			l_Ctx.fillText( this.Text , this.PosX , this.PosY );
		}
	}
	
	this.M_UpdateText = function ( l_Score )
	{
		this.Text = l_Score ;
	}
}