import { model, Schema } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IPoints } from "./points.types";


export  const pointSchema = new BaseSchema({

    totalPoints:{
        type:Number,
        default:0
    },
    livePoints:{
        type:Number,
        default:0
    },
    pointsCreditDate:{
        type:Date
    },
    pointsExpiryDate:{
        type:String
    },
    lapsedPoints:{
        type:Number,
        default:0
    },
    redeemPoints:{
        type:Number,
        default:0
    }
   
});

type IPointsDocument = Document & IPoints

export const pointsModel = model<IPointsDocument>("points",pointSchema);