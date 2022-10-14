import express from "express"
import dotenv from "dotenv"
import { categories } from "./data/Categories.js"
import { products } from "./data/Products.js"
import connectDatabase from "./config/MongoDb.js"


dotenv.config()
connectDatabase()
const app = express()

// load product from server
app.get("/api/products", (req, res) => {
    res.json(products)
})

// category filter from server
app.get("/api/products/:category", (req, res) => {
    const product = products.filter(x => x.category === req.params.category)
    res.json(product)
})
// single product from server
app.get("/api/products/:category/:slug", (req, res) => {
    const product = products.find(x => x.slug === req.params.slug)
    res.json(product)
})



// load product from server
app.get("/api/categories", (req, res) => {
    res.json(categories)
})

app.get("/", (req, res) => {
    res.send("Api is running ")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server runnging in port ${PORT}`))

