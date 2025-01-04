

const sendResponse = (res,code,status,message,data) =>{

    res.status(code).json({
        status,
        message,
        data
    })
}

module.exports = {
    sendResponse
}