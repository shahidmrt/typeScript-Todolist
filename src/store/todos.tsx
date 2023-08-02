import { ReactNode, createContext, useState,useContext } from "react";

export type TodosProviderProps={
    children : ReactNode
}

export type Todo={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}
export type TodosContext={
    todos:Todo[];
    handleAddToDo:(task:string)=>void;
    togleTodoAsCompleted:(id:string)=>void;
    handleDeletTodo:(id:string)=>void;
}

export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider= ({children}:TodosProviderProps)=>{

    const [todos, setTodos]=useState<Todo[]>(()=>{
        try {
            const newTodos= localStorage.getItem('todo') || "[]";
            return JSON.parse(newTodos) as Todo[]
        } catch (error) {
            return[]
        }
    })

    const  handleAddToDo= (task:string) =>{
        setTodos((prev)=>{
            const newTodos:Todo[] =[
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()

                },
                ...prev
            ]
            // console.log("my previous data" + prev)
            // console.log(newTodos)
            localStorage.setItem("todo",JSON.stringify(newTodos))
            return newTodos
        })
    }

    //mark completed
    const  togleTodoAsCompleted=(id:string)=>{
         setTodos ((prev) =>{
              let newTodos =prev.map((todo)=>{
                if(todo.id === id){
                    return {...todo, completed:!todo.completed}
                }
                return todo;
              })
              localStorage.setItem("todo",JSON.stringify(newTodos))
              return newTodos
         })
    }

    const handleDeletTodo=(id:string)=>{
        setTodos((prev)=>{
            let newTodos=prev.filter((filterTodo)=>filterTodo.id !== id);
            localStorage.setItem("todo",JSON.stringify(newTodos))
            return newTodos;


        })
        
    }



    return <todosContext.Provider value={{todos, handleAddToDo, togleTodoAsCompleted,handleDeletTodo}}>
        {children}
    </todosContext.Provider>
}

// consumer
export const useTodos=()=>{
    const todosConsumer =useContext(todosContext);

    if(!todosConsumer){
        throw new Error("UseTodos used outside of Provider");
    }
    return todosConsumer;
}