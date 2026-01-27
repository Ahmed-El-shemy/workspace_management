"""
Authentication dependencies for FastAPI.
Handles JWT token verification and current user retrieval.
"""
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from bson import ObjectId
from typing import Dict, Any

from app.core.security import decode_access_token
from app.db.mongodb import get_database
from app.db.collections import USERS_COLLECTION


# HTTP Bearer token scheme
security = HTTPBearer()


async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db = Depends(get_database)
) -> Dict[str, Any]:
    """
    Dependency to get the current authenticated user.
    
    Validates JWT token and retrieves user from database.
    
    Args:
        credentials: Bearer token from request header
        db: Database instance
        
    Returns:
        User document from database
        
    Raises:
        HTTPException 401: If token is invalid or user not found
    """
    token = credentials.credentials
    
    # Decode JWT token
    payload = decode_access_token(token)
    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Extract user_id from token
    user_id: str = payload.get("sub")
    if user_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Retrieve user from database
    try:
        user = await db[USERS_COLLECTION].find_one({"_id": ObjectId(user_id)})
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid user ID",
        )
    
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found",
        )
    
    if not user.get("is_active", True):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Inactive user account",
        )
    
    return user
