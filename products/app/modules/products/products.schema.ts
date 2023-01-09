import { model, Schema } from 'mongoose';


const schema = {
    name: {
        type: String,
        required: true
    },
    productCode: {
        type: String,
        required: true,
        unique:true
    },
    mrp: {
        type: Number,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default:false
    }
}
class ProductSchema extends Schema {
    constructor(
        public schema: any
    ) {
        super(schema)
    }
}
const productSchema = new ProductSchema(schema)
export const productsModel = model('product', productSchema);