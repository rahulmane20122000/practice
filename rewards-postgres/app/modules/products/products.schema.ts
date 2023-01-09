import { model, Schema } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IProducts } from "./products.types";


const productSchema = new BaseSchema({
    productName : {
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    productsPoints:{
        type:Number,
        required:true
    }
})

type IProductDocument = Document & IProducts


export const productsModel = model<IProductDocument>("products",productSchema);