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
import Matplotlib from "../assets/logos/Matplotlib.svg";
import Jupyter from "../assets/logos/Jupyter.svg";
import NumPy from "../assets/logos/NumPy.svg";
import Pandas from "../assets/logos/Pandas.svg";
import PostgresSQL from "../assets/logos/PostgresSQL.svg";
import Python from "../assets/logos/Python.svg";
import Streamlit from "../assets/logos/Streamlit.svg";
import Ubuntu from "../assets/logos/Ubuntu.svg";
import TypeScript from "../assets/logos/TypeScript.svg";
import expolatory from '../assets/logos/exploratory-analysis.png';

export default function Skills() {

  return (
    <>
      <div
        id="skills"
        className=" p-4 flex  justify-center items-center   flex-col   "
      >
        <h1 className=" text-2xl sm:text-4xl lg:text-5xl  mb-18 font-semibold">
          Technologies I use
        </h1>

        <div className=" w-[100%] sm:w-[70%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  justify-center items-center md:text-lg">
          <button className="border border-black/20 p-2 rounded-md hover:bg-black/5  cursor-pointer  hover:opacity-70 text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]   "
              src={react}
              alt=""
            />
            <h1>React</h1>
          </button>
          <button className="border border-black/20 p-2   rounded-md  hover:bg-black/5  cursor-pointer hover:opacity-70  text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]   "
              src={nextjs}
              alt=""
            />
            <h1>Next.js</h1>
          </button>

          <button className="border border-black/20 p-2   rounded-md cursor-pointer hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]   "
              src={nodejsStackedDark}
              alt=""
            />
            <h1>Node.js</h1>
          </button>
          <button className="border border-black/20 p-2   rounded-md cursor-pointer hover:opacity-70  hover:bg-black/5   text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]   "
              src={ExpressLogo}
              alt=""
            />
            <h1>Express.js</h1>
          </button>
          <button className="border border-black/20 p-2   rounded-md cursor-pointer  hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]   "
              src={mongodbLogo}
              alt=""
            />
            <h1>MongoDB</h1>
          </button>
          <button className="border border-black/20 p-2   rounded-md cursor-pointer hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]   "
              src={c}
              alt=""
            />
            <h1>C++</h1>
          </button>
          <button className="border border-black/20 p-2   rounded-md cursor-pointer hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]   "
              src={htmlLogo}
              alt=""
            />
            <h1>HTML</h1>
          </button>
          <button className="border border-black/20 p-2   rounded-md cursor-pointer hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]   "
              src={cssLogo}
              alt=""
            />
            <h1>CSS</h1>
          </button>
          <button className="border border-black/20 p-2   rounded-md cursor-pointer hover:opacity-70 hover:bg-black/5   text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={javascriptLogo}
              alt=""
            />
            <h1>Javascript</h1>
          </button>
          <button className="border border-black/20 p-2   rounded-md cursor-pointer  hover:opacity-70 hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]   "
              src={tailwind}
              alt=""
            />
            <h1>Tailwind</h1>
          </button>
          <button className="border border-black/20 p-2   rounded-md cursor-pointer  hover:opacity-70 hover:bg-black/5   text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]   "
              src={gitLogo}
              alt=""
            />
            <h1>Git</h1>
          </button>
          <button className="border border-black/20 p-2   rounded-md cursor-pointer hover:opacity-70  hover:bg-black/5  text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]   "
              src={githubLogo}
              alt=""
            />
            <h1>GitHub</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={postmanLogo}
              alt=""
            />
            <h1>Postman</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={vite}
              alt=""
            />
            <h1>Vite</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={vercel}
              alt=""
            />
            <h1>Vercel</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={Jupyter}
              alt=""
            />
            <h1>Jupyter</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={Matplotlib}
              alt=""
            />
            <h1>Matplotlib</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={NumPy}
              alt=""
            />
            <h1>Numpy</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={Pandas}
              alt=""
            />
            <h1>Pandas</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={PostgresSQL}
              alt=""
            />
            <h1>PostgresSQL</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={Python}
              alt=""
            />
            <h1>Python</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={Streamlit}
              alt=""
            />
            <h1>Streamlit</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={Ubuntu}
              alt=""
            />
            <h1>Matplotlib</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={TypeScript}
              alt=""
            />
            <h1>TypeScript</h1>
          </button>
          <button className="border  border-black/20  p-2   rounded-md cursor-pointer  hover:opacity-80 hover:bg-black/5    text-black flex gap-1 justify-center items-center">
            <img
              className="h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
              src={expolatory}
              alt=""
            />
            <h1>Data Analysis</h1>
          </button>

        </div>
      </div>
    </>
  );
}
