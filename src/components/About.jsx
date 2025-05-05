// import aboutPic from "../assets/aboutPic.jpg";
import profilePicture from "../assets/profilePicture.jpg";
import { useTypewriter } from "react-simple-typewriter";
import { FaLink } from "react-icons/fa";
export default function About() {
  const [text] = useTypewriter({
    words: ["Isha", " a Web Developer"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });
  return (
    <>
      <div
        id="about"
        className=" p-4 flex  justify-center items-center flex-col"
      >
        <h1 className=" text-2xl sm:text-4xl md:text-5xl  font-mono font-bold text-black mt-10 mb-10">
          I'm <span className="text-[#00ADB5]">{text}</span>
        </h1>

        <div className=" flex justify-center items-center p-2 rounded-2xl w-[80%]">
          <div className="md:grid md:grid-cols-2 md:gap-2 md:h-[60%] md:justify-center md:items-center flex-col flex  justify-center items-center">
            <div className=" h-[80%] w-[75%] md:h-[70%] md:[70%] md:mb-20 md:ml-8 transform duration-100 ease-in-out  hover:scale-95">
              <img className="rounded-2xl  " src={profilePicture} alt="" />
            </div>

            <div className="text-lg font-mono  ">
              <div className="mt-12  text-[#434361] ">
                Hi, I’m a 3rd-year Computer Science and Engineering student and
                an aspiring developer. When I first started coding, I found it
                confusing—syntax, errors, and logic all seemed overwhelming. At
                that time, I wasn’t really interested in it. But as I explored
                different technologies and started working on projects, I
                gradually developed a passion for solving problems through code.
                Now, I enjoy building applications, learning new concepts, and
                improving my skills every day. As a fresher, I’m eager to gain
                real-world experience, collaborate on exciting projects, and
                grow as a developer.
              </div>
              <div>
                <button className="border-black text-white p-4 bg-black mt-4 rounded-md flex justify-center items-center gap-2 ">
                  <div>
                    <FaLink />
                  </div>
                  <a
                    href="https://chef-bot-frontend.vercel.app/"
                    className="text-white"
                  >
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
