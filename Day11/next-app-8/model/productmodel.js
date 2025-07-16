import mongoose from "mongoose";
const product=mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true,
    },
    name:{
        type:String,
        unique:true,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
})
export const ProductModel=mongoose.models.product||mongoose.model("Product",product);