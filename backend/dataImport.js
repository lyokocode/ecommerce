import express from "express"
import asyncHandler from "express-async-handler"
import Category from "./models/categoryModels.js"
import categories from "./data/Categories.js"
import Product from "./models/productModels.js";
import products from "./data/Products.js";
import User from "./models/userModels.js";
import users from "./data/Users.js";

const ImportData = express.Router();

ImportData.post("/category", asyncHandler(
    async (req, res) => {
        await Category.remove({});
        const importCategory = await Category.insertMany(categories);
        res.send({ importCategory })
    }
));

ImportData.post("/products", asyncHandler(
    async (req, res) => {
        await Product.remove({});
        const importProduct = await Product.insertMany(products);
        res.send({ importProduct })
    }
))
ImportData.post("/users", asyncHandler(
    async (req, res) => {
        await User.remove({});
        const importUser = await User.insertMany(users);
        res.send({ importUser })
    }
))

export default ImportData