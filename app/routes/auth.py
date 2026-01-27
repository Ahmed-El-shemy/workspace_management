"""
Authentication API routes.
Handles user registration, login, and profile retrieval.
"""
from fastapi import APIRouter, Depends, HTTPException, status

from app.schemas.user import UserCreate, UserLogin, Token, UserResponse
from app.services.auth_service import AuthService
from app.dependencies.auth import get_current_user
from app.db.mongodb import get_database


router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register(
    user_data: UserCreate,
    db = Depends(get_database)
):
    """
    Register a new user account.
    
    - **email**: Valid email address (unique)
    - **password**: Password (minimum 8 characters)
    - **full_name**: User's full name
    
    Returns the created user data.
    """
    try:
        user = await AuthService.register_user(
            db,
            email=user_data.email,
            password=user_data.password,
            full_name=user_data.full_name
        )
        
        # Convert ObjectId to string for response
        user["_id"] = str(user["_id"])
        return user
        
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )


@router.post("/login", response_model=Token)
async def login(
    credentials: UserLogin,
    db = Depends(get_database)
):
    """
    Login with email and password.
    
    Returns a JWT access token on successful authentication.
    """
    user = await AuthService.authenticate_user(
        db,
        email=credentials.email,
        password=credentials.password
    )
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Create access token
    access_token = AuthService.create_user_token(user)
    
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/me", response_model=UserResponse)
async def get_current_user_profile(
    current_user = Depends(get_current_user)
):
    """
    Get current authenticated user's profile.
    
    Requires valid JWT token in Authorization header.
    """
    # Convert ObjectId to string for response
    current_user["_id"] = str(current_user["_id"])
    return current_user
