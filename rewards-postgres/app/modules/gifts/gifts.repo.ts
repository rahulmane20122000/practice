import { giftsModel } from "./gifts.schema";

const getNext = (points:number)=> giftsModel.find({pointsRequired:{$gte:points}});

const getCurrent = (points:number)=> giftsModel.find({pointsRequired:{$lte:points}});

const getGiftPoints = (giftId:string)=> giftsModel.findOne({_id:giftId}).select("pointsRequired")

export default {getNext,getCurrent,getGiftPoints}