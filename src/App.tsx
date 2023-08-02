import AddToDo from "./components/AddToDo";
import './App.css'
import SecTodos from "./components/SecTodos";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main style={{width:'100%', border:'1px solid gray',margin:'40px auto'}}>
      <div style={{width:"60%",margin:'10px auto', border:'1px solid purple', display:"flex", flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
       <h1 style={{marginTop:'10px'}}>TODO REACT + TYPESCRIPT </h1>
       <Navbar/>
       <AddToDo/>
       <SecTodos/>
       </div>
    </main>
  )
}
