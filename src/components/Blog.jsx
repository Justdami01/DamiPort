import React from "react"
import Free from "../assets/blog/Free.jpeg"
import Reason from "../assets/blog/Reason.jpeg"
import Alone from "../assets/blog/Alone.jpeg"
import Stranger from "../assets/blog/Stranger.jpeg"

function Blog() {
  return (
    <div className="blog_color">
    <div className="w-10/12 m-auto py-8 ">
     <div className="w-10/12 m-auto">
     <h1 className="lg:text-4xl text-center font-bold">
     Blog
     </h1>
          <p className="py-8 text-center">
          Dive into my world of tech insights and exploration. In this blog, I share thoughts, tutorials, and musings on the latest in software engineering, offering you a window into the dynamic realm of technology.but the majority have suffered alteration.
          </p>
          
     </div>
     
     <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-1">
     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 boxshadow rounded-2xl">
    <img src={Reason} alt=""  className="w-[700px]"/>
     <h1 className="text-lg py-8">22 Oct, 2020 / 264 Comments</h1>
     <p className="font-bold text-lg "> Lorem ipsum dolor sit consea. Nulla purus arcu</p>
     </div>
     </div>

     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 boxshadow rounded-2xl">
    <img src={Stranger} alt=""  className="w-[900px]"/>
     <h1 className="text-lg py-8">22 Oct, 2020 / 264 Comments</h1>
     <p className="font-bold text-lg ">Lorem ipsum dolor sit consea. Nulla purus arcu</p>
     </div>
    </div>

    <div className="flex items-center py-2">
    <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 boxshadow rounded-2xl">
    <img src={Free} alt=""  className="w-[700px]"/>
     <h1 className="text-lg py-8">22 Oct, 2020 / 264 Comments</h1>
     <p className="font-bold text-lg">Lorem ipsum dolor sit consea. Nulla purus arcu</p>
     </div>
     </div>

     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 boxshadow rounded-2xl">
    <img src={Alone} alt=""  className="w-[900px]"/>
     <h1 className="text-lg py-8">22 Oct, 2020 / 264 Comments</h1>
     <p className="font-bold text-lg">Lorem ipsum dolor sit consea. Nulla purus arcu</p>
     </div>
     </div>
     </div>

     
     </div>
     </div>
   
  )
}

export default Blog