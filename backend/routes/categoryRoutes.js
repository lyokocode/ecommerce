import express from "express"
import asyncHandler from "express-async-handler"
import Category from "../models/categoryModels.js"

const categoryRoute = express.Router();

categoryRoute.get("/", asyncHandler(
    async (req, res) => {
        const categories = await Category.find({})
        res.json(categories)
    }
))

export default categoryRoute;