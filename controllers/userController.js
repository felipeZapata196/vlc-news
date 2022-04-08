const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if(allowedFields.includes(el)) newObj[el] = obj[el];
    })
    return newObj;
}


exports.getAllUsers = async(req, res) => {
    const users = await User.find();
    res.status(200).json({
        status: 'succes',
        data: {
            users
        }
    })
};

exports.createUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'esta ruta todavía no existe'
    })
};

exports.updateMe = catchAsync(async (req, res, next) => {

    if(req.body.password || req.body.passwordConfirm){
        return next(AppError('this route is not for password updates', 400))

    }

    const filteredBody = filterObj(req.body, 'name', 'email');

    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        status: 'succes'
    })
})

exports.deleteMe = catchAsync(async(req, res, next)=> {
    await User.findByIdAndUpdate(req.user.id, {active: false});
    res.status(204).json({
        status: 'succes',
        data: null
    })
})