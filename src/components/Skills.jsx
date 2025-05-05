import nodejsStackedDark from "../assets/logos/nodejsStackedDark.svg";
import react from "../assets/logos/react.svg";
import tailwind from "../assets/logos/tailwind.svg";
import c from "../assets/logos/c.svg";
import mongodbLogo from "../assets/logos/mongodbLogo.svg";
import ExpressLogo from "../assets/logos/ExpressLogo.svg";
import htmlLogo from "../assets/logos/htmlLogo.svg";
import cssLogo from "../assets/logos/cssLogo.svg";
import javascriptLogo from "../assets/logos/javascriptLogo.svg";
import githubLogo from "../assets/logos/githubLogo.svg";
import gitLogo from "../assets/logos/gitLogo.svg";
import postmanLogo from "../assets/logos/postmanLogo.svg";
import nextjs from "../assets/logos/nextjs.svg";
import vercel from "../assets/logos/vercel.svg";
import vite from "../assets/logos/vite.svg";
export default function Skills() {
  return (
    <>
      <div
        id="skills"
        className=" p-4 flex  justify-center items-center   flex-col font-mono"
      >
        <h1 className=" text-2xl sm:text-4xl lg:text-5xl  mb-18 font-semibold">
          Technologies I use
        </h1>

        <div className=" w-[100%] sm:w-[70%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  justify-center items-center md:stext-lg">
          <button className="border border-black/20 p-2 rounded-sm  hover:bg-black/5  cursor-pointer  hover:opacity-70 text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={react} alt="" />
            <h1>React</h1>
          </button>
          <button className="border border-black/20 p-2 rounded-sm  hover:bg-black/5  cursor-pointer hover:opacity-70  text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={nextjs} alt="" />
            <h1>Next.js</h1>
          </button>

          <button className="border border-black/20 p-2 rounded-sm cursor-pointer hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]   "
              src={nodejsStackedDark}
              alt=""
            />
            <h1>Node.js</h1>
          </button>
          <button className="border border-black/20 p-2 rounded-sm cursor-pointer hover:opacity-70  hover:bg-black/5   text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={ExpressLogo} alt="" />
            <h1>Express.js</h1>
          </button>
          <button className="border border-black/20 p-2 rounded-sm cursor-pointer  hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={mongodbLogo} alt="" />
            <h1>MongoDB</h1>
          </button>
          <button className="border border-black/20 p-2 rounded-sm cursor-pointer hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={c} alt="" />
            <h1>C++</h1>
          </button>
          <button className="border border-black/20 p-2 rounded-sm cursor-pointer hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={htmlLogo} alt="" />
            <h1>HTML</h1>
          </button>
          <button className="border border-black/20 p-2 rounded-sm cursor-pointer hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={cssLogo} alt="" />
            <h1>CSS</h1>
          </button>
          <button className="border border-black/20 p-2 rounded-sm cursor-pointer hover:opacity-70 hover:bg-black/5   text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={javascriptLogo} alt="" />
            <h1>Javascript</h1>
          </button>
          <button className="border border-black/20 p-2 rounded-sm cursor-pointer  hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={tailwind} alt="" />
            <h1>Tailwind</h1>
          </button>
          <button className="border border-black/20 p-2 rounded-sm cursor-pointer  hover:opacity-70 hover:bg-black/5   text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={gitLogo} alt="" />
            <h1>Git</h1>
          </button>
          <button className="border border-black/20 p-2 rounded-sm cursor-pointer hover:opacity-70  hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={githubLogo} alt="" />
            <h1>GitHub</h1>
          </button>
          <button className="border  border-black/20  p-2 rounded-sm cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={postmanLogo} alt="" />
            <h1>Postman</h1>
          </button>
          <button className="border  border-black/20  p-2 rounded-sm cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={vite} alt="" />
            <h1>Vite</h1>
          </button>
          <button className="border  border-black/20  p-2 rounded-sm cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img className="h-[30px] w-[30px]   " src={vercel} alt="" />
            <h1>Vercel</h1>
          </button>
        </div>
      </div>
    </>
  );
}
