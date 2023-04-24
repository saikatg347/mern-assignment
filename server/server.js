const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const {notFound, errorHandler} = require('./middlewares/errorMiddleware')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started at port ${PORT}`))

