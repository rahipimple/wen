const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const uri = "mongodb+srv://rahipimple26_db_user:Fr6yishVNjxGmZBW@cluster0.8afkhto.mongodb.net/wen_db?retryWrites=true&w=majority&appName=Cluster0";
const targetFile = path.join(__dirname, 'db', 'wen_users_database.json');

async function sync() {
  console.log("==================================================================");
  console.log("  PULLING LATEST USERS FROM MONGODB ATLAS CLOUD INTO CODEBASE...");
  console.log("==================================================================");

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('wen_db');
    const users = await db.collection('users').find({}).sort({ _id: 1 }).toArray();

    console.log(`Found ${users.length} user document(s) in MongoDB Atlas cloud.`);

    const lines = users.map(u => JSON.stringify({
      name: u.name,
      email: u.email,
      role: u.role,
      businessName: u.businessName,
      loginTime: u.loginTime
    }));

    fs.writeFileSync(targetFile, lines.join('\n') + '\n', 'utf8');
    console.log(`Successfully updated local code file:`);
    console.log(`-> ${targetFile}`);
    console.log("------------------------------------------------------------------");
    users.forEach((u, i) => {
      console.log(`  #${i + 1}: ${u.name} (${u.email}) - ${u.businessName || u.role}`);
    });
    console.log("==================================================================");
  } catch (err) {
    console.error("Sync Error:", err.message);
  } finally {
    await client.close();
  }
}

sync();
