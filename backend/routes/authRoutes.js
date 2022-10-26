import express from "express"
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs"
import User from "../models/userModels.js"

const authRoute = express.Router()

authRoute.post('/register', asyncHandler(async (req, res) => {
    const newUser = await new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})
);

export default authRoute