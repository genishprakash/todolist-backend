
const { MongoClient, ServerApiVersion } = require('mongodb');

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const uri = `mongodb+srv://genishprakash:${password}@todolist.s4ctsus.mongodb.net/?retryWrites=true&w=majority&appName=todolist`    ;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

try {
    conn = await client.connect();
    console.log("connection successful")
  } catch(e) {
    console.error(e);
  }
  let db = conn.db("integration_ninjas");
  export default db;

