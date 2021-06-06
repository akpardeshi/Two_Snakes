function E_KeyDown( Event )
{
	var l_KeyCode = Event.keyCode ;
	switch ( l_KeyCode )
	{
		// Player One Event || Red Snake
		case 65 : // A
			g_RedSnake.BoolMoveLeft = true ;
			break ;
			
		case 87 : // W
			g_RedSnake.BoolMoveUp = true ;
			break ;
			
		case 68 : // D
			g_RedSnake.BoolMoveRight = true ;
			break ;
			
		case 83 : // S
			g_RedSnake.BoolMoveDown = true ;
			break ;	
			

		// Player Two events || Blue Snake
		case 37 : // Left Arrow
			g_BlueSnake.BoolMoveLeft = true ;
			break ;
		
		case 38 : // Up Arrow
			g_BlueSnake.BoolMoveUp = true ;
			break ;
			
		case 39 : // Right Arrow
			g_BlueSnake.BoolMoveRight = true ;
			break ;
			
		case 40 : // Down Arrow 
			g_BlueSnake.BoolMoveDown = true ;
			break ;
	}
}

function E_KeyUp( Event )
{
	var l_KeyCode = Event.keyCode ;
	switch ( l_KeyCode )
	{
		// Player One Event || Red Snake
		case 65 :
			g_RedSnake.BoolMoveLeft = false ;
			break ;
			
		case 87 :
			g_RedSnake.BoolMoveUp = false ;
			break ;
			
		case 68 :
			g_RedSnake.BoolMoveRight = false ;
			break ;
			
		case 83 :
			g_RedSnake.BoolMoveDown = false ;
			break ;	
			

		// Player Two events || Blue Snake
		case 37 : // L
			g_BlueSnake.BoolMoveLeft = false ;
			break ;
		
		case 38 : // U
			g_BlueSnake.BoolMoveUp = false ;
			break ;
			
		case 39 : // R
			g_BlueSnake.BoolMoveRight = false ;
			break ;
			
		case 40 : // D
			g_BlueSnake.BoolMoveDown = false ;
			break ;
	}
}

function E_OnClick( e )
{
	let e_PosX = e.clientX ;
	let e_PosY = e.clientY ;
	
	switch ( e.button )
	{
		case 0 :
			if ( ( e_PosX > g_BackButton.PosX ) && 
				 ( e_PosX < g_BackButton.PosX + g_BackButton.Width ) && 
				 ( e_PosY > g_BackButton.PosY ) && 
				 ( e_PosY < g_BackButton.PosY + g_BackButton.Height ) && g_BackButton.BoolIsActive )
			{
				if ( g_HelpText.BoolIsActive )
				{
					f_DeactivateHelpMenu () ;
					f_ActivateStartMenu () ;
					g_BackButton.BoolIsActive = false ;
				}
				
				if ( g_ControlText.BoolIsActive )
				{
					f_DeactivateControl () ;
					f_ActivateHelpMenu () ;

				}
				
				if ( g_InstructionText.BoolIsActive ) 
				{
					f_DeactivateInstructionsMenu () ;
					f_ActivateHelpMenu () ;
				}
			}
			
			if ( ( e_PosX > g_ControlButton.PosX ) && 
				 ( e_PosX < g_ControlButton.PosX + g_ControlButton.Width ) && 
				 ( e_PosY > g_ControlButton.PosY ) && 
				 ( e_PosY < g_ControlButton.PosY + g_ControlButton.Height ))
				{
					if ( g_ControlButton.BoolIsActive )
					{
						f_DeactivateHelpMenu () ;
						f_ActivateControlMenu () ;
					}
				}
			
			if ( ( e_PosX > g_InstructionsButton.PosX ) && 
				 ( e_PosX < g_InstructionsButton.PosX + g_InstructionsButton.Width ) && 
				 ( e_PosY > g_InstructionsButton.PosY ) && 
				 ( e_PosY < g_InstructionsButton.PosY + g_InstructionsButton.Height ))
				{
					if ( g_InstructionsButton.BoolIsActive )
					{
						f_DeactivateHelpMenu () ;
						f_ActivateInstructionsMenu () ;
					}
				}
			
			if ( ( e_PosX > g_StartButton.PosX ) && 
				 ( e_PosX < g_StartButton.PosX + g_StartButton.Width ) && 
				 ( e_PosY > g_StartButton.PosY ) && 
				 ( e_PosY < g_StartButton.PosY + g_StartButton.Height ))
				{
					if ( g_StartButton.BoolIsActive )
					{
						g_GameState = "Running" ;
						f_ActivateScoreText () ;
					}
				}
			
			if ( ( e_PosX > g_HelpButton.PosX ) && 
				 ( e_PosX < g_HelpButton.PosX + g_HelpButton.Width ) && 
				 ( e_PosY > g_HelpButton.PosY ) && 
				 ( e_PosY < g_HelpButton.PosY + g_HelpButton.Height ))
				{
					if ( g_HelpButton.BoolIsActive )
					{
						f_DeactivateStartMenu () ;
						f_ActivateHelpMenu () ;
					}
				}
			
			if ( ( e_PosX > g_RestartButton.PosX ) && 
				 ( e_PosX < g_RestartButton.PosX + g_RestartButton.Width ) && 
				 ( e_PosY > g_RestartButton.PosY ) && 
				 ( e_PosY < g_RestartButton.PosY + g_RestartButton.Height ))
				{
					if ( g_RestartButton.BoolIsActive )
					{
						console.log ("Restart") ;
						f_ResetSnakes () ;
					}
				}
			break ;
			
		default :
			console.log ("Stay Back") ;
			break ;
	}
}
