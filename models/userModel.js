const mongoose = require('mongoose');
const slugify = require('slugify');
const bcrypt = require('bcryptjs')
const validator = require('validator');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true

        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            validator: [validator.isEmail, 'please provide a valid email']

        },
        role: {
            type: String,
            enum: ['user', 'suscriptor', 'writer', ' admin' ],
            default: 'user'
        },
        password: {
            type: String,
            require: true,
            minlength: 8,
            select: false

        },
        passwordConfirm: {
            type: String,
            require: true,
            validate:{
                validator: function(el) {
                    return el === this.password
                },
                message: 'Passwords are not the same!'
            }

        }, passwordChangedAt: Date,
        passwordResetToken: String,
        passwordResetExpires: Date,
        active: {
            type: Boolean,
            default: true,
            select: false
        }

    });





//encriptar la contraseña que se guarda
UserSchema.pre('save', async function(next) {

    if(!this.isModified('password')) return next();

    this.password = await bcryp.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next()
});

//decir cuando ha sido modificada la contraseña
UserSchema.pre('save', function(next){

    if(!this.isModified('password') || this.isNew) return next();

    this.passwordChangedAt = Date.now() -1000;
    next()
});

UserSchema.pre(/^find/, function(next){
    this.find({active: {$ne: false}});
    next();
});

UserSchema.methods.correctPassword = async function(
    candidatePassword, 
    userPassword
    ){
    return await bcrypt.compare(candidatePassword, userPassword);
}


UserSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
    if(this.passwordChangedAt){
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        return changedTimestamp> JWTTimestamp
    }
    return false;
}

UserSchema.methods.createPasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    this.passwordResetExpires = Date.now()+ 10 * 60 + 1000

    return resetToken;
}


const User = mongoose.model('User', UserSchema );

module.exports = User;