const Blog = require('./../models/blogModel');
const ApiFeatures = require('../utils/ApiFeatures');
const mongoose = require('mongoose');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');


exports.categoryScience = (req, res, next)=> {
    req.query.limit = '5';
    req.query.filter = 'science';
    req.query.fields = 'title, autor, ratings';

    next();
    

}

exports.categoryPhylosophy = (req, res, next)=> {
    req.query.limit = '5';
    req.query.filter = 'phylosophy';
    req.query.fields = 'title, autor, ratings';

    next();
    

}
exports.categoryMusic = (req, res, next)=> {
    req.query.limit = '5';
    req.query.filter = 'music';
    req.query.fields = 'title, autor, ratings';

    next();
    

}
exports.getAllPosts = catchAsync(async(req, res,next)=>{

    const features = new ApiFeatures(Blog.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()

    const posts = await features.query;
    
    res.status(200).json({
        status: 'succes',
        results: posts.length,
        data: [
            posts
        ]
    })

});

exports.getPost = catchAsync(async(req, res, next)=>{

    const post = await Blog.findById(req.params.id)
    if(!post){
        return(next (new AppError('No existe ningún post con este Id', 404 )));

    }
    res.status(200).json({
        status: 'succes',
        post
        
    })
});

exports.createPost = catchAsync(async(req, res, next)=>{

    const newPost = await Blog.create(req.body);
    res.status(200).json({
        status: 'succes',
        newPost
    })
});

exports.updatePost = catchAsync(async(req, res, next)=>{

    const post = await Blog.findByIdAndUpdate( 
        req.params.id,
        req.body, 
        {new:true, runValidators: true})
    
    if(!post){
        return(next (new AppError('No existe ningún post con este Id', 404 )));
    }
    res.status(200).json({
        status: 'succes',
        post
    })
});

exports.deletePost = catchAsync(async(req, res, next)=> {
    
   const post =  await Blog.findByIdAndDelete(req.params.id);
   if(!post){
    return(next(new AppError('No tour found whit that ID', 404)));
}
res.status(400).json({
    status: 'success',
    data: nul
})

});

exports.getPostStats = catchAsync(async (req, res, next)=> {

    const stats = await Blog.aggregate([
        {
            $match: {rating: {$gte: 1} }
        }, {
            $group: {
                _id: {$toUpper: '$autor'},
                numPosts: { $sum: 1},
                visitsAvg: {$avg: '$visits'},
                likesAvg: {$avg: '$likes'},
                ratingAvg: {$avg: '$rating'}

            }
        }
    ])
    res.status(200).json({
        status: 'succes',
        data: {
            stats
        }
    });
});


exports.getCategory = catchAsync(async (req, res, next)=> {

    const stats = await Blog.aggregate([
        {
            
        }, {
            $group: {
                _id: {$toUpper: '$category'},
                numPosts: { $sum: 1},
                visitsAvg: {$avg: '$visits'},
                likesAvg: {$avg: '$likes'},
                ratingAvg: {$avg: '$rating'}

            }
        }
    ])
    res.status(200).json({
        status: 'succes',
        data: {
            stats
        }
    });
});