import { Link } from "react-router-dom"


const Navbar = () => {

    const handleclick = ()=>{
        localStorage.removeItem("authData")
        window.location.reload()

    }

  return (
    <>
    <div>
        <Link to={"/"}>Home</Link> | 
        <Link to={"/login"}>Login</Link> |
        <Link to={"/register"}>Register</Link>
        <button onClick={handleclick}>LogOut</button>
    </div>
    </>
  )
}

export default Navbar