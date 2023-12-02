const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const adminRouter = require('./routers/adminRouter')
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET','POST']
}
const PORT = 5000
app.use(express.json())
app.use(cors(corsOptions))
app.use('/admin',adminRouter)

const start = async() =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/sights')
        app.listen(PORT,()=>{
            console.log(`server started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()