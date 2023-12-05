const adminModel = require('../models/adminModel')
const sightModel = require('../models/sightModel')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const salt = Number(process.env.salt) || 3
const secretKey = process.env.secretKey || '1111'


const generateAccesToken = (id,login) =>{
    return jwt.sign({id,login},secretKey,{expiresIn:'3d'})
}
class adminController{
    async login(req,res){
        try {
            const {login,password} = req.body
            const admin = await adminModel.findOne({login})
            if(!admin){
                return res.status(400).json({messgae:"неправильный логин или пароль"})
            }
            const passwordValidate = bcrypt.compareSync(password,admin.password)
            if(!passwordValidate){
                return res.status(400).json({messgae:"неправильный логин или пароль"})
            }
            const token = generateAccesToken(admin._id,admin.login)
            return res.status(200).json(token)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
    async createAdmin(req,res){
        try {
            const {login,password} = req.body
            const candidate = await adminModel.findOne({login})
            if(candidate){
                return res.status(400).json({messgae:"такой admin уже существует"})
            }
            const hashPassword = bcrypt.hashSync(password,salt)
            const admin = await adminModel.create({login,password:hashPassword})
            return res.status(200).json(admin)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    async createSight(req,res){
        try {
            const {title,description,district} = req.body
            const sight = await sightModel.create({title,description,district})
            return res.status(200).json(sight)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }

}

module.exports = new adminController