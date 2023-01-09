import { productsModel } from "./products.schema";
import { IProduct } from "./products.types";

const getAll = async () => {
  return await productsModel.find();
}

const insertData = async(productDetails: IProduct) => {
  return await productsModel.create(productDetails)
}

const update = async (id: string, updatedProductDetails: any) => {
  return await productsModel.updateOne({ _id: id }, { $set: { ...updatedProductDetails } });
}

const deleteProduct = async (id: string) => {
  return await productsModel.updateOne({ _id: id }, { $set: { isDeleted: true } });
}

export default { getAll, insertData, update, deleteProduct }