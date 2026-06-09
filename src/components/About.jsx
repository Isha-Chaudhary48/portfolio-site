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
        <h1 className=" text-2xl sm:text-4xl md:text-5xl    font-bold text-black mt-10 mb-10">
          I'm <span className="text-[#00ADB5]">{text}</span>
        </h1>

        <div className=" flex justify-center items-center p-2 rounded-2xl w-[80%]">
          <div className="md:grid md:grid-cols-2 md:gap-1 md:h-[60%] md:justify-center md:items-center flex-col flex  justify-center items-center">
            <div className=" h-[80%] w-[75%] md:h-[70%] md:[70%] md:mb-20 md:ml-8 transform duration-100 ease-in-out  hover:scale-95">
              <img className="rounded-md  " src={profilePicture} alt="" />
            </div>

            <div className=" text-lg md:text-lg    ">
              <div className="mt-12  text-[#434361] ">
                Hi, I'm a Computer Science and Engineering student with a strong passion for software development and technology. What began as a challenge soon became a journey of continuous learning, problem-solving, and innovation. Through hands-on projects, I have developed a solid foundation in building practical and efficient solutions. I enjoy exploring new technologies, writing clean code, and turning ideas into meaningful applications. Each project strengthens my technical skills and deepens my understanding of how technology can create real impact. As an aspiring developer, I am committed to continuous growth, embracing challenges, and delivering quality work. I am now seeking opportunities to apply my knowledge, collaborate with talented teams, and contribute to projects that solve real-world problems while advancing my professional journey.

              </div>
              <div>
                <button className="border-black text-white p-4 bg-black mt-4 rounded-md flex justify-center items-center gap-2 ">
                  <div>
                    <FaLink />
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1_oX0oKLowhIj5wgyg5KlfNVlgFX9GdpX/view?usp=drivesdk"
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
