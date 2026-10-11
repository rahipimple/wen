const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://rahipimple26_db_user:Fr6yishVNjxGmZBW@cluster0.8afkhto.mongodb.net/wen_db?retryWrites=true&w=majority&appName=Cluster0";
let cachedClient = null;

async function getClient() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const client = await getClient();
    const db = client.db('wen_db');
    const usersCollection = db.collection('users');

    const users = await usersCollection.find({}).sort({ _id: -1 }).toArray();

    return res.status(200).json({
      database: 'MongoDB Atlas Cloud (wen_db.users)',
      totalDocuments: users.length,
      users: users.map(u => ({
        name: u.name,
        email: u.email,
        role: u.role,
        businessName: u.businessName,
        loginTime: u.loginTime || new Date().toISOString().replace('T', ' ').substring(0, 19)
      }))
    });
  } catch (error) {
    console.error('Atlas Read Error:', error);
    return res.status(500).json({ error: 'Database read failed', details: error.message });
  }
};
