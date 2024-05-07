export function TodoRendering({todos}){
    return(
        <div>{
            todos.map((props)=>{
                return(
                    <div>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>  
                        <button>{props.completed==true?"Completed" : "Mark as Complete"}</button>
                    </div>
                )
            })
            }</div>
    )
}