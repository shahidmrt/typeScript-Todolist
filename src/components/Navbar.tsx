import { Link, useSearchParams } from "react-router-dom"

const Navbar = () => {
  const [SearchParams] = useSearchParams();
    const todosData= SearchParams.get("todos");
  return (
    <nav style={{display:'flex', justifyContent:'space-between', width:'100%', fontSize:'20px', fontWeight:'bold'}}>

        <Link style={{border:'1px solid black', padding:'2px 20px'}} className={todosData === null ? 'link':''}  to='/'>All</Link>
        <Link style={{border:'1px solid black', padding:'2px 20px'}} className={todosData === "active" ? "link" :'' }  to='/?todos=active'> Active</Link>
        <Link style={{border:'1px solid black', padding:'2px 20px'}} className={todosData === "completed"? "link" : ""}  to='/?todos=completed'>Completed</Link>
      
    </nav>
  )
}

export default Navbar
