import express from "express"
import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";

const userRoute = express.Router()

userRoute.get('/', asyncHandler(
    async (req, res) => {
        const users = await User.find({})
        res.json(users)
    }
));



export default userRoute