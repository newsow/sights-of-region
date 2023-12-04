const {model,Schema} = require('mongoose')

const AdminSchema = new Schema({
    login:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

module.exports = model('Admin',AdminSchema)