const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    id:Number,
    username:String,
    title:String,
    body:String

})
module.exports = mongoose.model("posts", postSchema)