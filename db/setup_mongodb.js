/**
 * =========================================================================
 * WOMEN ENTREPRENEUR NETWORK (WEN) - MONGODB DATABASE SETUP SCRIPT
 * Target Database: wen_db
 * Target Collection: users
 * Connection URI: mongodb://localhost:27017/wen_db
 * MongoDB Shell: mongosh "mongodb://localhost:27017/wen_db"
 * =========================================================================
 */

// 1. Switch to wen_db database
use wen_db;

// 2. Drop existing users collection if resetting schema
// db.users.drop();

// 3. Create users collection with JSON Schema Validation
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "loginTime"],
      properties: {
        name: {
          bsonType: "string",
          description: "Founder or User full name - required string"
        },
        email: {
          bsonType: "string",
          description: "Email address - required string"
        },
        role: {
          bsonType: "string",
          description: "User role or founder title"
        },
        businessName: {
          bsonType: "string",
          description: "Company or startup name"
        },
        loginTime: {
          bsonType: "string",
          description: "Login timestamp"
        }
      }
    }
  }
});

// 4. Seed Initial Female Founders & Mentors
db.users.insertMany([
  {
    name: "rahi",
    email: "rahi@wen.network",
    role: "Early-Stage Startup Founder",
    businessName: "Rahi Innovations",
    loginTime: new Date().toISOString()
  },
  {
    name: "Ananya Deshmukh",
    email: "ananya@yourventure.com",
    role: "Early-Stage Startup Founder",
    businessName: "EcoStyle Studios",
    loginTime: new Date().toISOString()
  },
  {
    name: "Priya Sharma",
    email: "priya@sharma-tech.com",
    role: "Mentor & Advisor",
    businessName: "Sharma Tech Ventures",
    loginTime: new Date().toISOString()
  }
]);

// 5. Verify Stored User Documents
print("==================================================================");
print("  [MONGODB INITIALIZATION] Collection 'users' created in 'wen_db'!");
print("==================================================================");
printjson(db.users.find().toArray());
