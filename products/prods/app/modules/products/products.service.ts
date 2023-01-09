import { productConstants } from "./products.constants";
import productsRepo from "./products.repo"
import { IProduct } from "./products.types";

const getAllProducts = async () => {
    const products = await productsRepo.getAll();
    if (products.length !== 0) return products.filter((data: any) => data.isDeleted === false);
    throw productConstants.NO_PRODUCTS
}

const insertProduct = async(productDetails: IProduct) => {
    try {
        await productsRepo.insertData(productDetails)
        return productConstants.PRODUCT_INSERTED
    } catch (error) {
        throw productConstants.INSERT_FAILED
    }

}

const updateProduct = async(id: string, updatedProductDetails: any) => {
    try {
        await productsRepo.update(id, updatedProductDetails)
        return productConstants.UPDATED
    } catch (error) {
        throw productConstants.FAILED_TO_UPDATE
    }
}

const deleteProduct = async(id: string) => {
    try {
        await  productsRepo.deleteProduct(id);
        return productConstants.PRODUCT_DELETED
    } catch (error) {
        throw productConstants.FAILED_TO_DELETE
    }
}

export default {
    getAllProducts,
    insertProduct,
    updateProduct,
    deleteProduct
}