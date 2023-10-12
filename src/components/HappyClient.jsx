import React from "react"
import { company_brands } from "./localDatabase"
function HappyClient() {
  return (
    <div className="bg-gray-50 m-auto py-10">
    <h1 className="font-bold text-4xl text-center">Happy Client</h1>
    <p className="text-lg text-center">
    There are many variations of passages of Lorem Ipsum available, <br />
    but the majority have suffered alteration.
    </p>

    <div className="brands_images grid md:grid-cols-6 1g:grid-cols-1 p-11 cursor-pointer py-8">
       {company_brands.map((image) => (
         <div className="flex items-center " key={image._id}>
          <img src={image.image} alt="brands" className="w-[220px]" />
         </div>
       ))}
     </div>
     <div className="md:hidden flex items-center flex-wrap justify-between ">
     {company_brands.map((image) => (
      <div className="" key={image._id}>
       <img src={image.image} alt="brands" className="w-[100px]" />
      </div>
    ))}
     </div>
    </div>
  )
}

export default HappyClient