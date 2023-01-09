import { pointsConstants } from "./points.constants"
import pointsRepo from "./points.repo"



const getMyPoints = async (id: string) => {
   try {
      return await pointsRepo.get(id);
   } catch (error) {
      throw pointsConstants.FAILED_TO_FETCH
   }
}



export default {
   getMyPoints
}