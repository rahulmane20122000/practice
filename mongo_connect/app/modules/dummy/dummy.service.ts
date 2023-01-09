import dummyRepo from "./dummy.repo";

const getDummy = ()=>{
   return dummyRepo.get();
}

export default {getDummy};