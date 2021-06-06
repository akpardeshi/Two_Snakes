// Not AABB collision detection
function F_CollisionDetection ( l_PosX1 , l_PosY1 , l_PosX2 , l_PosY2 , l_Size )
{
	let l_DistanceX = Math.abs( ( l_PosX1 + l_Size / 2 ) - ( l_PosX2 + l_Size / 2 ) ) ;
	let l_DistanceY = Math.abs( ( l_PosY1 + l_Size / 2 ) - ( l_PosY2 + l_Size / 2 ) ) ;
	
	if ( (l_DistanceX + l_DistanceY) < l_Size )
	{
		return true ;
	}
	
	return false ;
}