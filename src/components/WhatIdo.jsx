import React from "react"

const WhatIdo = () => {
  return (
    <div className="bg-gray-200">
    <div className="w-10/12 m-auto py-8 grid md:grid-cols-2">
     <div className="w-10/12 m-auto justify-between ">
     <h1 className="lg:text-4xl font-bold">
     What I do
     </h1>
          <p className="py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non,<br />laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
          </p>
          <button className="hello_color text-white p-3 my-4 px-8 text-xl rounded hover:text-white hover:hover:font-bold ">
          Say Hello!
          </button>
     </div>
     <div className="py-8">
     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 border  rounded-2xl">
     <h1 className="pb-2 text-2xl font-bold">
     User Experience (UX)</h1>
     <p className="md:flex md:gap-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, 
     laoreet imperdiet orci. 
     Mauris ultrices eget lorem ac vestibulum.</p>
     </div>
     </div>
     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 border  rounded-2xl">
     <h1 className="pb-2 text-2xl font-bold">User Interface (UI)</h1>
     <p className="md:flex md:gap-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, 
     laoreet imperdiet orci. 
     Mauris ultrices eget lorem ac vestibulum.</p>
     </div>
     </div>
     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 border  rounded-2xl">
     <h1 className="pb-2 text-2xl font-bold">Web Development</h1>
     <p className="md:flex md:gap-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, 
     laoreet imperdiet orci. 
     Mauris ultrices eget lorem ac vestibulum.</p>
     </div>
     </div>
     
     </div>
     </div>
    </div>
  )
}

export default WhatIdo