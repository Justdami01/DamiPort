import React from "react"
import homepage from "../assets/homepage.jpeg"
import { BsBoxArrowInDown } from "react-icons/bs"
import { RiTwitterXFill } from "react-icons/ri"
import { FaTelegramPlane } from "react-icons/fa"
import { BsWhatsapp, BsDiscord, BsInstagram, BsLinkedin } from "react-icons/bs"

const Homepage = () => {
  return (
    <div className="hompage_color py-16 ">

    <div className="lg:w-9/12 w-10/12 py-16 m-auto">
    <div className="lg:flex gap-4 items-end pb-16 justify-between">
    <div className="lg:w-[50%]">
      <div className="lg:text-5xl text-4xl font-bold">
        Hello, I’m
        <br />
        <h1>
        Adegoke Adepoju[Dami💙]
        </h1>
      </div>
      <div className="w-[300px] m-auto py-7 md:hidden">
        <img src={homepage} alt="homepage" className="rounded-3xl " />
      </div>
      <div className="md:py-10 pb-4">
        <p className="">
        I'm a Graphic Designer and a Web Developer based- in Lagos, Nigeria
        I strives to build immersive and beautiful web applications and softwares through carefully crafted
        code and user-centric design.
        </p>
      </div>
      <a href="" className="">
      <button className="hello_color text-white p-3 my-4 px-8 text-xl rounded hover:text-white hover:hover:font-bold ">
      Say Hello!
      </button>
      </a>
      <div className="flex justify-between text-center md:pt-8 pt-4">
        <div className="bg-[#f2f2f2] mt-2 mr-1 p-5 border-none rounded w-1/3">
          <div className="text-2xl font-bold">15 Y.</div>
          <div className="pt-3">Experience</div>
        </div>
        <div className="bg-[#f2f2f2] mt-2 mr-1 p-5 border-none rounded w-1/3">
          <div className="text-2xl font-bold">250+</div>
          <div className="pt-3">Project Completed</div>
        </div>
        <div className="bg-[#f2f2f2] mt-2 p-5 border-none rounded w-1/3">
          <div className="text-2xl font-bold">58</div>
          <div className="pt-3">Happy Client</div>
        </div>
      </div>
    </div>
    <div className="w-[40%] hidden lg:block">
      <img src={homepage} alt="homepage" className="rounded-3xl " />
    </div>
  </div>

          {/*description*/}
        <div className="bg-white rounded-3xl py-8 md:py-16">
        <div className="md:w-10/12 w-11/12 m-auto lg:flex items-center justify-between">
          <div className="max-w-sm rounded-lg bg-gray-200 m-auto">
            <img src={homepage} alt="homepage" className="rounded-t-lg" />
            <div className="p-5 flex justify-between">
              <a href="" target="blank">
                <FaTelegramPlane size={35} className="text-blue-600" />
              </a>
              <a href="">
                <BsWhatsapp size={35} className="text-green-600" />
              </a>
              <a href="">
                <RiTwitterXFill size={35} className="text-black" />
              </a>
              <a href="">
                <BsInstagram size={35} className="text-pink-600" />
              </a>
              <a href="">
                <BsDiscord size={35} className="text-blue-900" />
              </a>
              <a
                href="">
                <BsLinkedin size={35} className="text-blue-400" />
              </a>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <h1 className="md:text-4xl text-2xl md:pt-3 font-bold">
              I am a Professional User Interface and Experience Developer
            </h1>
            <div className="md:py-5 py-4">
              <p className="">
                With a strong background in designing and developing stylish,
                contemporary websites, web services, and online stores, I
                specialize in delivering tailored solutions for clients.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="">
                <button className="hello_color text-white p-3 my-4 px-8 text-xl rounded hover:text-white hover:hover:font-bold ">
                  My Project
                </button>
              </a>
              <a href="">
                <button className="flex items-center border border-blue-400 text-blue-400 p-2 my-3 px-3 text-xl rounded hover:text-blue-400 hover:hover:font-bold ">
                  <BsBoxArrowInDown size={30} className="pr-2" /> Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
          
          
          

     </div>
    </div>
  )
}

export default Homepage