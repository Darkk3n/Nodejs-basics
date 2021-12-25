const router = require("express").Router();
const Post = require("../model/postModel");

router.post("/createPost", async (req, res) => {
    const title = req.body.title;
    const desc = req.body.description;
    const newPost = new Post(
        {
            title: title, description: desc
        });
    const savedPost = await newPost.save();
    res.json(savedPost);
});

router.get("/getPosts", async (req, res) => {
    res.json(await Post.find({}));
});

router.get("/getPost/:postId", async (req, res) => {
    const foundPost = await Post.findById(req.params.postId);
    res.json(foundPost);
});

router.patch("/editDesc/:postId", async (req, res) => {
    await Post.findByIdAndUpdate(req.params.postId, { $set: { description: req.body.description } });
    res.json({ "Status": "Updated" });
});

router.delete("/deletePost/:postId", async (req, res) => {
    await Post.remove({ _id: req.params.postId });
    res.json({ "Status": "Deleted" });
});

module.exports = router;