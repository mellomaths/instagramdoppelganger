const Post = require('../models/Post');

const index = async (req, res) => {};

const create = async (req, res) => {
    return res.json({ ok: true });
};

module.exports = {
    index,
    create
};
