const mongoose = require('mongoose')
const todoListSchema = new mongoose.Schema({
    id:Number,
    task:String,
    completed:Boolean,
    time:String,
    Date:Date

})
module.exports = mongoose.model('todoList',todoListSchema)