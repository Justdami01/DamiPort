import React from "react"
import { HiDotsHorizontal } from "react-icons/hi"
const Testimonial = () => {
  return (
    <div className="bg-gray-50 justify-center">
    <div className=" w-6/12 m-auto">
    <div className="py-5 grid container place-items-center" >
    <h1 className="font-bold text-4xl text-center">Testimonial</h1>
    <p className="text-lg text-gray-400 text-center py-8">
    There are many variations of passages of Lorem Ipsum available, <br />
    but the majority have suffered alteration.
    </p>
    <p className="font-bold text-lg text-center py-1">
    “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio <br />
    convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. <br />
    Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. <br />
    Morbi ornare elit at libero suscipit porta.”
    </p>
    <p className="font-bold text-lg text-center py-4">Esther Howard</p>
    <p className="text-lg text-center py-1">Managing Director, ABC company</p>
    <div className=" flex items-center py-6">
    <HiDotsHorizontal size={50} className=" text-black mr-4"/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Testimonial