import mongoose from "mongoose"


const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true,
    },
    comment: {
        type: Number,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    }
})

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: Number,
        required: true,
    },
    slug: {
        type: Number,
        required: true,
    }
},
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema)

export default Product;