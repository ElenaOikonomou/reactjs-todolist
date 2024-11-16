import React from 'react'
import TodoCard from './TodoCard.jsx'

export default function TodoList(props) {
    const {todos} = props
   


  return (
    <ul className='main'>
        {todos.map((item, itemIndex)=>{
            return (
                <TodoCard key={itemIndex}>
                    <p>{item}</p>                
                </TodoCard>            
                
               
            )
        })}
    
    </ul>
  )
}
