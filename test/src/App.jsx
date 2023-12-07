import React, { useState } from 'react'
import Todo from './Todo';
import './App.css'

const App = () => {

 const [item , setItem] = useState("");
 const [todos , setTodos] = useState([]);
 const [isChecked, setIsChecked] = useState(false);


 const handleClick = event => {
    setItem(event.target.value)
 };

 const handleAdd = () =>{
  let date =  Date()
  setTodos(prev => item ?  [...prev ,
     {key: date  , value: item , isSelected: true, Checked : isChecked }] : prev) 
  setItem("")
 }

function handleRemove(id)  {
let newtodo = todos.filter((item)=> item.key !== id)
setTodos(newtodo) 
}
const handleCheck = (key) => {
 let newList = todos.map((ele) => ele.key == key ? {...ele , Checked : setIsChecked(prev => !prev) }  : 
 {...ele , Checked : setIsChecked(prev => prev) })
 setTodos(newList)
 //console.log(newList)
} 

 const show = todos.map(todo =>  
 <Todo id= {todo.key} value={todo.value} check={() => {handleCheck(todo.key) }}
 click={() => {handleRemove(todo.key)}} ischeck = {isChecked} /> )
 

 return (
    <>
      <input onChange={handleClick} value={item}></input>
      <button onClick={handleAdd} >Add</button>
      {show}
      
    </>
  )
}

export default App