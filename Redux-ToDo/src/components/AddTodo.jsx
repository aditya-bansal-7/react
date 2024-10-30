import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(inputValue));
        setInputValue('');
    }
  return (
    <div>
        <div>
            Add ToDos :-
        </div>
         <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Add a new todo" 
            />
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo