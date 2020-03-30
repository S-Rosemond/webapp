const asyncHandler = require('../middleware/asyncHandler')
const sendTokenResponse = require('../utils/sendTokenResponse')
const ErrorResponse = require('../util/ErrorResponse')
const User = require('../model/User')

exports.register = asyncHandler(async (req, res, next) => {
    let {name, email, password} = req.body
    password = password.toString()
 
    let user = await User.findOne({email})
 
    if(user) {
        return next(new ErrorResponse('Email already in use', 400))
    }
 
    user = await User.create({name, email, password})
 
    sendTokenResponse(res, user)
    
 })