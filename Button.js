function C_Button( l_Name, l_PosX, l_PosY, l_Width, l_Height, l_ButtonColor, l_TextColor, l_FontSize )
{
	this.Name = l_Name;
	this.PosX = l_PosX;
	this.PosY = l_PosY;
	this.ButtonColor = l_ButtonColor;
	this.TextColor = l_TextColor;
	this.Width = l_Width; 
	this.Height = l_Height ;
	this.FontSize = l_FontSize ;
	this.ButtonTextAlignmentX = 25 ;
	this.ButtonTextAlignmentY = 30 ;
	
	// this flag will be used to decide whether the button is active or not
	this.BoolIsActive = true;
	
	this.Button = new C_Cell(this.PosX, this.PosY, this.Width, this.Height, this.ButtonColor );
	this.Text = new C_Text ( this.PosX + this.ButtonTextAlignmentX, this.PosY + this.ButtonTextAlignmentY, this.TextColor, this.Name, this.FontSize ) ;
	this.Text.BoolIsActive = true ;
	
	this.M_DrawButton = function ( l_Ctx )
	{
		if( this.BoolIsActive )
		{
			this.Button.M_DrawCell(l_Ctx);
			this.Text.M_DrawText ( g_Ctx ) ;
			return;
		}
	}
}