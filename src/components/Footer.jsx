import React from "react"
import homepage from "../assets/homepage.jpeg"

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
    <div className=" w-10/12 m-auto gap-1">
    <div className="grid sm:grid-cols-1 md:grid-cols-3">
    <div className="logo flex items-center py-9">
       <img src={homepage} alt="" className="w-[50px] rounded-full" />
       <span className="font-bold text-3xl tracking-tight">Dami💙</span>
            
          </div>
          <ul className="md:flex items-center w-full md:w-auto text-center">
            <li className="md:mr-4 ">
              <a href=""  className="font-bold">
                Home
              </a>
            </li>
            <li className=" md:mr-4">
              <a href=""  className="font-bold">
                About
              </a>
            </li>
            <li className=" md:mr-4">
              <a href=""  className="font-bold">
                Process
              </a>
            </li>
            <li className=" md:mr-4">
              <a href=""  className="font-bold">
                Portfolio
              </a>
            </li>
            <li className=" md:mr-4">
              <a href=""  className="font-bold">
                Blog
              </a>
            </li>
            <li className=" md:mr-4">
              <a href=""  className="font-bold">
                Services
              </a>
            </li>
            <li className=" md:mr-4">
              <a href="" className="font-bold">
                Contact
              </a>
            </li>
          </ul>
          <div className="text-center font-bold">
            <p className="py-8">Copyright © 2023 Dami💙.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer