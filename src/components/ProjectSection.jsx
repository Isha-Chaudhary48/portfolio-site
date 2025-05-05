import chefTable from "../assets/projectPhotos/chefTable.png";
import shortify from "../assets/projectPhotos/shortify.png";
import mongodbLogo from "../assets/logos/mongodbLogo.svg";
import htmlLogo from "../assets/logos/htmlLogo.svg";
import react from "../assets/logos/react.svg";
import nodejsStackedDark from "../assets/logos/nodejsStackedDark.svg";
import tailwind from "../assets/logos/tailwind.svg";

import ExpressLogo from "../assets/logos/ExpressLogo.svg";

import { FaLink } from "react-icons/fa";
import cssLogo from "../assets/logos/cssLogo.svg";

export default function ProjectSection() {
  return (
    <>
      <div className="h-full  flex justify-center items-center flex-col mt-10 sm:p-10 font-mono">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold">
          Recent Projects
        </h1>

        <div className=" w-[100%] md:w-[70%]">
          <div className="p-10">
            <h1 className="text-2xl pb-4 font-semibold">ChefTable</h1>
            <div className="text-[#434361] text-lg pb-4 flex justify-center items-center ">
              ChefTable is an AI-powered recipe assistant web app that helps
              users generate personalized recipes using Gemini AI based on their
              input. Users can also submit their own recipes, which are stored
              securely in a database. The app includes user authentication and
              displays both AI-generated and user-submitted recipes in a clean,
              organized interface.
            </div>

            <a
              target="_blank"
              href=""
              className="flex justify-center items-center  "
            >
              <img
                className="cursor-zoom-in hover:opacity-70 rounded-md  md:h-[500px]  "
                loading="lazy"
                src={chefTable}
                alt="chefTable image"
              />
            </a>
            <div className="gap-4 mt-10 mb-10 grid grid-cols-2 sm:flex sm:text-sm">
              <button className="border border-black/20 p-2 rounded-sm  hover:bg-black/5  cursor-pointer  hover:opacity-70 text-black flex gap-1 justify-center items-center">
                <img className="h-[30px] w-[30px]   " src={react} alt="" />{" "}
                React
              </button>
              <button className="border border-black/20 p-2 rounded-sm  hover:bg-black/5  cursor-pointer  hover:opacity-70 text-black flex gap-1 justify-center items-center">
                <img
                  className="h-[30px] w-[30px]   "
                  src={nodejsStackedDark}
                  alt=""
                />{" "}
                Node.js
              </button>
              <button className="border border-black/20 p-2 rounded-sm  hover:bg-black/5  cursor-pointer  hover:opacity-70 text-black flex gap-1 justify-center items-center">
                <img className="h-[30px] w-[30px]   " src={tailwind} alt="" />{" "}
                TailwindCSS
              </button>

              <button className="border border-black/20 p-2 rounded-sm  hover:bg-black/5  cursor-pointer  hover:opacity-70 text-black flex gap-1 justify-center items-center">
                <img
                  className="h-[30px] w-[30px]   "
                  src={mongodbLogo}
                  alt=""
                />
                MongoDB
              </button>
            </div>

            <button className=" text-white border-black p-4 bg-black mt-4 rounded-md flex gap-2 justify-center items-center">
              <FaLink />
              <a
                href="https://chef-bot-frontend.vercel.app/"
                className="text-white"
              >
                Visit Website
              </a>
            </button>
          </div>
          <div className="p-10">
            <h1 className="text-2xl pb-4 font-semibold">Shortify</h1>
            <div className="text-[#434361] text-lg pb-4 flex justify-center items-center ">
              Shortify is a fast and lightweight URL shortener that transforms
              long links into short, shareable ones. It features a clean
              interface and secure link storage. The app includes basic
              analytics, allowing users to track the exact time each shortened
              link is clicked, helping understand user activity timing without
              storing personal data.
            </div>
            <a
              target="_blank"
              href=""
              className="flex justify-center  items-center  "
            >
              <img
                className="cursor-zoom-in hover:opacity-70 rounded-md md:h-[500px] "
                loading="lazy"
                src={shortify}
                alt="chefTable image"
              />
            </a>
            <div className="grid grid-cols-2  sm:flex gap-4 mt-10 mb-10 sm:text-sm">
              <button className="border border-black/20 p-2 rounded-sm  hover:bg-black/5  cursor-pointer  hover:opacity-70 text-black flex gap-1 justify-center items-center">
                <img
                  className="h-[30px] w-[30px]   "
                  src={nodejsStackedDark}
                  alt=""
                />{" "}
                Node.js
              </button>
              <button className="border border-black/20 p-2 rounded-sm  hover:bg-black/5  cursor-pointer  hover:opacity-70 text-black flex gap-1 justify-center items-center">
                <img className="h-[30px] w-[30px]   " src={htmlLogo} alt="" />{" "}
                HTML
              </button>
              <button className="border border-black/20 p-2 rounded-sm  hover:bg-black/5  cursor-pointer  hover:opacity-70 text-black flex gap-1 justify-center items-center">
                <img className="h-[30px] w-[30px]   " src={cssLogo} alt="" />{" "}
                CSS
              </button>
            </div>

            <button className="text-white border-black p-4 bg-black  rounded-md flex gap-2 justify-center items-center">
              <FaLink />
              <a
                href="https://shortify-url-ten.vercel.app/"
                className="text-white"
              >
                Visit Website
              </a>
            </button>
            <div className="flex justify-center text-lg mt-8">
              And many more...
            </div>
            <div className="flex text-[#00ADB5] justify-center items-center mt-20 text-xl">
              Believe in the power of persistence; every challenge is an
              opportunity to grow and create something extraordinary
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
