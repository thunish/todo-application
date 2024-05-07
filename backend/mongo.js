const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Thunish:ZKxPh0wHJ5NB6hAX@cluster0.bvmakoh.mongodb.net/todo-app");
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model("user1",todoSchema);
module.exports={
    todo
}