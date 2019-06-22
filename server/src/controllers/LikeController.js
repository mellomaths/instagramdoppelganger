const Post = require('../models/Post');

const create = async (req, res) => {
    const post = await Post.findById(req.params.id);

    post.likes++;
    await post.save();

    return res.json({ post });
};

module.exports = {
    create
};
