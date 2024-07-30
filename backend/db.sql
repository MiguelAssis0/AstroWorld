CREATE DATABASE AstroWorld;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE celestial_objects(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    temperature DOUBLE PRECISION,
    autor INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    photo TEXT
);
