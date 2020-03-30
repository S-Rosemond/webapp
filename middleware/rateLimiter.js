const rateLimit = require('express-rate-limit')

/* 
potential update: add req limit to schema, get ip from req, create a method to reset max, create method to check for ip and prevent req w/error. 
*/

const limiter = ( 
    max = 100, 
    message = 'Too many requests, please try again later.', 
    msTimeLimit = 600000  ) => {

    // Future ref: |60 * 1000| = 1min
    
   return  rateLimit({
        windowMs: msTimeLimit,
        max,
        message

    })
}

module.exports = limiter