/**
 * =========================================================================
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Production Node.js & MySQL Relational REST API Server
 * Database: MySQL 8.0 Server (wen_database)
 * Tagline:  "Connect • Learn • Grow"
 * Vision:   "Stronger Women • Stronger Businesses • A Brighter Tomorrow"
 * =========================================================================
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 8080;
const FRONTEND_DIR = path.join(__dirname, 'frontend');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend assets
if (fs.existsSync(FRONTEND_DIR)) {
  app.use(express.static(FRONTEND_DIR));
} else {
  app.use(express.static(__dirname));
}

// MySQL Connection Configuration
const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DATABASE || 'wen_database',
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let pool = null;

async function initMySQL() {
  try {
    // 1. Connect without database to ensure database exists
    const adminConn = await mysql.createConnection({
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.user,
      password: dbConfig.password
    });

    await adminConn.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await adminConn.end();

    // 2. Connect to pool with target database
    pool = mysql.createPool(dbConfig);

    // 3. Create SQL Tables
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        role VARCHAR(255) DEFAULT 'Early-Stage Startup Founder',
        businessName VARCHAR(255) DEFAULT 'Venture',
        loginTime VARCHAR(100),
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );

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

      CREATE TABLE IF NOT EXISTS enquiries (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        phone VARCHAR(50),
        businessName VARCHAR(255),
        message TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS registrations (
        id VARCHAR(100) PRIMARY KEY,
        passId VARCHAR(100),
        name VARCHAR(255),
        email VARCHAR(255),
        eventTitle VARCHAR(255),
        tickets INT DEFAULT 1,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log(`✅ [MySQL Database] Connected to MySQL 8.0 Server! Target Database: '${dbConfig.database}'`);
    await seedMySQL();
  } catch (err) {
    console.error('❌ [MySQL Connection Error]', err.message);
    console.log('👉 Please ensure MySQL Service (MySQL80) is running and check host/user/password in environment variable or code.');
  }
}

async function seedMySQL() {
  try {
    const [rows] = await pool.query('SELECT COUNT(*) as count FROM users');
    if (rows[0].count === 0) {
      await pool.query(`
        INSERT INTO users (id, name, email, role, businessName, loginTime) VALUES
        ('usr-1', 'Naina mam', 'naina@wen.org', 'Mentor / Advisor', 'Women Leadership Foundation', NOW()),
        ('usr-2', 'Nilofer', 'nilofer@wen.org', 'Early-Stage Startup Founder', 'EcoInnovate Ventures', NOW()),
        ('usr-priya', 'Priya Sharma', 'priya@gmail.com', 'Student Innovator', 'Aura Biotech', NOW()),
        ('usr-aarohi', 'Aarohi Sen', 'aarohi@wen.org', 'Early-Stage Startup Founder', 'Aarohi Crafts', NOW()),
        ('usr-zoya', 'Zoya Akhtar', 'zoya@wen.org', 'Early-Stage Startup Founder', 'Zoya Organic Apparel', NOW());
      `);
      console.log('[MySQL] Initialized seed users into MySQL users table.');
    }
  } catch (e) {
    console.warn('[MySQL Seed Warning]', e.message);
  }
}

// =========================================================================
// REST API ENDPOINTS
// =========================================================================

// GET /api/status - MySQL Database Connection Metrics & Status
app.get('/api/status', async (req, res) => {
  try {
    const [[users]] = await pool.query('SELECT COUNT(*) as count FROM users');
    const [[bookings]] = await pool.query('SELECT COUNT(*) as count FROM bookings');
    const [[products]] = await pool.query('SELECT COUNT(*) as count FROM products');
    const [[posts]] = await pool.query('SELECT COUNT(*) as count FROM posts');
    const [[enquiries]] = await pool.query('SELECT COUNT(*) as count FROM enquiries');
    const [[registrations]] = await pool.query('SELECT COUNT(*) as count FROM registrations');

    res.json({
      platform: "Women Entrepreneur Network (WEN)",
      tagline: "Connect • Learn • Grow",
      status: "OPERATIONAL",
      database: "MySQL 8.0 Server",
      databaseType: "MySQL Relational Database (SQL)",
      mysqlHost: dbConfig.host,
      mysqlDatabase: dbConfig.database,
      databaseMetrics: {
        totalUsers: users.count,
        totalBookings: bookings.count,
        totalCustomProducts: products.count,
        totalCommunityPosts: posts.count,
        totalEnquiries: enquiries.count,
        totalRegistrations: registrations.count
      },
      startupMetrics: {
        activeEntrepreneurs: 5200,
        fundingFacilitated: "₹14.8 Cr+",
        verifiedMentors: 480,
        storefrontProducts: 1350
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "MySQL Connection Offline" });
  }
});

// GET /api/users - Fetch users from MySQL
app.get('/api/users', async (req, res) => {
  try {
    const [users] = await pool.query('SELECT * FROM users ORDER BY createdAt DESC');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/users & POST /api/login - Save or Update User in MySQL
app.post(['/api/users', '/api/login'], async (req, res) => {
  try {
    const payload = req.body;
    if (!payload.name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const userId = payload.id || 'usr-' + Date.now();
    const name = payload.name.trim();
    const email = payload.email ? payload.email.trim() : `${name.toLowerCase().replace(/\s+/g, '')}@wen.org`;
    const role = payload.role || 'Early-Stage Startup Founder';
    const businessName = payload.businessName || 'Venture';
    const loginTime = payload.loginTime || new Date().toISOString();

    await pool.query(`
      INSERT INTO users (id, name, email, role, businessName, loginTime)
      VALUES (?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        role = VALUES(role),
        businessName = VALUES(businessName),
        loginTime = VALUES(loginTime);
    `, [userId, name, email, role, businessName, loginTime]);

    console.log(`[MySQL] ✅ Saved/Updated user in MySQL table: "${name}" (ID: ${userId})`);

    const [[savedUser]] = await pool.query('SELECT * FROM users WHERE id = ? OR email = ? ORDER BY createdAt DESC LIMIT 1', [userId, email]);
    
    res.status(201).json({
      success: true,
      userId: savedUser ? savedUser.id : userId,
      message: `User '${name}' stored in MySQL database successfully.`,
      user: savedUser
    });
  } catch (err) {
    console.error('[MySQL Error] POST /api/users:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET & POST /api/bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const [bookings] = await pool.query('SELECT * FROM bookings ORDER BY createdAt DESC');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post(['/api/bookings', '/api/book-session'], async (req, res) => {
  try {
    const b = req.body;
    const id = b.id || 'bs-' + Date.now();
    const meetLink = b.meetLink || `https://meet.google.com/wen-${Date.now().toString(36)}`;

    await pool.query(`
      INSERT INTO bookings (id, userName, userEmail, mentorId, mentorName, mentorRole, date, time, objective, status, meetLink)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [id, b.userName || 'Founder', b.userEmail || 'founder@wen.org', b.mentorId || '', b.mentorName || 'Mentor', b.mentorRole || 'Advisor', b.date || '2026-10-15', b.time || '10:00 AM', b.objective || 'Mentorship', b.status || 'Confirmed', meetLink]);

    const [[saved]] = await pool.query('SELECT * FROM bookings WHERE id = ?', [id]);
    res.status(201).json({ success: true, bookingId: id, booking: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET & POST /api/products
app.get('/api/products', async (req, res) => {
  try {
    const [products] = await pool.query('SELECT * FROM products ORDER BY createdAt DESC');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const p = req.body;
    const id = p.id || 'p-' + Date.now();
    const tags = Array.isArray(p.tags) ? p.tags.join(', ') : (p.tags || '');

    await pool.query(`
      INSERT INTO products (id, title, category, price, originalPrice, businessName, founderName, rating, reviews, location, image, description, inStock, tags)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [id, p.title || 'Product', p.category || 'Handmade', Number(p.price) || 999, Number(p.originalPrice) || 1299, p.businessName || 'Brand', p.founderName || 'Founder', Number(p.rating) || 5.0, Number(p.reviews) || 1, p.location || 'India', p.image || '', p.description || '', p.inStock !== false ? 1 : 0, tags]);

    const [[saved]] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
    res.status(201).json({ success: true, productId: id, product: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET & POST /api/posts
app.get('/api/posts', async (req, res) => {
  try {
    const [posts] = await pool.query('SELECT * FROM posts ORDER BY createdAt DESC');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const p = req.body;
    const id = p.id || 'post-' + Date.now();
    const comments = typeof p.comments === 'string' ? p.comments : JSON.stringify(p.comments || []);

    await pool.query(`
      INSERT INTO posts (id, author, role, avatar, badge, timestamp, category, title, content, likes, comments)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [id, p.author || 'Member', p.role || 'Entrepreneur', p.avatar || '', p.badge || '', p.timestamp || 'Just now', p.category || 'General Discussion', p.title || 'Discussion', p.content || '', Number(p.likes) || 1, comments]);

    const [[saved]] = await pool.query('SELECT * FROM posts WHERE id = ?', [id]);
    res.status(201).json({ success: true, postId: id, post: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SPA Fallback
app.use((req, res) => {
  const indexPath = fs.existsSync(path.join(FRONTEND_DIR, 'index.html'))
    ? path.join(FRONTEND_DIR, 'index.html')
    : path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

// Start MySQL Server
initMySQL().then(() => {
  app.listen(PORT, () => {
    console.log('==================================================================');
    console.log('  WOMEN ENTREPRENEUR NETWORK (WEN) - MYSQL RELATIONAL SERVER');
    console.log('  Database: REAL MYSQL 8.0 DATABASE (wen_database)');
    console.log('  Tagline:  Connect • Learn • Grow');
    console.log('  Vision:   Stronger Women • Stronger Businesses • A Brighter Tomorrow');
    console.log('==================================================================');
    console.log(`  🚀 Server is LIVE at:    http://localhost:${PORT}/`);
    console.log(`  📊 Database Status API: http://localhost:${PORT}/api/status`);
    console.log(`  👥 MySQL Users API:     http://localhost:${PORT}/api/users`);
    console.log(`  🛢️ MySQL Server Target:  ${dbConfig.host}:${dbConfig.port} / ${dbConfig.database}`);
    console.log('==================================================================');
  });
});
