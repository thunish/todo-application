const mongoose=require("mongoose");
mongoose.connect({your mongo db key});
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model("user1",todoSchema);
module.exports={
    todo
}
