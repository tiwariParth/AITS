import { useState, useEffect } from "react";
import img from "../assets/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div id="Home" className={`${isMounted ? "fade-in" : ""}`}>
      <main
        className="h-screen font-bold"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className=" flex flex-col gap-5 justify-center  bg-black h-full w-full bg-opacity-40 text-white md:text-left text-center px-10 md:py-4 py-2">
          <div className="font-extrabold  text-5xl">
            <h1>The Institute for Higher Learning</h1>
          </div>
          <div className="w-[70%] flex flex-col overflow-hidden md:text-justify text-center ">
            <p className="md:block hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at
              maxime blanditiis quidem sint hic mollitia nisi. Ea odit, sint
              quos dolor sed tenetur sit vitae quibusdam culpa quasi. Voluptates
              ipsam beatae modi veritatis itaque consectetur molestiae
              architecto odio placeat dolorem eos fuga minima, magni porro.
              Temporibus blanditiis aperiam rerum.
            </p>
            <button
              style={{
                transition: "all 0.3s",
              }}
              className="bg-blue-500 hover:bg-blue-400 hover:-translate-y-1 text-white font-bold py-2 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4 md:self-start self-end"
            >
              Join Now!
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
