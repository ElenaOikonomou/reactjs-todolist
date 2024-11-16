import React from 'react'
import TodoCard from './TodoCard.jsx'

export default function TodoList(props) {
   const { todos, handleDeleteTodo } = props
   


  return (
    <ul className='main'>
        {todos.map((item, itemIndex)=>{
            return (
                <TodoCard {...props} key={itemIndex} >
                    <p>{item}</p>                
                </TodoCard>            
                
               
            )
        })}
    
    </ul>
  )
}
