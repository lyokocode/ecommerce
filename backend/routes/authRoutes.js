import express from "express"
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs"
import User from "../models/userModels.js"
import { generateToken } from '../utils.js';

const authRoute = express.Router()

authRoute.post('/register', asyncHandler(async (req, res) => {
    const newUser = await new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, User.password),

    });
    const user = await newUser.save();
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user)
    })
})
);

authRoute.post(
    '/login',
    asyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);

export default authRoute