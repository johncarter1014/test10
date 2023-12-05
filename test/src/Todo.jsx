import React from 'react'

const Todo = (props) => {

  

  return (
    <>
        <div key = {props.id} ><p>{props.value}</p>
        <button onClick={props.onClick}>remove</button>
        </div>
    </>
  )
}

export default Todo