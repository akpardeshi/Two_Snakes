// this is the  snake class 
function C_Snake (l_PosX, l_PosY, l_Color, l_NodeSize, l_Length, l_Speed, l_MinBoundryX, l_MaxBoundryX, l_MinBoundryY , l_MaxBoundryY)
{
	// Apperance 
	this.PosX = l_PosX ;
	this.PosY = l_PosY ;
	this.Color = l_Color ;
	this.NodeSize = l_NodeSize ;
	this.SnakeLength = l_Length ;
	this.MaxLength = 50 ;
	this.Speed = l_Speed ;
	this.SnakeArray = new Array ( this.MaxLength ) ;
	
	this.SnakePositionArrayLength = this.NodeSize * this.MaxLength ;
	this.SnakeArrayPosX = new Array ( this.SnakePositionArrayLength ) ;
	this.SnakeArrayPosY = new Array ( this.SnakePositionArrayLength ) ;
	
	this.BoolMoveLeft = false ;
	this.BoolMoveUp = false ;
	this.BoolMoveDown = false ;
	this.BoolMoveTop = false ;
	
	this.BoolIsActive = true ;
	
	this.MinBoundryX = l_MinBoundryX ;
	this.MaxBoundryX = l_MaxBoundryX ;
	
	this.MinBoundryY = l_MinBoundryY ;
	this.MaxBoundryY = l_MaxBoundryY ;
	
	// collision bools
	this.BoolCollisionBetweenSnakeAndFruit = false ;
	this.BoolCollisionBetweenSnakeAndSnake = false ;
	
	this.Points = 0 ;
	this.LastDirection = "Right" ;
	
	
	// initialise
	this.M_InitialiseSnake = function () 
	{
		for ( var i = 0 ; i < this.MaxLength ; i++ )
		{
			this.SnakeArray[i] = new C_Cell( this.PosX, this.PosY, this.NodeSize, this.NodeSize, this.Color ) ;
			this.PosX -= this.NodeSize ;
		}
		
		for ( var i = 0 ; i < this.SnakePositionArrayLength ; i++ )
		{
			this.SnakeArrayPosX[i] = this.SnakeArray[0].PosX - i ;
			this.SnakeArrayPosY[i] = this.PosY ;
		}
	}
	
	
	// draw
	this.M_DrawSnake = function ( l_Ctx )
	{
		for ( var i = 0 ; i < this.SnakeLength; i++ )
		{
			this.SnakeArray[i].M_DrawCell( l_Ctx ) ;
		}
	}
	
	
	// move
	this.M_MoveSnake = function ()
	{
		if ( this.BoolIsActive )
		if ( ( this.BoolMoveRight || this.BoolMoveDown || this.BoolMoveLeft || this.BoolMoveUp ) ) 
		{
			for ( var i = 0 ; i < this.Speed ; i++ )
			{
				for ( var j = this.SnakePositionArrayLength  ; j > 0 ; j-- )
				{
					this.SnakeArrayPosX [ j ] = this.SnakeArrayPosX [ j - 1 ] ;
					this.SnakeArrayPosY [ j ] = this.SnakeArrayPosY [ j - 1 ] ;
				}
				
				if ( this.BoolMoveRight ) 
				{
					this.SnakeArrayPosX[0] ++ ;
					this.LastDirection = "Right" ;
				}
				
				if ( this.BoolMoveLeft )
				{
					this.SnakeArrayPosX[0] -- ;
					this.LastDirection = "Left" ;
				}
				
				if ( this.BoolMoveUp )
				{
					this.SnakeArrayPosY[0] -- ;
					this.LastDirection = "Up" ;
				}
				
				if ( this.BoolMoveDown ) 
				{
					this.SnakeArrayPosY[0] ++ ;
					this.LastDirection = "Down" ;
				}
			}
		}
	}
		
	
	this.M_UpdateCellsLocation = function ()
	{
		for ( var i = 0 ; i < this.MaxLength ; i++ )
		{
			this.SnakeArray[i].PosX = this.SnakeArrayPosX[ i * this.NodeSize ] ;
			this.SnakeArray[i].PosY = this.SnakeArrayPosY[ i * this.NodeSize ] ;
		}
		
		this.PosX = this.SnakeArray[0].PosX ;
		this.PosY = this.SnakeArray[0].PosY ;
	}
	
	this.M_CheckCollisionsWithFruit = function ( l_PosX, l_PosY )
	{
		this.BoolCollisionBetweenSnakeAndFruit = F_CollisionDetection ( this.PosX , this.PosY , l_PosX , l_PosY , this.NodeSize ) ;
		
	}		
	
	this.M_CheckSelfCollision = function ()
	{
		for ( let i = 3 ; i < this.SnakeLength ; i++ )
		{
			if ( F_CollisionDetection ( this.SnakeArray[0].PosX, this.SnakeArray[0].PosY, this.SnakeArray[i].PosX, this.SnakeArray[i].PosY, this.NodeSize ))
			{
				this.BoolIsActive = false ;
			}
		}
	}
	
	this.M_HandleCollision = function ( l_PowerUpType )
	{
		if ( this.BoolCollisionBetweenSnakeAndFruit )
		{
			this.M_HandlePowerUp ( l_PowerUpType ) ;
		}
	}
	
	this.M_CheckCollisionWithSnake = function ( l_Snake )
	{
		for ( let i = 0 ; i < l_Snake.SnakeLength; i++ )
		{
			if ( F_CollisionDetection ( this.PosX , this.PosY , l_Snake.SnakeArray[i].PosX , l_Snake.SnakeArray[i].PosY , this.NodeSize ) )
			{
				this.BoolIsActive = false ;
			}
		}
	}
	
	this.M_CheckCollisionWithBoundry = function ()
	{
		if ( this.PosX <= this.MinBoundryY || this.PosX >= this.MaxBoundryX || this.PosY <= this.MinBoundryX || this.PosY >= this.MaxBoundryY ) 
		{
			this.BoolIsActive = false ;
		}
	}
	
	this.M_Die = function ()
	{
		if ( !this.BoolIsActive ) 
		{
			console.log (this.Color , " snake is dead") ;
		}
	}
	
	this.M_RestrictMovement = function ()
	{
		if ( this.LastDirection == "Left")
		{
			this.BoolMoveRight = false ;
		}
		
		if ( this.LastDirection == "Right" )
		{
			this.BoolMoveLeft = false ;
		}
		
		if ( this.LastDirection == "Up" )
		{
			this.BoolMoveDown = false ;
		}
		
		if ( this.LastDirection == "Down" )
		{
			this.BoolMoveUp = false ;
		}
	}
	
	this.M_HandlePowerUp = function ( l_PowerUpType )
	{
		switch ( l_PowerUpType )
		{
			// increase speed by 2
			case 0 :
				this.Speed += 2 ;
				break ;
				
			// decrease speed by 2
			case 1 :
				this.Speed -= 2 ;
				break ;
				
			// increase size by 1
			case 2 :
				this.SnakeLength += 1; 
				break ;
				
			// decrease size by 1
			case 3 :
				this.SnakeLength -= 1 ;
				break ;
		}
		
		this.Points ++ ;
	}
}