-- =========================================================================
-- WOMEN ENTREPRENEUR NETWORK (WEN)
-- MySQL Seed Data
-- =========================================================================

USE wen_database;

-- Seed Users
INSERT INTO users (id, name, email, role, businessName, loginTime) VALUES
('usr-1', 'Naina mam', 'naina@wen.org', 'Mentor / Advisor', 'Women Leadership Foundation', NOW()),
('usr-2', 'Nilofer', 'nilofer@wen.org', 'Early-Stage Startup Founder', 'EcoInnovate Ventures', NOW()),
('usr-priya', 'Priya Sharma', 'priya@gmail.com', 'Student Innovator', 'Aura Biotech', NOW()),
('usr-aarohi', 'Aarohi Sen', 'aarohi@wen.org', 'Early-Stage Startup Founder', 'Aarohi Crafts', NOW()),
('usr-zoya', 'Zoya Akhtar', 'zoya@wen.org', 'Early-Stage Startup Founder', 'Zoya Organic Apparel', NOW())
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- Seed Bookings
INSERT INTO bookings (id, userName, userEmail, mentorId, mentorName, mentorRole, date, time, objective, status, meetLink) VALUES
('bs-1', 'Nilofer', 'nilofer@wen.org', 'm1', 'Dr. Meera Vasudevan', 'Venture Capital Partner', '2026-10-15', '10:00 AM', 'Pitch Deck Review & Seed Funding', 'Confirmed', 'https://meet.google.com/wen-demo'),
('bs-2', 'Priya Sharma', 'priya@gmail.com', 'm2', 'Anjali Rao', 'Tech Product Lead', '2026-10-16', '02:00 PM', 'Product Architecture Strategy', 'Confirmed', 'https://meet.google.com/wen-tech')
ON DUPLICATE KEY UPDATE userName=VALUES(userName);

-- Seed Products
INSERT INTO products (id, title, category, price, originalPrice, businessName, founderName, rating, reviews, location, image, description, inStock, tags) VALUES
('p-1', 'AromaHeal Organic Lavender Essential Oil', 'Beauty', 649.00, 899.00, 'AromaHeal Organics', 'Ananya Deshmukh', 5.0, 12, 'Pune, Maharashtra', 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108', '100% steam-distilled pure organic lavender essential oil for stress relief and wellness.', 1, 'Certified Organic, Women Owned, Eco-Friendly'),
('p-2', 'Handcrafted Ceramic Mug', 'Handmade', 499.00, 1299.00, 'ClayVenture', 'Priyanka Roy', 5.0, 1, 'India', '', 'Beautiful artisanal handcrafted ceramic mug.', 1, 'Handmade, Artisan')
ON DUPLICATE KEY UPDATE title=VALUES(title);

-- Seed Posts
INSERT INTO posts (id, author, role, avatar, badge, timestamp, category, title, content, likes, comments) VALUES
('post-1', 'Ananya Deshmukh', 'Founder, AromaHeal Organics', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', 'Early-Stage Startup', '2 hours ago', 'Funding Advice', 'Document checklist for Mudra Tarun Loan application approval', 'For founders applying for the Mudra Tarun Loan scheme, here are the essential documents you need...', 8, '[]')
ON DUPLICATE KEY UPDATE title=VALUES(title);
