const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:5173',"http://localhost:5174",'https://safe-bangladesh-org.web.app','https://www.nirapodbangladesh.org/',"https://www.nirapodbangladesh.org"],
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
const bannerCollection =db.collection("banner")
const galleryCollection = db.collection("galleries");
const allTeamMember = db.collection("team")
//-------------------blog API start-----------
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
//all blogs for admin page
app.get("/allblogs",async(req,res)=>{
  try{
    const AllBlogs=await blogCollection.find().toArray()
    res.send(AllBlogs)
  }
  catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error fetching blogs", error: err.message });
  }
})

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

// CREATE blog
app.post("/blogs",async (req, res) => {
const blog = req.body;
const result =await blogCollection.insertOne(blog);
  res.send(result);
});

// UPDATE blog
app.put("/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = req.body;

    const result = await blogCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updated }
    );

    res.send(result);
  } catch (error) {
    console.error("Update blog error:", error);
    res.status(500).send({ message: "Failed to update blog", error: error.message });
  }
});

// DELETE blog
app.delete("/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await blogCollection.deleteOne({ _id: new ObjectId(id) });

    res.send(result);
  } catch (error) {
    console.error("Delete blog error:", error);
    res.status(500).send({ message: "Failed to delete blog", error: error.message });
  }
});
//-------------------blog API end-----------


//--------------Latest work API start---------------
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

//Create single work
app.post("/latestwork",async (req, res) => {
  const work =req.body;
const result =await latestWorkCollection.insertOne(work);
  res.send(result);
});

//update single work
app.put("/latestwork/:id",async (req, res) => {
try{
  const { id } = req.params;
const updated =req.body;
const result =await
latestWorkCollection.updateOne(
    {_id:new ObjectId(id) },
    {$set: updated }
  );
  res.send(result);
}
catch (error) {
    console.error("Update latest work error:", error);
    res.status(500).send({ message: "Failed to update latest work", error: error.message });
  }
});

//delete single work
app.delete("/latestwork/:id",async (req, res) => {
try{
  const { id } = req.params;
const result =await latestWorkCollection.deleteOne({
_id: new ObjectId(id),
  });
  res.send(result);
}catch (error) {
    console.error("Delete latest work error:", error);
    res.status(500).send({ message: "Failed to delete latest work", error: error.message });}
});
//--------------Latest work API end ---------------

//------------------banner API start -------------
//all banner for admin page
app.get("/allbanner",async(req,res)=>{
  try{
    const allBanner =await bannerCollection.find().toArray()
    res.send(allBanner)
  }
  catch(error){
    res.status(404)
  }
})

//banner by=> pagepath for individual page
app.get("/banner", async (req, res) => {
  try {
    const { pagePath } = req.query;

    const bannerImage = await bannerCollection.findOne({ pagePath });

    res.send(bannerImage);
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch banner" });
  }
});

//---------------banner API end -----------

///-----------Gallery API start -------------
//all gallery data for admin page
app.get("/galleries", async (req, res) => {
  try {
    const galleries = await galleryCollection.find().toArray();
    res.send(galleries);
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch galleries" });
  }
});

//individual categoris gallery image collection
app.get("/galleries/:category", async (req, res) => {
  try {
    const { category } = req.params;
// console.log(category)
    const gallery = await galleryCollection.findOne({ category });

    if (!gallery) {
      return res.status(404).send({ message: "Gallery not found" });
    }

    res.send(gallery);
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch gallery" });
  }
});
//---------------Gallery API end ----------------

//-----------------Team API start ------------
//get all team member for normal and admin page
app.get("/team",async(req,res)=>{
  try{
    const allMember = await allTeamMember.find().toArray()
    res.send(allMember)
  }
  catch (error) {
    res.status(500).send({ message: "Failed to fetch galleries" });
  }
})
//post team member
app.post("/team",async (req, res) => {
const result =await allTeamMember.insertOne(req.body);
  res.send(result);
});
//update single team member
app.put("/team/:id",async (req, res) => {
const { id } = req.params;
const result =await allTeamMember.updateOne(
    {_id: new ObjectId(id) },
    {$set: req.body }
  );
  res.send(result);
});
//delete team member
app.delete("/team/:id",async (req, res) => {
const { id } = req.params;
const result =await allTeamMember.deleteOne({
_id: new ObjectId(id),
  });
  res.send(result);
});


app.get('/',(req,res)=>{
  res.send("Runnig the server of Safe Bangladesh Organization")
})
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}

run();

app.listen(port, () => console.log(`Server running on port ${port}`));