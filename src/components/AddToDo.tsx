import {FormEvent,useState} from 'react'
import { useTodos } from '../store/todos';




export default function AddToDo() {
    const [todo, setTodo]=useState("")
    const {handleAddToDo} =useTodos()

    const handleForSubmit=(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      handleAddToDo(todo)
      setTodo("")

    }
  return (
    <form onSubmit={handleForSubmit} style={{ display:'flex',width:'100%', margin:'20px 0px'}}>
       <input style={{width:'90%', padding:'5px'}} type="text" placeholder='write here for Todo list'  value={todo} onChange={(e)=> setTodo(e.target.value)} />
       <button style={{width:'10%' , padding:'5px'}} type='submit'> Add </button>
    </form>
  )
}
