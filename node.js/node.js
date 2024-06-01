const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://siteglob:aeronavegabilidad@clusterhiggs.eps9f2b.mongodb.net/";

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
