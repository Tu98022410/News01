const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/Users");
const Post = require("./models/Posts");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const middleware = require("./middlewares/authorization");
const postRouter = require("./routes/PostRouter");
const userRouter = require("./routes/UserRouter");

require("dotenv").config();
// console.log(process.env);

app.use(express.json());
app.use(cors());
app.use(postRouter);
app.use(userRouter);

const MONGODB_URL = process.env.MONGODB_URL;
const connection = mongoose.connection
mongoose.connect(MONGODB_URL, {
  autoIndex: true,
});


connection.once("open", () => {
  console.log("Successfully connected to MongoDB server");
});

app.get("/", middleware, async (req, res) => {
  const users = await User.find().lean(); // exec()
  res.send({
    data: users,
  });
});

app.get("/posts", async (req, res) => {
  // console.log(req.body, req.query)
  const posts = await Post.find().populate("author");
  res.send({
    data: posts,
  });
});
app.get("/posts/:postId", async (req, res) => {
  const postId = req.params.postId;
  const post = await Post.findById(postId).populate("author");
  res.send({
    data: post,
  });
});

app.post("/posts", middleware, async (req, res) => {
  const { title, body, coverImage, description } = req.body;
  console.log(req.locals.userId);
  try {
    const post = await Post.create({
      title,
      body,
      coverImage,
      description,
      author: res.locals.userId,
    });
    res.send({
      message: "Post added",
    });
  } catch (e) {
    res.send({
      error: e,
    });
  }
});


app.listen(3001, () => {
  console.log("web server is running on port 3001");
});