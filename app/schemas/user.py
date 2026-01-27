"""
Pydantic schemas for User-related API requests and responses.
"""
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional


class UserCreate(BaseModel):
    """Schema for user registration request."""
    email: EmailStr
    password: str = Field(..., min_length=8, description="Password must be at least 8 characters")
    full_name: str = Field(..., min_length=1, max_length=100)


class UserLogin(BaseModel):
    """Schema for user login request."""
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    """Schema for user data in responses."""
    id: str = Field(..., alias="_id")
    email: str
    full_name: str
    created_at: datetime
    is_active: bool
    
    class Config:
        populate_by_name = True


class Token(BaseModel):
    """Schema for JWT token response."""
    access_token: str
    token_type: str = "bearer"


class TokenData(BaseModel):
    """Schema for decoded JWT token data."""
    user_id: Optional[str] = None
