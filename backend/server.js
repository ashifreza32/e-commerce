import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//app config
const app = express()
const port = process.env.PORT || 4000

const startServer = async () => {
    try {
        await connectDB()
        connectCloudinary()

        //middlewares
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use(cors())

        app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
        //api endpoints
        app.use('/api/user', userRouter)
        app.use('/api/product', productRouter)

        app.get('/', (req, res) => {
            res.send("API WORKING")
        })

        app.listen(port, () => console.log('server started on port :' + port))
    } catch (error) {
        console.error('Server startup failed:', error)
        process.exit(1)
    }
}

startServer()

process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error)
})

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error)
})