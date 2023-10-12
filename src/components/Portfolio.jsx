import React from "react"
import City from "../assets/port/City.jpeg"
import Trust from "../assets/port/Trust.jpeg"
import Reality from "../assets/port/Reality.jpeg"
import Code from "../assets/port/Code.jpeg"
import Code4u from "../assets/port/Code4u.png"
import Bemint from "../assets/port/Bemint.png"
import { BsArrowRight } from "react-icons/bs"

function Portfolio() {
  return (
    <div className="bg-white">
    <div className="w-10/12 m-auto py-8 ">
     <div className="w-10/12 m-auto">
     <h1 className="lg:text-4xl text-center font-bold">
     Education & Experience
     </h1>
          <p className="py-8 text-center">
          Explore my educational journey, where I've honed my skills and knowledge as a software engineer. Discover the institutions, courses, and experiences that have shaped my expertise.
          </p>
          
     </div>
     
     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-1">
     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 boxshadow rounded-2xl">
    <img src={Code} alt=""  className="items-center w-[800px]"/>
     <h1 className="text-lg font-bold py-4">Product Admin Dashboard</h1>
     <p className=" text-lg "> Vivamus eleifend convallis ante, non pharetra <br /> libero molestie laoreet. Donec id imperdiet lacus.</p>
     <button className="flex justify-between border border-blue-400 text-blue-400  bg-white p-2 my-3 px-3 text-xl rounded hover:text-blue-400 hover:hover:font-bold ">
     Case study
    <BsArrowRight size={30} className="text-blue-400 mx-2"/>
    </button>
     </div>
     </div>

     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 boxshadow rounded-2xl">
    <img src={Bemint} alt=""  className="w-[800px]"/>
     <h1 className="text-lg font-bold py-4">Bemint</h1>
     <p className=" text-lg ">Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
     <button className="flex items-center border border-blue-400 text-blue-400 p-2 my-3 px-3 text-xl rounded hover:text-blue-400 hover:hover:font-bold ">
     Case study
    <BsArrowRight size={30} className="text-blue-400 mx-2"/>
    </button>
     </div>
    </div>

    <div className="flex items-center py-2">
    <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 boxshadow rounded-2xl">
    <img src={Trust} alt=""  className="w-[800px]"/>
     <h1 className="text-lg font-bold py-4">Product Admin Dashboard</h1>
     <p className=" text-lg">Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
     <button className="flex items-center border border-blue-400 text-blue-400 p-2 my-3 px-3 text-xl rounded hover:text-blue-400 hover:hover:font-bold ">
     Case study
    <BsArrowRight size={30} className="text-blue-400 mx-2"/>
    </button>
     </div>
     </div>

     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 boxshadow rounded-2xl">
    <img src={Reality} alt=""  className="w-[800px]"/>
     <h1 className="text-lg font-bold py-4">Product Admin Dashboard</h1>
     <p className=" text-lg">Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
     <button className="flex items-center border border-blue-400 text-blue-400 p-2 my-3 px-3 text-xl rounded hover:text-blue-400 hover:hover:font-bold ">
     Case study
    <BsArrowRight size={30} className="text-blue-400 mx-2"/>
    </button>
     </div>
     </div>

     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 boxshadow rounded-2xl">
    <img src={Code4u} alt=""  className="w-[800px]"/>
     <h1 className="text-lg font-bold py-4">Code4u</h1>
     <p className=" text-lg">Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
     <button className="flex items-center border border-blue-400 text-blue-400 p-2 my-3 px-3 text-xl rounded hover:text-blue-400 hover:hover:font-bold ">
     Case study
    <BsArrowRight size={30} className="text-blue-400 mx-2"/>
    </button>
     </div>
     </div>

     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 boxshadow rounded-2xl">
    <img src={City} alt=""  className="w-[800px]"/>
     <h1 className="text-lg font-bold py-4">Product Admin Dashboard</h1>
     <p className=" text-lg">Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
     <button className="flex items-center border border-blue-400 text-blue-400 p-2 my-3 px-3 text-xl rounded hover:text-blue-400 hover:hover:font-bold ">
     Case study
    <BsArrowRight size={30} className="text-blue-400 mr-4"/>
    </button>
     </div>
     </div>
     
     </div>


     
     </div>
     </div>
  )
}

export default Portfolio