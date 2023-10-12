import React, { useState } from "react"
import { Link } from "react-router-dom"
import homepage from "../assets/homepage.jpeg"
import { navigationLinks } from "./localDatabase"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
 
function Navigation() {
  const [open, setOpen]= useState(false);

  const switches =()=>{
    setOpen((prev) => !prev);
  }
  return (
    <div className="bg-white m-auto  relative">
    <div className="flex items-center justify-between py-1 w-10/12 m-auto">
     <div className="logo flex items-center">
       <img src={homepage} alt="" className="w-[50px] rounded-full" />
       <span className="font-bold text-4xl">Dami💙</span>
       
     </div>
     {/* desktok view */}
     <div className="desktop_navigation flex items-center">
       {navigationLinks.map((x) => (
        <ul className="flex items-center" key={x._id}>
        <Link >
         <li className="mx-2 text-xl">{x.link}</li>
        </Link>
      </ul>
      ))} 
     
       <Link className="text-white flex items-center rounded ml-8">
         <button className="hello_color text-white p-1 my-9 px-3 text-2xl rounded hover:text-white hover:hover:font-bold ">Contact</button>
         
       </Link> 
     </div>
     </div> 
      <div className="md:hidden absolute top-5 right-4" onClick={() => {}}>
      {open? ( 
        <AiOutlineClose size={25} onClick={() => setOpen(false)} /> 
      ) : ( 
        <AiOutlineMenu size={25} onClick={() => setOpen(true)} /> 
      )}
      </div>
      {open && (  <div>
     {/* mobile navigation */}
        </div>
       )}
    </div>
  )
}

export default Navigation