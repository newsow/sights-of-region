const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET','POST']
}
const PORT = 5000
app.use(express.json())
app.use(cors(corsOptions))

const start = async() =>{
    try {
        app.listen(PORT,()=>{
            console.log(`server started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}