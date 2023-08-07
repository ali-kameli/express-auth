exports.notFoundPage = (req, res, next) => {
    res.send({
        statusCode: 404,
        message: 'not found page'
    })
}
exports.errorHandler = (err, req, res, next) => {
    const status = err?.status ?? err?.statusCode ?? 500;
    res.send({
        statusCode: status,
        message: err?.message ?? "internal server error"
    })
}