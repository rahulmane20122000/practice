import { model, Schema } from "mongoose";


interface IDummy{
    dummyName:string;
    email:string
}

const dummySchema = new Schema<IDummy>({
   dummyName:{
     type:String,
     require:true
   }
});


export const dummyModel = model<IDummy>("dummy",dummySchema)