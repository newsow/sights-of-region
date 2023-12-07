const sightModel = require('../models/sightModel')
class sightController{
    async allSights(req,res){
        try {
            const sights = await sightModel.find()
            return res.status(200).json(sights)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    async oneSight(req,res){
        try {
            const {id} = req.params
            const sight = await sightModel.findById(id)
            return res.status(200).json(sight)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }


}

module.exports = new sightController