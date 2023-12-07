import React, { useState } from 'react'


const Todo = (props) => {

  

  return (
        <div className='todo' >
          <button onClick={props.check}> { props.ischeck ? "checked" : "not checked"}</button>
          <p className={props.ischeck ? "done" : null} >{props.value}</p>
          <button onClick={props.click}>remove</button>
        </div>
  )
}

export default Todo