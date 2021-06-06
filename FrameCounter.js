// this is the frame counter class
// it keeps track of frames
function C_FrameCounter ()
{
  this.FrameCounter = 0 ;

  // increment frame rate
  this.M_IncreaseFrameCounter = function ()
  {
    this.FrameCounter ++ ;
    return this.FrameCounter ;
  }
}
