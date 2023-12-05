import React, { useState } from 'react'
import Todo from './Todo';

const App = () => {

 const [item , setItem] = useState("");
 const [todos , setTodos] = useState([]);
 const [selected, setSelected] = useState(true);

 const handleClick = event => {
    setItem(event.target.value)
 };

 const handleAdd = () =>{
  let date = Date()
  setTodos(prev => [...prev , {id: date  , value: item , isSelected: selected}])  
 }

 const show = todos.map(todo => todo.isSelected ? <Todo id={todo.id} value={todo.value} onClick={()=>  setSelected(false)}/> : null)
 console.log(todos)
  return (
    <>
      <input onChange={handleClick}></input>
      <button onClick={handleAdd} >Add</button>
      {show}
      
    </>
  )
}

export default App