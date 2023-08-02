
import {  useTodos } from "../store/todos"
import { useSearchParams } from "react-router-dom";
import '../App.css'

const SecTodos = () => {
    
    const {todos,togleTodoAsCompleted,handleDeletTodo} =useTodos();
    const [SearchParams] = useSearchParams();
    const todosData= SearchParams.get("todos");
    console.log(todosData)



    let filterData = todos;
    if(todosData === "active"){
    filterData= filterData.filter((task)=> !task.completed)
    }

    if(todosData === "completed"){
        filterData= filterData.filter((task)=> task.completed)
        }
  return (
    <ul id="ulstyle">
    {
        // filterData.map((todo:Todo)=>(
            filterData.map((todo)=>(
            <li id="listyle" key={todo.id}>
                <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => togleTodoAsCompleted(todo.id)} />
                <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

                {
                    todo.completed && (<button type="button" onClick={() =>handleDeletTodo(todo.id)}>Delete</button>)
                }
            </li>
        ))
    }
      
    </ul>
  )
}

export default SecTodos
