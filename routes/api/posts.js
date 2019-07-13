const express = require('express');
const router = express.Router();

//  Posts Model
const Post = require('../../models/Post');

router.get('/', (req, res) => {
    Post.find()
        .then((posts) => {
            res.json(posts);
        })
});

router.post('/', (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description
    });

    newPost.save()
        .then((post) => res.json({ "message": "Successfully created!", post }))
        .catch((err) => res.json({ "message": "Unable to create a Post" }));
});

router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then((post) => res.json({ "message": "Successfully updated!", post }))
        .catch((err) => res.json({ "message": "Unable to update a Post" }));
});

router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id)
        .then((post) => post ? res.json({ "message": "Successfully deleted!", post }) : res.json({ "message": "Unable to delete post with id: " + req.params.id }))
        .catch((err) => res.json({ "message": "Unable to delete post with id: " + req.params.id }));
});

module.exports = router;
