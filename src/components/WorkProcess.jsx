import React from "react"
import { FaPencilAlt, FaAddressCard, } from "react-icons/fa"
import { FcElectricalThreshold } from "react-icons/fc"
import { MdRocketLaunch } from "react-icons/md"
const WorkProcess = () => {
  return (
    <div className="bg-gray-50">
    <div className="w-10/12 m-auto py-8 grid md:grid-cols-2">
     <div className="w-10/12 m-auto">
     <h1 className="lg:text-4xl font-bold">
     Work Process
     </h1>
          <p className="py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non,<br />laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
          </p>
     </div>
     <div className="py-8 grid sm:grid-cols-1 md:grid-cols-2 gap-1">
     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 border-white rounded-xl">
     <FaAddressCard size={70} className="text-blue-400 mr-4" />
     <h1 className="text-lg font-bold">1. Research</h1>
     <p className="md:flex md:gap-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
     </div>
     </div>
     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 border-white rounded-xl">
     <FcElectricalThreshold size={70} className="text-blue-400 mr-4" />
     <h1 className="text-lg font-bold">2. Analyze</h1>
     <p className="md:flex md:gap-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
     </div>
     </div>
     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 border-white rounded-xl">
     <FaPencilAlt size={70} className="text-blue-400 mr-4" />
     <h1 className=" text-lg font-bold">3. Design</h1>
     <p className="md:flex md:gap-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
     </div>
     </div>
     <div className="flex items-center py-2">
     <div className="w-10/12 bg-white m-auto md:py-4 py-8 p-4 border-white rounded-xl">
     <MdRocketLaunch size={70} className="text-blue-400 mr-4" />
     <h1 className="text-lg font-bold">4. Launch</h1>
     <p className="md:flex md:gap-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
     </div>
     </div>
     
     </div>
     </div>
    </div>
  )
}

export default WorkProcess