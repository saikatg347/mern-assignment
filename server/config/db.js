const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(`mongodb error: ${err.message}`)
        process.exit(1)
    }
}

module.exports = connectDB
