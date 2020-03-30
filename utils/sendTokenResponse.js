const sendTokenResponse = (res, user, statusCode = 200) => {
 const token =   user.signToken;

 /* 
 future ref: 
 orginal math: from proces JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000 
 60 is in ms --- | 24 * 60 * 60 * 1000 |= 86400000ms = 86400secs = 24hrs = 1day
 */
 const options = {
     expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * process.env.ONE_DAY),
     httpOnly: true
 }

 if(process.env.NODE_ENV === 'production') {
     options.secure = true
 }

 res.status(statusCode)
 .cookie('Chirps', token, options)
 .json({success: true, token})
}

module.exports = sendTokenResponse;