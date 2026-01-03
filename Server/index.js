const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://safe-bangladesh-org.web.app'
  ],
  credentials: true
}));
app.use(express.json());

// MongoDB URI (with DB name)
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rtselns.mongodb.net/${process.env.DB_NAME}?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db(process.env.DB_NAME);
const blogCollections = db.collection("blog");

app.get('/blogs',async(req,res)=>{
 try {
        const cursor = blogCollections.find();
        const blogs = await cursor.toArray();
        res.send(blogs);
      } catch (error) {
        res.status(500).send({ message: "Failed to retrieve worker applications", error: error.message });
      }
})

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}
run();

// test route
app.get('/', (req, res) => {
  res.send('This is Safe Bangladesh Organization server is running!');
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
