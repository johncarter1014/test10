import React, { useState } from 'react'
import Todo from './Todo';

const App = () => {

 const [item , setItem] = useState("");
 const [todos , setTodos] = useState([]);

 const handleClick = event => {
    setItem(event.target.value)
 };

 const handleAdd = () =>{
  let date =  Date()
  setTodos(prev => [...prev ,
     {id: date  , value: item , isSelected: true}])  
 }
function handleRemove(id)  {
let newtodo = todos.filter((item)=> item.id !== id)
setTodos(newtodo) 
}

 const show = todos.map(todo =>  
 <Todo id= {todo.id} value={todo.value} 
 onClick={() => {handleRemove(todo.id)
}} /> )
 
 return (
    <>
      <input onChange={handleClick}></input>
      <button onClick={handleAdd} >Add</button>
      {show}
      
    </>
  )
}

export default App