import { Link } from "react-router-dom"
import { FaSearch, FaCartPlus, FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { useState } from "react";


const user={_id:"jkj" , role:"admin"};

const Header = () => {

const [isOpen,setIsOpen]=useState<boolean>(false);
const logOutHandler=()=>{
  setIsOpen(false);
}

  return (
    <>
      <nav className="header">
       
          <Link onClick={()=>setIsOpen(false)} to="/">Home</Link>
          <Link onClick={()=>setIsOpen(false)} to="/search"><FaSearch /></Link>
          <Link onClick={()=>setIsOpen(false)} to="/cart"><FaCartPlus /></Link>
  

          {
            user?._id?(
              <>
              <button onClick={()=>setIsOpen((perv)=>!perv)}><FaUser/></button>
              <dialog open={isOpen}>
                <div>
                  {user.role === "admin" && (
                    <Link onClick={()=>setIsOpen(false)} to="/admin/dashboard">Admin</Link>
                  )}
                  <Link onClick={()=>setIsOpen(false)} to="/orders">Orders</Link>
                  <button onClick={logOutHandler}>
                    <FaSignOutAlt/>
                  </button>
                </div>
              </dialog>
              </>
            ):(
              <Link to="/login"><FaSignInAlt /></Link>
            )
          }

        </nav>
      </>
      )
}

      export default Header