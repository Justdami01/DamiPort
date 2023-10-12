import React from "react"
import homepage from "../assets/homepage.jpeg"
import { BsBoxArrowInDown } from "react-icons/bs"
import { RiTwitterXFill } from "react-icons/ri"
import { FaTelegramPlane } from "react-icons/fa"
import { BsWhatsapp, BsDiscord, BsInstagram, BsLinkedin } from "react-icons/bs"

const Homepage = () => {
  return (
    <div className="hompage_color py-16 ">


      <div className="w-10/12  m-auto md:flex justify-between">
      <div className="grid justify-center sm:grid-cols-1 md:grid-cols-2 gap-12">
        <div className="py-20 ">
          <h1 className="md:text-5xl lg:text-6xl font-bold">
          Hello, I’m<br />
            <span className="text-black">Adegoke Adepoju[Dami💙]</span> <br />
          </h1>
          <p className="my-8">
          I'm a Graphic Designer and a Web Developer based- in Lagos, Nigeria <br />
          I strives to build immersive and beautiful web applications and softwares through carefully crafted <br /> code and user-centric design.
          </p>
          <button className="hello_color text-white p-3 my-4 px-5 text-xl rounded-1xl hover:text-white hover:hover:font-bold ">Say Hello!</button>
          </div>
          <div className=" ">
          <img src={homepage} alt=""  className="w-[550px] rounded-3xl"/>
          </div>
          </div>
          </div>
          <div className="w-10/12  m-auto md:flex justify-between py-11">
        <div className="grid justify-center m-auto sm:grid-cols-1 md:grid-cols-2 shadow shadow-gray-100 rounded-2xl py-8 bg-white gap-8">
        <div className="flex items-center">
        <div className=" bg-gray-200 m-auto  py-8 p-4 rounded-2xl">
        <img src={homepage} alt=""  className="w-[380px] rounded-xl"/>
        <div className="flex justify-center py-6 gap-5 ">
        <FaTelegramPlane size={30} className="text-blue-600 cursor-pointer mx-2"/>
        <BsWhatsapp size={30} className="text-green-500 cursor-pointer mx-2"/>
        <RiTwitterXFill size={30} className="text-black cursor-pointer mx-2"/>
        <a href="https://www.instagram.com/just_dami_02/" target="blank"> 
        <BsInstagram size={30} className="text-pink-500 cursor-pointer mx-2"/>
        </a>
        <BsDiscord size={30} className="text-blue-800 cursor-pointer mx-2"/>
        <BsLinkedin size={30} className="text-blue-400 cursor-pointer mx-2"/>
        </div>
         </div>
         </div>

        <div className="py-11">
        <h1 className="md:text-3xl lg:text-4xl font-bold">I am a Professional User Interface and Experience Developer</h1>
      <p className="text-lg py-4">With a strong background in designing and developing stylish, contemporary websites, web services, 
      and online stores, I specialize in delivering tailored solutions for clients. <br /> My work revolves around merging aesthetics and functionality to provide captivating and innovative web solutions. 
      In a technology-driven world, I'm dedicated to crafting digital journeys that make a lasting impact.</p>
      <div className="flex items-center gap-5">
      <button className="hello_color text-white p-3 my-4 px-5 text-xl rounded-1xl hover:text-white hover:hover:font-bold ">My Project</button>
      <button className="flex items-center border border-blue-400 text-blue-400 p-3 my-3 px-3 text-xl rounded hover:text-blue-400 hover:hover:font-bold ">
      <BsBoxArrowInDown size={30} className="text-blue-400 mr-2"/>
     Download CV
    </button>
    </div>
      </div>
      </div>
      </div>   
          
          
          

     
    </div>
  )
}

export default Homepage