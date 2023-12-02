const {model,Schema} = require('mongoose')

const SightSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    location:{type:String,required:true}
})

module.exports = model('Sight',SightSchema)