import userRepo from "../user/user.repo";
import { giftConstants } from "./gifts.constants"
import giftsRepo from "./gifts.repo"


const getLivePoints = async (username:string)=>{
    const userData:any = await userRepo.getOneByUsername(username);
    console.log(userData)
    const userPoints:number = userData.toJSON().points.livePoints;
    return userPoints
}


const getCurrentGift =  async(username:string)=>{
     try {
         const userPoints =await getLivePoints(username);
         return await giftsRepo.getCurrent(userPoints);
     } catch (error) {
        throw error
     }
}

const getNextGift =async (username:string)=>{
    try {
        const userPoints:any = await getLivePoints(username);
        console.log(userPoints);
         return await giftsRepo.getNext(userPoints);
    } catch (error) {
        throw giftConstants.FAILED_TO_FETCH
    }
}

const getGiftPoints=async(id:string)=>{
    try {
        return await giftsRepo.getGiftPoints(id);
    } catch (error) {
        throw giftConstants.FAILED_TO_FETCH
    }
}

export default{
    getCurrentGift,
    getNextGift,
    getGiftPoints
}