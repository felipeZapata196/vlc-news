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
                values: ['international', 'society', 'national-politics',  'sports', 'tecnology'],
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

        },
        image: {
            type: String,
            required: [true, 'la noticia debe tener una imagen de portada']
        }
    


    });

const Blog = mongoose.model('Post', BlogSchema);

module.exports = Blog;