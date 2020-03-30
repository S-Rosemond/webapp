const sendResponse = (res, data, statusCode = 200) => {
    res.status(statusCode).json({success: true, data})
}

module.exports = sendResponse;