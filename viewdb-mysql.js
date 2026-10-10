/**
 * =========================================================================
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * MySQL Database Inspector CLI (viewdb-mysql.js)
 * Usage:
 *   node viewdb-mysql.js              (Display summary and contents of ALL MySQL tables)
 *   node viewdb-mysql.js users        (Display only 'users' MySQL table)
 *   node viewdb-mysql.js bookings     (Display only 'bookings' MySQL table)
 * =========================================================================
 */

const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DATABASE || 'wen_database'
};

const ALL_TABLES = ['users', 'bookings', 'products', 'posts', 'enquiries', 'registrations'];

function printHeader(title) {
  const line = '═'.repeat(78);
  console.log('\n' + line);
  console.log(`  📊 ${title}`);
  console.log(line);
}

async function inspectMySQL() {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    console.log(`✅ Connected to MySQL Database '${dbConfig.database}' on ${dbConfig.host}:${dbConfig.port}`);
  } catch (err) {
    console.error(`\n❌ [MySQL Connection Error] ${err.message}`);
    console.log(`👉 Please set MYSQL_PASSWORD environment variable or run setup-mysql.bat\n`);
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const firstArg = args[0] ? args[0].trim().toLowerCase() : 'all';

  if (firstArg === 'all') {
    printHeader(`MYSQL DATABASE SUMMARY (${dbConfig.database})`);
    const summary = [];
    for (const t of ALL_TABLES) {
      try {
        const [rows] = await conn.query(`SELECT COUNT(*) as count FROM \`${t}\``);
        summary.push({ 'Table Name': t, 'Total Records': rows[0].count, 'Status': 'Active' });
      } catch (e) {
        summary.push({ 'Table Name': t, 'Total Records': 0, 'Status': 'Not Found' });
      }
    }
    console.table(summary);

    for (const t of ALL_TABLES) {
      try {
        const [rows] = await conn.query(`SELECT * FROM \`${t}\` ORDER BY createdAt DESC`);
        printHeader(`MYSQL TABLE: ${t.toUpperCase()} (${rows.length} records)`);
        if (rows.length > 0) {
          console.table(rows);
        } else {
          console.log(`  (Table '${t}' is empty)`);
        }
      } catch (e) {}
    }
  } else if (ALL_TABLES.includes(firstArg)) {
    const [rows] = await conn.query(`SELECT * FROM \`${firstArg}\` ORDER BY createdAt DESC`);
    printHeader(`MYSQL TABLE: ${firstArg.toUpperCase()} (${rows.length} records)`);
    console.table(rows);
  }

  await conn.end();
}

inspectMySQL();
