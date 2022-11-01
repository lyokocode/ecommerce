import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./routes/userRoutes.js"
import authRoute from "./Routes/AuthRoutes.js"
import productRoute from "./routes/productRoutes.js"
import categoryRoute from "./routes/categoryRoutes.js"
import ImportData from "./dataImport.js"
import { errorHandler, notFound } from "./Middleware/Errors.js"

const app = express()
dotenv.config()
app.use(express.json());

// API

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/categories', categoryRoute)
app.use('/api/import', ImportData)
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

// ERROR HANDLER
app.use(notFound)
app.use(errorHandler)



mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connection Succesfull")).catch((err) => console.log(err))

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(process.env.PORT || 5000, console.log("server is running port 5000"))
