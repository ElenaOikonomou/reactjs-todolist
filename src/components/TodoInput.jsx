import { useState } from 'react'

export default function TodoInput({ handleAddTodos }){
    const [todoValue, setTodoValue] = useState('')

    return (
        <header>
         <input placeholder="Enter todo...."
                value={todoValue}
                onChange={(e) => {
            setTodoValue(e.target.value)
         }}/>
         <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue('')            
         }}>Add </button>
        </header>
    )
}