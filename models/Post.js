const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Post Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Post = mongoose.model('posts', PostSchema);