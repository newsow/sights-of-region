const prompt = require('prompt-sync')({sigint:true})
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
require('dotenv').config()
const adminModel = require('./models/adminModel')
const dbUrl = process.env.DBURL || 'mongodb://127.0.0.1:27017/sights'
const salt = Number(process.env.salt) || 3

const start = async () =>{
try {
    await mongoose.connect(dbUrl)
    const login = prompt('Enter admin login:')
    if(!login){
        return console.log('Admin login have required field')
    }
    const candidate = await adminModel.findOne({login})
    if(candidate){
        return console.log('Admin with this login already exist')
    }
    const password = prompt('Enter admin password:',{echo:''})
    const hashPassword = bcrypt.hashSync(password,salt)
    const admin = await adminModel.create({login,password:hashPassword})
    await mongoose.connection.close()
    return console.log('Admin created')
    
} catch (e) {
    console.log(e)
}
}

start()

