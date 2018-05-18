const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ArticleModel = new Schema({

    title: {
        type: String,
        required: true
    }, 
    summary: {
        type: String,
        required: true
    }, 
    link: {
        type: String
    }, 
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
})

let Article = mongoose.model('Article', ArcticleModel);

module.exports = Aricle




















