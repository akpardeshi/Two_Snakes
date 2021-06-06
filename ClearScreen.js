function F_ClearScreen( l_Ctx, l_CanvasWidth, l_CanvasHeight )
{
  l_Ctx.clearRect(0, 0, l_CanvasWidth, l_CanvasHeight);
  l_Ctx.lineWidth = "4";
  l_Ctx.strokeStyle = "black";
  l_Ctx.strokeRect(0, 0, l_CanvasWidth, l_CanvasHeight);
}
