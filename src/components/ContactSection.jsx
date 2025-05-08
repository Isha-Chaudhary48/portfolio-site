import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  return (
    <>
      <footer
        id="contact"
        className="contact  h-[450px] flex justify-center items-center flex-col    p-10 text-start mb-0 mt-5    text-[#434361]   "
      >
        <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl text-black font-semibold mb-8">
          Contact
        </h1>
        <hr className="w-[100%] md:w-[85%] mt-5  " />
        <div className=" w-[100%] md:w-[70%]  grid grid-rows-1 grid-cols-2 justify-center items-center ">
          <div>
            <p className="text-xl pt-4 pb-4">Contact Us</p>

            <p>Email: ishachere@gmail.com</p>
            <p>Phone: +91 7876798101</p>
          </div>
          <div className="grid grid-rows-4 ml-4  justify-center items-center text-lg sm:text-2xl sm:grid-cols-4 mt-10 ">
            <a href="https://www.linkedin.com/in/isha-chaudhary-8273b1286">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Isha-Chaudhary48/">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <FontAwesomeIcon icon={faFacebook} />
            <a href="https://x.com/ishiefisshie">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <hr className="w-[100%] md:w-[85%] mt-5  " />
        <div className="flex justify-center"></div>

        <div className=" h-40 pl-5 pr-5 pt-5 flex justify-center items-center  text-[#434361] text-center  ">
          <div>
            <p className="mb-8 text-lg">404: Limits not found.</p>
            <p className="pb-1 text-sm">
              &copy; 2025 Isha's company | <a href="/privacy">Privacy Policy</a>{" "}
              | <a href="/terms">Terms of Service</a>
            </p>
            <p className="text-sm"> Made by Isha with {"<3"}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
