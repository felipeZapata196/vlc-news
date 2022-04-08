const mongoose = require('mongoose');
const slugify = require('slugify');

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: [true, 'a post must have a category'],
            enum: {
                values: ['science', 'music', 'philosophy'],
                message: 'la categoria tiene que ser: '
            }
            

        },
        content: {
            type: String
        },
        large: {
            type: Number,
            required: true
        },
        autor: {
            type: String,
            required: true
        },
        visits: {
            type: Number
            
        },
        lectureTime: {
            type: Number
        },
        likes: {
            type: Number
        },
        rating: {
            type: Number

        }
    


    });

const Blog = mongoose.model('Post', BlogSchema);

module.exports = Blog;