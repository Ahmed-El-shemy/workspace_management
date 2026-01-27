"""
Configuration management using Pydantic Settings.
Loads environment variables and provides centralized configuration.
"""
from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List


class Settings(BaseSettings):
    """
    Application settings loaded from environment variables.
    """
    
    # MongoDB Configuration
    MONGODB_URL: str = "mongodb://localhost:27017"
    MONGODB_DB_NAME: str = "clickup_saas"
    
    # JWT Configuration
    JWT_SECRET_KEY: str
    JWT_ALGORITHM: str = "HS256"
    JWT_ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Application Configuration
    APP_NAME: str = "ClickUp-like SaaS Backend"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = False
    
    # CORS Configuration
    ALLOWED_ORIGINS: str = "http://localhost:3000,http://localhost:8000"
    
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True
    )
    
    @property
    def cors_origins(self) -> List[str]:
        """Parse CORS origins from comma-separated string."""
        return [origin.strip() for origin in self.ALLOWED_ORIGINS.split(",")]


# Global settings instance
settings = Settings()
