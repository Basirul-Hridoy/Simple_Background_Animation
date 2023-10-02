
import { CgMail } from "react-icons/cg"
import { GrFacebookOption } from "react-icons/gr"
import { IoIosCall } from "react-icons/io";
import "./App.css"
import BackgroundAnimation from "./BackgroundAnimation";

function App() {

  return (
    <div>
      <div className="relative flex items-center h-screen justify-center bg-gradient-to-r from-[#E29B99] to-[#1B71E1] overflow-hidden p-6">
        <div className="w-[500px] lg:p-14 p-6 rounded-lg bg-[#3C4454] text-[#BABFCE] text-center z-50">
          <h2 className="lg:text-2xl text-xl uppercase lg:tracking-[.25em] tracking-[.15em]">Mr. cool Developer</h2>
          <p className="w-full border border-b border-gray-600 lg:my-8 my-6"></p>
          <p className=" lg:tracking-[.25em] tracking-[.15em] text-xs lg:text-sm">I develop pixel perfect website with cool animation</p>
          <div className="flex justify-center gap-6 mt-6">
            <span className="p-2 rounded-full bg-blue-400 text-white"><GrFacebookOption className="text-2xl" /></span>
            <span className="p-2 rounded-full bg-[#82BA92] text-white"><IoIosCall className="text-2xl" /></span>
            <span className="p-2 rounded-full bg-red-300 text-white"><CgMail className="text-2xl" /></span>
          </div>
        </div>
        <BackgroundAnimation />
      </div>
    </div>
  )
}

export default App
