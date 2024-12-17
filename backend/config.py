import os

class Config:
    """Base configuration."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'default_secret_key')
    DEBUG = False
    TESTING = False
    MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017/DATA')

class DevelopmentConfig(Config):
    """Development-specific configuration."""
    DEBUG = True
    FLASK_ENV = 'development'

class TestingConfig(Config):
    """Testing-specific configuration."""
    TESTING = True
    MONGO_URI = 'mongodb://localhost:27017/ecommerce_test_db'

class ProductionConfig(Config):
    """Production-specific configuration."""
    FLASK_ENV = 'production'
    DEBUG = False
    SECRET_KEY = os.getenv('SECRET_KEY')  # Must be set in production
