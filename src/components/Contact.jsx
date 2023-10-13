import React from "react"
import { MdLocationPin } from "react-icons/md"
import { MdEmail } from "react-icons/md"
import { IoMdSend } from "react-icons/io"
import { PiPhoneCallFill } from "react-icons/pi"
import { RiTwitterXFill } from "react-icons/ri"
import { FaTelegramPlane } from "react-icons/fa"
import { BsWhatsapp, BsDiscord, BsInstagram, BsLinkedin } from "react-icons/bs"

function Contact() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="lg:w-9/12 w-10/12 py-8 m-auto">
        <div className=" bg-white rounded-2xl ">
          <div className="m-auto md:w-10/12 w-[80%] py-16 md:flex gap-4">
            <div className="">
              <h1 className="text-3xl font-bold">Let's discuss your Project</h1>
              <p className="text-gray-400 py-8">
                There are many variations of passages of Lorem Ipsu available
                but the majority have suffered alte.
              </p>
              <div className="pb-8">
                <div className="flex items-center gap-4">
                  <MdLocationPin className="text-blue-400" size={50} />{" "}
                  <div>
                    <h1>Address:</h1>
                    <p className="font-bold">Lagos Main-Land</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-6">
                  <MdEmail className="text-blue-400" size={50} />
                  <div>
                    <h1>My Email:</h1>
                    <p className="font-bold">aadegoke336@gmail...</p>
                  </div>{" "}
                </div>
                <div className="flex items-center gap-4">
                  <PiPhoneCallFill className="text-blue-400" size={50} />
                  <div>
                    <h1>Call Me</h1>
                    <p className="font-bold">200 - 0514 - 4035</p>
                  </div>{" "}
                </div>
              </div>
              <div className="py-5 flex gap-3">
                <a href="">
                  <FaTelegramPlane size={37} className="text-blue-600" />
                </a>
                <a href="">
                  <BsWhatsapp size={37} className="text-green-600" />
                </a>
                <a href="">
                  <RiTwitterXFill size={37} className="text-black" />
                </a>
                <a href="">
                  <BsInstagram size={37} className="text-pink-600" />
                </a>
                <a href="">
                  <BsDiscord size={37} className="text-blue-900" />
                </a>
                <a href="">
                  <BsLinkedin size={37} className="text-blue-400" />
                </a>
              </div>
            </div>
            <div className="form">
              <p className="pb-8">
                There are many variations of passages of Lorem Ipsu available
                but the majority have suffered alte.
              </p>
              <form>
                <div>
                  <label
                    for="form_name"
                    className="font-bold text-sm transform peer-focus:font-medium mt-5"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="form_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-400 peer"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="form_mail"
                    className="font-bold text-sm transform peer-focus:font-medium mt-5"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="form_mail"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-400 peer"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label
                    for="form_location"
                    className="font-bold text-sm transform peer-focus:font-medium mt-5"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="form_location"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-400 peer"
                    placeholder="Location"
                    required
                  />
                </div>
                <div className="md:grid grid-cols-2 gap-6">
                  <div>
                    <label
                      for="form_budget"
                      className="font-bold text-sm transform peer-focus:font-medium mt-5"
                    >
                      Budget*
                    </label>
                    <input
                      type="text"
                      id="form_budget"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-400 peer"
                      placeholder="Budget"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="form_subject"
                      className="font-bold text-sm transform peer-focus:font-medium mt-5"
                    >
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="form_subject"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-400 peer"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="form_message"
                    className="font-bold text-sm transform peer-focus:font-medium mt-5"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="form_massage"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-400 peer"
                    placeholder="Message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white flex items-center justify-between md:px-8 md:py-4 p-2 rounded hello_color text-xl hover:text-white hover:font-bold mt-4"
                >
                  Submit
                  <IoMdSend size={25} className="pl-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact