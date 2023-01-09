export class ResponseHandler {
    constructor(
        public data: any,
        public error: any = null
    ) {}
}

export class MessageHandler{
    constructor(public statusCode:Number,public message:string){}
}