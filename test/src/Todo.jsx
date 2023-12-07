import React from 'react'


const Todo = (props) => {

  

  return (
        <div className='todo' key= {props.id} >
          <button onClick={props.check}> { props.ischeck ? "check" : "not checked"}</button>
          <p className={props.ischeck ? "done" : null} >{props.value}</p>
          <button onClick={props.click}>remove</button>
        </div>
  )
}

export default Todo