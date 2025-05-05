export default function Navbar() {
  return (
    <>
      <div className="flex font-mono ">
        <div className="text-[#00ADB5] font-semibold w-[100px] p-8 sm:h-[55%] sm:w-[172px] bg-gray-800 opacity-80 rounded-2xl  flex justify-center items-center pl-2 pr-2 fixed right-8 sm:right-5  md:top-[16%] top-[10%] z-20  ">
          <div className="flex justify-center items-center  flex-col gap-8 ">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>

            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}
