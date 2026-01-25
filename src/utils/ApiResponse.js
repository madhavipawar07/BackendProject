class ApiResponse{
    constructor(statusCode, message, data = "Success"){
        this.message = message
        this.data = data
        this.success = statusCode < 400;

    }
}