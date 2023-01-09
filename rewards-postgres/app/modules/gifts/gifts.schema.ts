import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";

const giftsSchema = new BaseSchema({
    giftName:{
        type:String,
        required:true
    },
    giftDetails:{
        type:String,
        required:true
    },
    pointsRequired:{
        type:Number,
        required:true
    }
});


export const giftsModel = model('gifts',giftsSchema);