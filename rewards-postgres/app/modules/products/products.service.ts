import { productConstants } from "./products.constants"
import productsRepo from "./products.repo"

const getAllProducts = async()=>{
    try {
        console.log(await  productsRepo.get())
        return await  productsRepo.get();
    } catch (error) {
        throw productConstants.FAILED_TO_FETCH
    }
}

const getProdctPoints = async(companyName:string,productName:string)=>{
    try {
         return await productsRepo.getProdctPoints(companyName,productName);
    } catch (error) {
        throw error
    }
}


export default {getAllProducts,getProdctPoints}