export default (res, statusCode, data) => {
    return res.status(statusCode).send({
        error: false,
        data
    })
}