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
    },
    favoriteList: {
        type: Boolean,
        required: true
    }, 
    hasComments: {
        type: Boolean,
        required: true
    }, 
                    
});

let Article = mongoose.model('Article', ArticleModel);

module.exports = Article;




















