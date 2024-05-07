import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo';
import { TodoRendering } from './components/Todos';

function App() {
  const [todos,setTodos]=useState([]);
  //Use the useEffect
  fetch("http://localhost:3000/todos").then(async (result)=>{
    const json=await result.json();
    setTodos(json.todos)
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <TodoRendering todos={todos}></TodoRendering>
    </div>
  )
}

export default App
