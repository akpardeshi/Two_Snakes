//this is the class to generate randome numbers
// here it is being used for to generate the interval between activating mothership
function C_GenerateRandomNumber ( l_MinValue, l_MaxValue )
{
  this.MinValue = l_MinValue ;
  this.MaxValue = l_MaxValue ;

  this.M_GenerateRandomNumber = function ()
  {
    return Math.round ( Math.random () * ( this.MaxValue - this.MinValue ) + this.MinValue );
  }
}
