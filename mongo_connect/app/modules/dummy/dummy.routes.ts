import { Router } from "express";
import dummyService from "./dummy.service";

const {getDummy} = dummyService;
const router = Router();

router.get("/",(req,res,next)=>{
    const response =getDummy();
    res.send(response);
});

router.post("/",(req,res)=>{
    
})

export default router;