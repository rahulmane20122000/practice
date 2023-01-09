import { dummyModel } from "./dummy.schema";


const get=()=>{
    return dummyModel.find();
}

export default {get};