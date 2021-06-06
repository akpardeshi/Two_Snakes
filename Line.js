function F_Line ( l_StartPosX, l_StartPosY, l_EndPosX, l_EndPosY, l_Ctx, l_Width, l_Color )
{
	l_Ctx.lineWidth = l_Width ;
	l_Ctx.strokeStyle = l_Color ;
	l_Ctx.beginPath();
	l_Ctx.moveTo(l_StartPosX, l_StartPosY) ;
	l_Ctx.lineTo ( l_EndPosX, l_EndPosY ) ;
	l_Ctx.closePath () ;
	l_Ctx.stroke() ;
}
