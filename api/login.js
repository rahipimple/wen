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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, role, businessName } = req.body || {};
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const client = await getClient();
    const db = client.db('wen_db');
    const usersCollection = db.collection('users');

    const userDoc = {
      name: name.trim(),
      email: email.trim(),
      role: role || 'Early-Stage Startup Founder',
      businessName: (businessName || 'Founder Venture').trim(),
      loginTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
      createdAt: new Date()
    };

    await usersCollection.updateOne(
      { email: email.trim().toLowerCase() },
      { $set: userDoc },
      { upsert: true }
    );

    return res.status(200).json({
      success: true,
      message: `User '${name}' stored in MongoDB Atlas successfully!`,
      user: userDoc
    });
  } catch (error) {
    console.error('Atlas Error:', error);
    return res.status(500).json({ error: 'Database write failed', details: error.message });
  }
};
