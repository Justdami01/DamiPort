import React from "react"
import homepage from "../assets/homepage.jpeg"

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
    <div className="grid sm:grid-cols-1 md:grid-cols-3 w-10/12 m-auto gap-1 ">
    <div className="">
    <div className="logo flex items-center py-9">
       <img src={homepage} alt="" className="w-[50px] rounded-full" />
       <span className="font-bold text-4xl">Dami💙</span>
     </div>
    </div>

    <div className="">
    <ul className="footer_text flex justify-between text-lg font-bold py-10 ">
    <li className=" cursor-pointer">About</li>
    <li className=" cursor-pointer">Process</li>
    <li className=" cursor-pointer">Portfolio</li>
    <li className=" cursor-pointer">Blog</li>
    <li className=" cursor-pointer">Services</li>
    <li className=" cursor-pointer">Contact</li>
    </ul>
    </div>

    <div className="md:hidden">
    <ul className="game_text text-lg font-bold py-10 ">
    <li>About</li>
    <li>Process</li>
    <li>Portfolio</li>
    <li>Blog</li>
    <li>Services</li>
    <li>Contact</li>
    </ul>
    </div>

    
    <div className="text-[#FAFAFA] mr-6 py-10 pb-11">
    <p className="">Copyright &copy;Dami💙 2023</p>
    </div>
    </div>

    </div>
  )
}

export default Footer