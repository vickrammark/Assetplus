var router = require("express").Router();
const postModal = require("../models/Post");
const mongoose=require('mongoose')
router.post("/upload", async (req, res) => {
  const { title, description, imagePreview: imageUrl } = req.body;
  const post = await postModal.create({
    title,
    description,
    imageUrl,
  });
  res.send(post);
});
router.get("/get", async (req, res) => {
  const posts = await postModal.find();
  res.send(posts);
});
router.delete("/delete", async (req, res) => {
  const { id } = req.body;
  const posts = await postModal.deleteOne({ _id: mongoose.Types.ObjectId(id) });
  res.send(posts);
});

router.use("/post", require("./post"));

module.exports = router;
