import React from "react";

const Hero = () => (
  <div
    id="hero"
    className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
    style={{ backgroundImage: "url('/dow_back_2.jpeg')" }}
  >
    <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 drop-shadow-md">
      By IDF Elite Combat Veterans <br /> Realism Born from Experience
    </h1>
    <p className="text-xl md:text-2xl text-center text-white drop-shadow-sm">
      Redefining Tactical Military Shooters
    </p>
  </div>
);

export default Hero;
