"""
Authentication service.
Handles user registration, login, and token generation.
"""
from typing import Optional, Dict, Any
from bson import ObjectId

from app.core.security import hash_password, verify_password, create_access_token
from app.models.user import UserModel
from app.db.collections import USERS_COLLECTION


class AuthService:
    """Service for authentication operations."""
    
    @staticmethod
    async def register_user(
        db,
        email: str,
        password: str,
        full_name: str
    ) -> Dict[str, Any]:
        """
        Register a new user.
        
        Args:
            db: Database instance
            email: User's email address
            password: Plain text password
            full_name: User's full name
            
        Returns:
            Created user document
            
        Raises:
            ValueError: If email already exists
        """
        # Check if email already exists
        existing_user = await db[USERS_COLLECTION].find_one({"email": email.lower()})
        if existing_user:
            raise ValueError("Email already registered")
        
        # Hash password
        hashed_password = hash_password(password)
        
        # Create user document
        user_doc = UserModel.create_document(
            email=email,
            hashed_password=hashed_password,
            full_name=full_name
        )
        
        # Insert into database
        result = await db[USERS_COLLECTION].insert_one(user_doc)
        user_doc["_id"] = result.inserted_id
        
        return user_doc
    
    @staticmethod
    async def authenticate_user(
        db,
        email: str,
        password: str
    ) -> Optional[Dict[str, Any]]:
        """
        Authenticate a user with email and password.
        
        Args:
            db: Database instance
            email: User's email address
            password: Plain text password
            
        Returns:
            User document if authentication successful, None otherwise
        """
        # Find user by email
        user = await db[USERS_COLLECTION].find_one({"email": email.lower()})
        if not user:
            return None
        
        # Verify password
        if not verify_password(password, user["hashed_password"]):
            return None
        
        return user
    
    @staticmethod
    def create_user_token(user: Dict[str, Any]) -> str:
        """
        Create JWT token for a user.
        
        Args:
            user: User document
            
        Returns:
            JWT access token
        """
        token_data = {"sub": str(user["_id"])}
        return create_access_token(token_data)
