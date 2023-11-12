class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    
    //описание возможных ошибок
    static badRequest(message) {
        return new ApiError(400, message)
    }
    
    static internal() {
        return new ApiError(500, 'Непредвиденная ошибка')
    }


}

module.exports = ApiError