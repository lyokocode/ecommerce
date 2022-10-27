import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./routes/userRoutes.js"
import authRoute from "./Routes/AuthRoutes.js"
import productRoute from "./routes/productRoutes.js"
import categoryRoute from "./routes/categoryRoutes.js"
import ImportData from "./dataImport.js"

const app = express()
dotenv.config()
const json = express.json()
app.use(json)


app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/categories', categoryRoute)
app.use('/api/import', ImportData)



mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connection Succesfull")).catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT || 5000, console.log("server is running port 5000"))


    // // load product from server
    // app.get("/api/products", (req, res) => {
    //     res.json(products)
    // })
    
    // // category filter from server
    // app.get("/api/products/:category", (req, res) => {
    //     const product = products.filter(x => x.category === req.params.category)
    //     res.json(product)
    // })
    // // single product from server
    // app.get("/api/products/:category/:slug", (req, res) => {
    //     const product = products.find(x => x.slug === req.params.slug)
    //     res.json(product)
    // })
    
    
    // // load product from server
    // app.get("/api/categories", (req, res) => {
    //     res.json(categories)
    // })