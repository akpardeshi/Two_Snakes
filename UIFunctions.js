// Control Menu
function f_DeactivateControl()
{
	g_ControlText.BoolIsActive = false ;
	g_ControlLineOne.BoolIsActive = false ;
	g_ControlLineTwo.BoolIsActive = false ;
	g_ControlLineThree.BoolIsActive = false ;
	g_ControlLineFour.BoolIsActive = false ;
	g_ControlLineFive.BoolIsActive = false ;
	g_ControlLineSix.BoolIsActive = false ;
	g_ControlLineSeven.BoolIsActive = false ;
	g_ControlLineEight.BoolIsActive = false ;
	g_ControlLineNine.BoolIsActive = false ;
	g_ControlLineTen.BoolIsActive = false ;
	g_ControlSquare.BoolIsActive = false ;
	g_BackButton.BoolIsActive = false ;
}

function f_ActivateControlMenu ()
{
	g_ControlText.BoolIsActive = true ;
	g_ControlLineOne.BoolIsActive = true ;
	g_ControlLineTwo.BoolIsActive = true ;
	g_ControlLineThree.BoolIsActive = true ;
	g_ControlLineFour.BoolIsActive = true ;
	g_ControlLineFive.BoolIsActive = true ;
	g_ControlLineSix.BoolIsActive = true ;
	g_ControlLineSeven.BoolIsActive = true ;
	g_ControlLineEight.BoolIsActive = true ;
	g_ControlLineNine.BoolIsActive = true ;
	g_ControlLineTen.BoolIsActive = true ;
	g_ControlSquare.BoolIsActive = true ;
	g_BackButton.BoolIsActive = true ;
}

function f_DrawControlMenu ( l_Ctx ) 
{
	g_ControlText.M_DrawText ( l_Ctx ) ;
	g_ControlSquare. M_StrokeSquare ( l_Ctx ) ;
	g_ControlLineOne.M_DrawText ( l_Ctx ) ;
	g_ControlLineTwo.M_DrawText ( l_Ctx ) ;
	g_ControlLineThree.M_DrawText ( l_Ctx ) ;
	g_ControlLineFour.M_DrawText ( l_Ctx ) ;
	g_ControlLineFive.M_DrawText ( l_Ctx ) ;
	g_ControlLineSix.M_DrawText ( l_Ctx ) ;
	g_ControlLineSeven.M_DrawText ( l_Ctx ) ;
	g_ControlLineEight.M_DrawText ( l_Ctx ) ;
	g_ControlLineNine.M_DrawText ( l_Ctx ) ;
	g_ControlLineTen.M_DrawText ( l_Ctx ) ;
}

// Help Menu
function f_ActivateHelpMenu()
{
	g_HelpText.BoolIsActive = true ;
	g_ControlButton.BoolIsActive = true ;
	g_InstructionsButton.BoolIsActive = true ;
	g_BackButton.BoolIsActive = true ;
}

function f_DrawHelpMenu ( l_Ctx )
{
	g_HelpText.M_DrawText ( l_Ctx );
	g_ControlButton.M_DrawButton ( l_Ctx ) ;
	g_InstructionsButton.M_DrawButton ( l_Ctx ) 
}

function f_DeactivateHelpMenu () 
{
	g_HelpText.BoolIsActive = false ;
	g_ControlButton.BoolIsActive = false ;
	g_InstructionsButton.BoolIsActive = false ;
}

// Instructions Meun
function f_ActivateInstructionsMenu ()
{
	g_InstructioinsSquare.BoolIsActive = true ;
	g_InstructionText.BoolIsActive = true ;
	g_LineOne.BoolIsActive = true ;
	g_LineTwo.BoolIsActive = true ;
	g_LineThree.BoolIsActive = true ;
	g_LineFour.BoolIsActive = true ;
	g_LineFive.BoolIsActive = true ;
	g_InstructionSubHeading.BoolIsActive = true ;
}

function f_DeactivateInstructionsMenu ()
{
	g_InstructioinsSquare.BoolIsActive = false ;
	g_InstructionText.BoolIsActive = false ;
	g_LineOne.BoolIsActive = false ;
	g_LineTwo.BoolIsActive = false ;
	g_LineThree.BoolIsActive = false ;
	g_LineFour.BoolIsActive = false ;
	g_LineFive.BoolIsActive = false ;
	g_InstructionSubHeading.BoolIsActive = false ;
}

function f_DrawInstructioMenu ( l_Ctx )
{
	g_InstructionText.M_DrawText ( l_Ctx ) ;
	g_LineOne.M_DrawText ( l_Ctx ) ;
	g_LineTwo.M_DrawText ( l_Ctx ) ;
	g_LineThree.M_DrawText ( l_Ctx ) ;
	g_LineFour.M_DrawText ( l_Ctx ) ;
	g_LineFive.M_DrawText ( l_Ctx ) ;
	g_InstructioinsSquare.M_StrokeSquare ( l_Ctx ) ;
	g_InstructionSubHeading.M_DrawText ( l_Ctx ) ;
}

// Start Menu
function f_ActivateStartMenu ()
{
	g_StartButton.BoolIsActive = true ;
	g_StartText.BoolIsActive = true ;
	g_HelpButton.BoolIsActive = true ;
}

function f_DeactivateStartMenu ()
{
	g_StartButton.BoolIsActive = false ;
	g_StartText.BoolIsActive = false ;
	g_HelpButton.BoolIsActive = false ;
}

function f_DrawStartMenu ( l_Ctx )
{
	g_StartText.M_DrawText ( l_Ctx ) ;
	g_StartButton.M_DrawButton ( l_Ctx ) ;
	g_HelpButton.M_DrawButton ( l_Ctx ) ;
}

// Score
function f_ActivateScoreText ()
{
	g_RedSnakeScore.BoolIsActive = true ;
	g_RedSnakeText.BoolIsActive = true ;
	g_BlueSnakeScore.BoolIsActive = true ;
	g_BlueSnakeText.BoolIsActive = true ;
	g_PowerUp.BoolIsActive = true ;
	g_RedSnake.BoolIsActive = true ;
	g_BlueSnake.BoolIsActive = true ;
}

function f_DeactivateScoreText ()
{
	g_RedSnakeScore.BoolIsActive = false ;
	g_RedSnakeText.BoolIsActive = false ;
	g_BlueSnakeScore.BoolIsActive = false ;
	g_BlueSnakeText.BoolIsActive = false ;
	g_PowerUp.BoolIsActive = false ;
	g_RedSnake.BoolIsActive = false ;
	g_BlueSnake.BoolIsActive = false ;
}

function f_DeactivateScoreText ()
{
	g_RedSnakeScore.BoolIsActive = false ;
	g_RedSnakeText.BoolIsActive = false ;
	g_BlueSnakeScore.BoolIsActive = false ;
	g_BlueSnakeText.BoolIsActive = false ;
	g_PowerUp.BoolIsActive = false ;
	g_RedSnake.BoolIsActive = false ;
	g_BlueSnake.BoolIsActive = false ;
}

function f_DrawGameplayLoop ( l_Ctx ) 
{
	g_RedSnakeScore.M_DrawText ( l_Ctx ) ;
	g_RedSnakeText.M_DrawText ( l_Ctx ) ;
	g_BlueSnakeScore.M_DrawText ( l_Ctx ) ;
	g_BlueSnakeText.M_DrawText ( l_Ctx ) ;
	g_PowerUp.M_DrawPowerUp ( l_Ctx ) ;
	g_RedSnake.M_DrawSnake ( l_Ctx ) ;
	g_BlueSnake.M_DrawSnake ( l_Ctx ) ;
}

// this function will display winner and restart the game

function f_ActivateWinnerMenu ()
{
	g_WinnerMessageText.BoolIsActive = true ;
	g_RestartButton.BoolIsActive = true ;
}

function f_DeactivateWinnerMenu ()
{
	g_WinnerMessageText.BoolIsActive = true ;
	g_RestartButton.BoolIsActive = true ;
}

function f_DrawWinnerMenu ( l_Ctx ) 
{
	g_WinnerMessageText.M_DrawText ( l_Ctx )  ;
	g_RestartButton.M_DrawButton ( l_Ctx )  ;
}

function F_CheckWinner ( l_PointsToWin , l_RedSnakePoints , l_BlueSnakePoints )
{
	if ( l_RedSnakePoints >= l_PointsToWin )
	{
		g_WinnerMessageText.Text = "Red Snake Won" ;
		g_WinnerMessageText.Color = g_RedSnake.Color ;
		g_GameState = "Ended";
	}
	
	if ( l_BlueSnakePoints >= l_PointsToWin )
	{
		g_WinnerMessageText.Color = g_BlueSnake.Color ;
		g_WinnerMessageText.Text = "Blue Snake Won" ;
		g_GameState = "Ended";
	}
	
	if ( !g_BlueSnake.BoolIsActive && !g_RedSnake.BoolIsActive ) 
	{
		g_WinnerMessageText.Color = "Black" ;
		g_WinnerMessageText.Text = "Game Over" ;
		g_GameState = "Ended";
	}
	
	return ;
}

function f_ResetSnakes ()
{
	g_RedSnake.Points = 0 ;
	g_RedSnake.SnakeLength = g_SnakeLength ;
	g_BlueSnake.Points = 0 ;
	g_BlueSnake.SnakeLength = g_SnakeLength ;
	g_RedSnake.PosX = g_RedSnakeStartPosX ;
	g_RedSnake.PosY = g_RedSnakeStartPosY ;
	g_BlueSnake.PosX = g_BlueSnakeStartPosX ;
	g_BlueSnake.PosY = g_BlueSnakeStartPosY ;
	g_RedSnake.BoolIsActive = true ;
	g_BlueSnake.BoolIsActive = true ;
	g_RedSnake.M_InitialiseSnake () ;
	g_BlueSnake.M_InitialiseSnake () ;
	g_GameState = "Running" ;
}