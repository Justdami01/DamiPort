import React from "react"
import { BsArrowRight } from "react-icons/bs"

const CTA = () => {
  return (
    <div className="bg-gray-900">
    <div className=" w-6/12 m-auto">
    <div className="py-11 grid container place-items-center" >
    <h1 className="font-bold text-white text-4xl text-center pb-5 py-5">Do you have Project Idea? <br />
    Let's discuss your project!</h1>
    <p className="text-lg text-white  text-center pb-5"> 
    There are many variations of passages of Lorem Ipsum available, <br />
    but the majority have suffered alteration.
    </p>
    <button className="flex items-center hello_color text-white p-2 my-3 px-3 text-xl rounded hover:text-white hover:hover:font-bold ">
    Let's work Together 
    <BsArrowRight size={30} className="text-white mr-4"/>
    </button>
    </div>
    </div>
    </div>
  )
}

export default CTA