import express from "express"

const userRoute = express.Router()

userRoute.get('/usertest', (req, res) => {
    res.send('user test is succesfull');
});

userRoute.post('/userpost', (req, res) => {
    const name = req.body.name;
    res.send("your name is" + name)
});

export default userRoute