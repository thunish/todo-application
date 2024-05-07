const express=require("express");
const app=express();
app.use(express.json());
const { todo }=require("./mongo")
const { todoSchema }=require("./types")
const cors=require("cors");
app.use(cors());


app.post("/todo", async (req,res)=>{
    const payLoad=req.body;
    const parsed=todoSchema.safeParse(payLoad);
    if(!parsed.success){
        res.status(411).json({
            msg:"Enter the inputs in the correct way"
        });
        return;
    }
    const newTodo=await todo.create({
        title:payLoad.title,
        description:payLoad.description,
        completed:false
    });
    res.status(200).json({
        msg:"Successful operation"
    })
})

app.get("/todos",async(req,res)=>{
    const todosList=await todo.find({});
    res.status(200).json({todos:todosList})
})

app.put("/completed",async(req,res)=>{
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
})

app.listen(3000,()=>{
    console.log("Runnin");
});