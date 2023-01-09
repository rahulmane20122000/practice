import { productsModel } from "./products.schema";

const get = () => productsModel.find();

const getProdctPoints = (companyName:string,productName:string)=> productsModel.findOne({companyName:companyName,productName:productName}).select('productpoints');

export default { get,getProdctPoints }