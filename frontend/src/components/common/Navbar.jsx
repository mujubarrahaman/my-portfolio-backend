import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from '../../config/firebase'
import { signOut } from 'firebase/auth'
function Navbar() {
    const navigate = useNavigate()
    const [log,setLog]=useState(false)

    useEffect(()=>{
      auth.onAuthStateChanged(function(user){
        if(user)
        {
          console.log("User Logged in");
          setLog(true)
        }else{
          setLog(false)
          console.log("User Logged Out");
        }
      })
    },[])

    function logout()
    {
      signOut(auth)
    }
    
  return (
    <div className='py-5 flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Personal</h2>
        <div className='flex items-center'>
            <Link className='list-none px-5' to={"/home"}>Home</Link>
            <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
            <Link className='list-none px-5 md:block hidden'>About</Link>

          {
            log?<button className='button-style  ' onClick={logout} >Logout</button>:<button className='button-style  ' onClick={()=>navigate("/login")}>Login</button>
          }
            
           
        </div>
    </div>
  )
}

export default Navbar