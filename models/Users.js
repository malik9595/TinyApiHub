const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    id:Number,
    name:String,
    age:Number,
    gender:String,
    address:String,
    email:String,
    phone:String || Number

})

const usersModels = mongoose.model("Users",UsersSchema)
module.exports = usersModels