const Post = require('../models/Post');

const index = async (req, res) => {
    const posts = await Post.find().sort('-createdAt');

    return res.json({ posts });
};

const create = async (req, res) => {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    const post = await Post.create({
        author,
        place,
        description,
        hashtags,
        image
    });

    return res.json({ post });
};

module.exports = {
    index,
    create
};
