
const express = require("express");
const Post = require("../models/Posts");
const middleware = require("../middlewares/authorization");
const postRouter = express.Router();

postRouter.get("/posts", async (req, res) => {
    const page = req.query.page || 1;
    const perPage = req.query.per_page || 5;
  
    const offset = (page - 1) * perPage;
  
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .populate("author")
      .limit(perPage)
      .skip(offset);
    res.send({
      data: posts,
      page,
      perPage,
    });
  });
  
  postRouter.get("/posts/:postId", async (req, res) => {
    const postId = req.params.postId;
    const post = await Post.findById(postId).populate("author");
    res.send({
      data: post,
    });
  });
  
  postRouter.post("/posts", async (req, res) => {
    const { title, body, coverImage,description, userId } = req.body;
    console.log(res)
    try {
      await Post.create({
        title,
        body,
        coverImage,
        description ,
        author: res.locals.userId,
      });
      res.send({
        message: "Post added",
      });
    } catch (e) {
      res.status(400).send({
        error: e,
      });
      console.log(e)
    }
  });
  
  module.exports = postRouter;