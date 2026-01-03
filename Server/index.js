const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:5173', 'https://safe-bangladesh-org.web.app'],
  credentials: true
}));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rtselns.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const blogCollection = db.collection("blog");
const latestWorkCollection = db.collection("latestwork");


    // GET blogs with pagination
  app.get("/blogs", async (req, res) => {
  try {
    // Get page and limit from query params, default values
    const { page = 1, limit = 9 } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const totalBlogs = await blogCollection.countDocuments(); // count all blogs

    const blogs = await blogCollection
      .find()
      .sort({ _id: -1 }) // latest blog first
      .skip(skip)
      .limit(parseInt(limit))
      .toArray();

    res.send({
      blogs,
      totalBlogs,
      totalPages: Math.ceil(totalBlogs / limit),
      currentPage: parseInt(page),
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error fetching blogs", error: err.message });
  }
});


    // GET single blog
    app.get("/blogs/:id", async (req, res) => {
      try {
        const blog = await blogCollection.findOne({ _id: new ObjectId(req.params.id) });
        if (!blog) return res.status(404).send({ message: "Blog not found" });
        res.send(blog);
      } catch (err) {
        res.status(400).send({ message: "Invalid blog ID", error: err.message });
      }
    });

    // GET all latest works
 app.get("/latestwork", async (req, res) => {
  try {
    const works = await latestWorkCollection.find().toArray();
    res.send(works);
  } catch (err) {
    res.status(500).send({ message: "Error fetching latest works", error: err.message });
  }
});


    // GET single latest work by ID
    app.get("/latestwork/:id", async (req, res) => {
      try {
        const singleWork = await latestWorkCollection.findOne({ _id: new ObjectId(req.params.id) });
        if (!singleWork) return res.status(404).send({ message: "Work not found" });
        res.send(singleWork);
      } catch (err) {
        res.status(400).send({ message: "Invalid work ID", error: err.message });
      }
    });

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}

run();

app.listen(port, () => console.log(`Server running on port ${port}`));
