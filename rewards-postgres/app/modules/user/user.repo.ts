
import { ROLES } from "../roles/roles.constants";
import { userModel } from "./user.schema"


const getAll = async () => await userModel.find({ isDeleted: false, role: ROLES.DISTRIBUTOR }).select('points');

const add = (password: string, details: any, createdBy: string) => userModel.create({ password, ...details, createdBy: createdBy, points: { createdBy: createdBy } });

const updateById = (updateDetails: any, id: string) => userModel.updateOne({ _id: id }, { ...updateDetails });

const deleteUserById = (id: string) => userModel.updateOne({ _id: id }, { $set: { isDeleted: true } });

const getNotificationById = (id: string) => userModel.find({ _id: id }).select('notifications');

const sendNotificationById = (idArray: string[], message: string) => userModel.updateMany({ _id: { $in: idArray } }, { $push: { notifications: { message: message, isRead: false } } });

const getOneByUsername = (username: string) => userModel.findOne({ username: username }).select('points');

const updatePoints = (username: string, points: any) => userModel.updateOne({ username: username }, { $set: { 'points.pointsExpiryDate':points.pointsExpiryDate },$inc:{'points.lapsedPoints':points.lapsedPoints?points.lapsedPoints:0,'points.totalPoints': points.totalPoints?points.totalPoints:-points.totalPoints, 'points.livePoints': points.livePoints?points.livePoints:-points.livePoints} });

const updateGifts = (giftId: string, userId: string, giftPoints: number) => userModel.updateOne({ _id: userId }, { $push: { giftsClaimed: giftId } ,  $inc: { 'points.livePoints': -giftPoints, 'points.redeemPoints': giftPoints }} );

const login = (username: string) => userModel.findOne({ username: username })

export default { getAll, add, updateById, deleteUserById, getNotificationById, sendNotificationById, updatePoints, getOneByUsername, updateGifts, login }