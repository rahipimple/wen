-- =========================================================================
-- WOMEN ENTREPRENEUR NETWORK (WEN)
-- MySQL Production Relational Database Schema DDL
-- Database: wen_database
-- =========================================================================

CREATE DATABASE IF NOT EXISTS wen_database CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE wen_database;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  role VARCHAR(255) DEFAULT 'Early-Stage Startup Founder',
  businessName VARCHAR(255) DEFAULT 'Venture',
  loginTime VARCHAR(100),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Mentor Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id VARCHAR(100) PRIMARY KEY,
  userName VARCHAR(255) DEFAULT 'Founder',
  userEmail VARCHAR(255) DEFAULT 'founder@wen.org',
  mentorId VARCHAR(100),
  mentorName VARCHAR(255),
  mentorRole VARCHAR(255),
  date VARCHAR(100),
  time VARCHAR(100),
  objective TEXT,
  status VARCHAR(50) DEFAULT 'Confirmed',
  meetLink VARCHAR(255),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. Marketplace Products Table
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(100) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) DEFAULT 'Handmade',
  price DECIMAL(10,2) DEFAULT 999.00,
  originalPrice DECIMAL(10,2) DEFAULT 1299.00,
  businessName VARCHAR(255),
  founderName VARCHAR(255),
  rating DECIMAL(3,1) DEFAULT 5.0,
  reviews INT DEFAULT 1,
  location VARCHAR(255) DEFAULT 'India',
  image TEXT,
  description TEXT,
  inStock TINYINT(1) DEFAULT 1,
  tags TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. Community Posts Table
CREATE TABLE IF NOT EXISTS posts (
  id VARCHAR(100) PRIMARY KEY,
  author VARCHAR(255) NOT NULL,
  role VARCHAR(255),
  avatar TEXT,
  badge VARCHAR(100),
  timestamp VARCHAR(100) DEFAULT 'Just now',
  category VARCHAR(100) DEFAULT 'General Discussion',
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  likes INT DEFAULT 1,
  comments JSON,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 5. Contact Enquiries Table
CREATE TABLE IF NOT EXISTS enquiries (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50),
  businessName VARCHAR(255),
  message TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 6. Event Registrations Table
CREATE TABLE IF NOT EXISTS registrations (
  id VARCHAR(100) PRIMARY KEY,
  passId VARCHAR(100),
  name VARCHAR(255),
  email VARCHAR(255),
  eventTitle VARCHAR(255),
  tickets INT DEFAULT 1,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
