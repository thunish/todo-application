import { useState } from "react";
export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [descritpion,setDescription]=useState("");
    return(
        <div>
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="title" onChange={(e)=>{
                setTitle(e.target.value);
            }}/> <br /><br />
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="description" onChange={(e)=>{
                setDescription(e.target.value);
            }}/><br /> <br />
            <button onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:descritpion
                    }),
                    headers:{
                        "content-type":"application/json"
                    }
                }).then(async(result)=>{
                    const json=await result.json();
                    alert("Todo added")
                })
            }}>Add a Todo</button>
        </div>
    )
}