// this is power up class
function C_PowerUp ( l_PosX, l_PosY, l_Color, l_Size, l_MinBoundryX, l_MaxBoundryX, l_MinBoundryY, l_MaxBoundryY )
{
	this.PosX = l_PosX ;
	this.PosY = l_PosY ;
	this.Color = l_Color ;
	this.Size = l_Size ;
	
	this.MinimumBoundryValue = 0 ;
	this.MinBoundryX =  l_MinBoundryX ;
	this.MinBoundryY =  l_MinBoundryY ;
	this.MaxBoundryX =  l_MaxBoundryX ;
	this.MaxBoundryY =  l_MaxBoundryY ;
	
	this.Type = 2 ;
	
	this.PowerUpMinValue = 0 ;
	this.PowerUpMaxValue = 3 ;
	
	this.RespawnTime = 48 ; // 48 frame
	this.BoolIsActive = true ;
	this.BoolCheckCollisionWithRedSnake = false ;
	this.BoolCheckCollisionWithBlueSnake = false ;
	
	this.RandomNumberGeneratorX = new C_GenerateRandomNumber ( this.MinBoundryX, this.MaxBoundryX ) ;
	
	this.RandomNumberGeneratorY = new C_GenerateRandomNumber ( this.MinBoundryY, this.MaxBoundryY ) ;
	
	this.FrameCounter = new C_FrameCounter () ;
	
	this.Cell = new C_Cell ( this.PosX, this.PosY, this.Size, this.Size, this.Color ) ;
	
	this.M_SpawnPowerUp = function ()
	{
		if ( (this.FrameCounter.FrameCounter % this.RespawnTime == 0) || !this.BoolIsActive )
		{
			this.BoolIsActive = true ;
			this.Type = Math.round ( Math.random () * ( this.PowerUpMaxValue - this.PowerUpMinValue ) + this.PowerUpMinValue );
			this.PosX = this.RandomNumberGeneratorX.M_GenerateRandomNumber() ;
			this.PosY = this.RandomNumberGeneratorY.M_GenerateRandomNumber() ;
			this.M_UpdateCellLocation () ;
		}
	}
	
	this.M_UpdateCellLocation = function ()
	{
		this.Cell.PosX = this.PosX ;
		this.Cell.PosY = this.PosY ;
	}
	
	this.M_DrawPowerUp = function ( l_Ctx )
	{
		
		this.Cell.M_DrawCell ( l_Ctx ) ;
	}
	
	this.M_IncreaseFrameCounter = function ()
	{
		this.FrameCounter.M_IncreaseFrameCounter () ;
	}
	
	this.M_CheckActiveStatus = function ( l_SnakePosX, l_SnakePosY )
	{
		if ( F_CollisionDetection ( this.PosX, this.PosY, l_SnakePosX, l_SnakePosY, this.Size ) ) 
		{
			this.BoolIsActive = false ;
		}
	}
}