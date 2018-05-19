const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentModel = new Schema({

    Comment: {
        type: String,
        required: true
    }
});

let Comment = mongoose.model('Comment', CommentModel);

module.exports = Comment;