import React , {useState} from 'react'
import './index.css'

const NewTodo=()=>{
    const [todoList, setTodoList]=useState([]);
    const [inputVal, setInputVal]=useState("");

    const handleInput=(e)=>{
        setInputVal(e.target.value)

    }
    const onAddTodo=()=>{
        if (inputVal!=''){
            const newTodo={
                id:new Date().getTime(),
                text:inputVal,
                completed:false

            }
            setTodoList([...todoList, newTodo])
            setInputVal("")
        }
        
    }
    const onDeleteTodo=(id)=>{
        const filteredTodoList=todoList.filter((eachTodo)=>
        eachTodo.id ===! id);
        setTodoList(filteredTodoList);

    }

    return (
        <div className="todo-container">
        <h1>Todo App</h1>
        <div className='todo-item'>
        <input 
        type="email"
        value={inputVal}
        name="email"
        onChange={handleInput} />
        <button className="button" onClick={onAddTodo} >Add Todo</button>
        </div>
        {
            todoList.map((eachTodo)=>{
                return (<li>
                    
                     <span>{eachTodo.text}</span>
                     <button 
                     onClick={()=>onDeleteTodo(eachTodo.id)}>
                        Delete
                    </button></li>
                    )

            })
        }
        </div>

    )

}
export default NewTodo