import { Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import productsService from "./products.service";
const router = Router();


const { getAllProducts, insertProduct, updateProduct, deleteProduct } = productsService;


router.get("/", async (req, res, next) => {
    try {
        const response = await getAllProducts();
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

router.post("/",async (req, res, next) => {
    try {
        const response =await insertProduct(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error)
    }
});

router.put("/:id",async (req, res, next) => {
    try {
        const response = await updateProduct( req.params.id, req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

router.put("/delete/:id", async(req, res, next) => {
    try {
        const response = await deleteProduct(req.params.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error)
    }
})

export default router;