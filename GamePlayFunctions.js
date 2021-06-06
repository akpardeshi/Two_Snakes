function F_GameRunningCalculationLoop ()
{
	// calculate || move || shoot
	g_PowerUp.M_IncreaseFrameCounter ( ) ;
	g_PowerUp.M_SpawnPowerUp ( ) ;
	
	//g_RedSnake.M_LockBackwordMovement () ;
	g_RedSnake.M_RestrictMovement () ;
	g_BlueSnake.M_RestrictMovement () ;

	g_RedSnake.M_MoveSnake () ;
	g_BlueSnake.M_MoveSnake () ;

	g_RedSnake.M_UpdateCellsLocation () ;
	g_BlueSnake.M_UpdateCellsLocation () ;
	
	F_CollisionDetection (g_RedSnake.PosX, g_RedSnake.PosY, g_PowerUp.PosX, g_PowerUp.PosY, g_RedSnake.NodeSize ) ;
	// collision with red snake
	g_PowerUp.M_CheckActiveStatus ( g_RedSnake.PosX, g_RedSnake.PosY ) ;
	// collision with blue snake
	g_PowerUp.M_CheckActiveStatus ( g_BlueSnake.PosX, g_BlueSnake.PosY ) ;
	
	g_RedSnake.M_CheckCollisionsWithFruit ( g_PowerUp.PosX , g_PowerUp.PosY ) ;
	g_BlueSnake.M_CheckCollisionsWithFruit ( g_PowerUp.PosX , g_PowerUp.PosY ) ;

	g_RedSnake.M_CheckSelfCollision () ;
	g_BlueSnake.M_CheckSelfCollision () ;
	g_RedSnake.M_HandleCollision ( g_PowerUp.Type ) ;
	g_BlueSnake.M_HandleCollision ( g_PowerUp.Type ) ;

	g_RedSnake.M_CheckCollisionWithSnake( g_BlueSnake ) ;
	g_BlueSnake.M_CheckCollisionWithSnake( g_RedSnake ) ;
	
	g_RedSnake.M_CheckCollisionWithBoundry () ;
	g_BlueSnake.M_CheckCollisionWithBoundry () ;
	
	// score
	g_RedSnakeScore.M_UpdateText( g_RedSnake.Points ) ;
	g_BlueSnakeScore.M_UpdateText( g_BlueSnake.Points ) ;
	F_CheckWinner( g_PointsToWin, g_RedSnake.Points, g_BlueSnake.Points ) ;
	
	// die
	g_RedSnake.M_Die () ;
	g_BlueSnake.M_Die () ;
	
	// Clear Screen
	F_ClearScreen( g_Ctx, g_CanvasWidth, g_CanvasHeight) ;
		
	// Draw
	// Snake
	f_DrawGameplayLoop ( g_Ctx ) ;
	
	// line
	F_Line( 0, 50, 600, 50, g_Ctx, 2, "Black") ; 
}

function F_GameUI ()
{
	// Clear Screen 
	F_ClearScreen( g_Ctx, g_CanvasWidth, g_CanvasHeight) ;
	
	// Main Menu
	f_DrawStartMenu ( g_Ctx )
	
	// Help Text
	f_DrawHelpMenu ( g_Ctx ) ;
	g_BackButton.M_DrawButton ( g_Ctx ) ;
	
	// Instruction Menu
	f_DrawInstructioMenu ( g_Ctx ) ;

	// Control Menu
	f_DrawControlMenu ( g_Ctx ) ;
}


function F_InnerGameLoop ()
{
	//// 3 states || 1 >> Starting || 2 >> Running || 3 >> Ended
	switch ( g_GameState )
	{
		case "Starting":
			// display UI
			F_GameUI () ;
			break ;
			
		case "Running" :
			// Run game
			F_GameRunningCalculationLoop() ;
			break ;
			
		case "Ended" :
			// Display winner
			f_ActivateWinnerMenu () ;
			f_DrawWinnerMenu ( g_Ctx )  ;
			console.log ("Display Winner") ;
			break ;
	}
}