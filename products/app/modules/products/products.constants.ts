import { MessageHandler } from "../../utility/response-handler";

export const productConstants ={
    NO_PRODUCTS: new MessageHandler(401,"Your Store Has No Products!!"),
    UPDATED:new MessageHandler(200,"Product Updated!!!"),
    FAILED_TO_UPDATE: new MessageHandler(404,"Failed To Update!!!"),
    PRODUCT_DELETED:new MessageHandler(200,"Product Deleted!!!"),
    FAILED_TO_DELETE: new MessageHandler(404,"Failed To Delete!!!"),
    PRODUCT_ADDED: new MessageHandler(200,"Product Added Sucessfully!!!"),
    PRODUCT_INSERTED: new MessageHandler(200,"Product Insesrted Sucessfully!!!"),
    INSERT_FAILED: new MessageHandler(400,"Id Cannot Be Same!!!")
}