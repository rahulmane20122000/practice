import { model } from "mongoose";
import { ROLES } from "../roles/roles.constants";
import { BaseSchema } from "../../utility/base.schema";
import { pointSchema } from "../points/points.schema";
import { Iuser } from "./user.types";

const userDetailsSchema = new BaseSchema({
    distributorName: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: ROLES.DISTRIBUTOR
    },

    notifications: {
        type: [{ message: String, isRead: Boolean }],
    },
    points: {
        type: pointSchema,
    },
    giftsClaimed: {
        type: [String]
    }
});


type IUserDocument = Document & Iuser

export const userModel = model<IUserDocument>("userDetails", userDetailsSchema);



