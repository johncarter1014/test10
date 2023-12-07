import React, { useState } from 'react'
import Todo from './Todo';
import './App.css'

const App = () => {

 const [item , setItem] = useState("");
 const [todos , setTodos] = useState([]);


 const handleClick = event => {
    setItem(event.target.value)
 };

 const handleAdd = () =>{
  const min = 1;
  const max = 900;
  const rand = min + Math.random() * (max - min);
  
  setTodos(prev => item ?  [...prev ,
     {key: rand  , value: item ,
      Checked : false }] : prev) 
  setItem("")
 }

function handleRemove(id)  {
let newtodo = todos.filter((item)=> item.key !== id)
setTodos(newtodo) 
}
const handleCheck = (num) => {
 let newList = todos.map((ele) => ele.key === num ?
  {... ele , Checked : !ele.Checked } : ele )
   setTodos(newList)
} 

 const show = todos.map(todo => <div key={todo.key}>
 <Todo  value={todo.value} 
 check={()=> {handleCheck(todo.key)}}
 click={() => {handleRemove(todo.key)}} 
 ischeck = {todo.Checked} /> 
 </div> )
 

 return (
    <>
      <input onChange={handleClick} value={item}></input>
      <button onClick={handleAdd} >Add</button>
      {show}
    </>
  )
}

export default App