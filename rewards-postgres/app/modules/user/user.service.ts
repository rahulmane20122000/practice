import { sendEmail } from "../../utility/email";
import { createHash } from "../../utility/password";
import { userConstants } from "./user.constants";
import userRepo from "./user.repo"
import { IDistributor, IUserProducts } from "./user.types";
import { generate } from 'generate-password'
import { pointsConstants } from "../points/points.constants";
import pointsService from "../points/points.service";
import csv from 'csvtojson';
import productsService from "../products/products.service";
import { giftConstants } from "../gifts/gifts.constants";
import giftsService from "../gifts/gifts.service";


const getAllDistributorsPoints = async () => {
  try {
    const data = await userRepo.getAll();
    return data
  } catch (error) {
    throw userConstants.FAILED_TO_FETCH
  }
}


const addDistributor = async (distributorDetails: IDistributor, createdBy: string) => {
  try {
    const password = generate({ length: 6, numbers: true });
    const originalPassword = password;
    const hashedPassword = createHash(password)
    await sendEmail(distributorDetails.email, "Your Account is Active Now", `Your Login Details \n username:${distributorDetails.username}\n password:${originalPassword}`);
    await userRepo.add(hashedPassword, distributorDetails, createdBy);
    return userConstants.DISTRIBUTOR_CRATED;
  } catch (error) {
    throw error
  }
}

const editDistributor = async (updatedDetails: any, id: string) => {
  try {
    await userRepo.updateById(updatedDetails, id);
    return userConstants.DISTRIBUTOR_UPDATED
  } catch (error) {
    throw userConstants.FAILED_TO_UPDATE
  }
}

const deleteDistributor = async (id: string) => {
  try {
    await userRepo.deleteUserById(id);
    return userConstants.DISTRIBUTOR_DELETED
  } catch (error) {
    throw error;
  }
}


const getNotificationById = async (id: string) => {
  try {
    const response = await userRepo.getNotificationById(id);
    return response;
  } catch (error) {
    throw userConstants.FAILED_TO_FETCH
  }
}

const sendNotification = async (distributorIds: string[], message: string) => {
  try {
    await userRepo.sendNotificationById(distributorIds, message);
    return userConstants.NOTIFICATION_SENT;
  } catch (error) {
    throw userConstants.FAILED_TO_SEND;
  }
}

const getMyPoints = async (id: string) => {
  try {
    const response = await pointsService.getMyPoints(id);
    return response;
  } catch (error) {
    throw pointsConstants.FAILED_TO_FETCH
  }
}

const assignExpiry = (expiry: Date) => {
  let expiryDate;
  if (!expiry) {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    expiryDate = new Date(year + 1, month, day).toLocaleString();
  }
  return expiryDate;
}


const fileRead = async (csvFile: any) => {
  try {
    const records = await csv().fromFile(csvFile);
    for (let record of records) {
      const productPoints: any = await productsService.getProdctPoints(record.companyname, record.productname);
      const userPoints: any = await userRepo.getOneByUsername(record.username);
      const expiryDate = assignExpiry(userPoints.points.pointsExpiryDate);
      const livePoints = productPoints.toJSON().productpoints * record.quantity;
      const totalPoints = userPoints.toJSON().points.redeemPoints + livePoints;
      const currentPoints = { totalPoints: totalPoints, livePoints: livePoints, pointsExpiryDate: expiryDate };
      const pointsAfterExpiry = {totalPoints: 0, livePoints: 0,lapsedPoints:userPoints.points.livePoints ,pointsExpiryDate: userPoints.points.pointsExpiryDate}
      // const points = userPoints.points.pointsExpiryDate.split(',')[0]===new Date().toLocaleString().split(',')[0] ? pointsAfterExpiry:currentPoints;
      const points  = userPoints.points.pointsExpiryDate?userPoints.points.pointsExpiryDate.split(',')[0]===new Date().toLocaleString().split(',')[0]?pointsAfterExpiry:currentPoints:currentPoints;
      await userRepo.updatePoints(record.username, points);
    }

    return pointsConstants.POINTS_UPDATED;
  } catch (error) {
    console.log(error);
    throw pointsConstants.UPDATE_FAILED;
  }
}


const claimGift = async (giftId: string, userId: string) => {
  try {
    const giftPoints = await giftsService.getGiftPoints(giftId);
    console.log(giftPoints?.toJSON().pointsRequired);
    await userRepo.updateGifts(giftId, userId, giftPoints?.toJSON().pointsRequired)
    return giftConstants.GIFT_CLAIMED
  } catch (error) {
    throw giftConstants.FAILED_TO_CLAIMED
  }
}


export default { getAllDistributorsPoints, addDistributor, editDistributor, deleteDistributor, getNotificationById, sendNotification, getMyPoints, fileRead, claimGift }