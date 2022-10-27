import express from "express"
import asyncHandler from "express-async-handler"
import Product from "../models/productModels.js"

const productRoute = express.Router();
productRoute.get("/", asyncHandler(
    async (req, res) => {
        const products = await Product.find({})
        res.json(products)
    }
));


productRoute.get("/:category", asyncHandler(
    async (req, res) => {
        const category = req.params.category
        const product = await Product.find({ category })
        if (product) {
            res.json(product)
        } else {
            res.status(404)
            throw new Error("product not found")
        }
    }
));

productRoute.get("/:category/:slug", asyncHandler(
    async (req, res) => {
        const slug = req.params.slug
        const product = await Product.find({ slug })
        if (product) {
            res.json(product)
        } else {
            res.status(404)
            throw new Error("single not found")
        }
    }
))


export default productRoute;