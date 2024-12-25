import React from "react";

const About = () => (
  <div
    id="about"
    className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16"
  >
    <div className="container mx-auto px-4">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center mb-10 uppercase tracking-wider">
        About Us
      </h2>
      {/* Intro Paragraph */}
      <p className="text-lg text-center max-w-4xl mx-auto mb-12 leading-relaxed">
        Dust of War is a tactical FPS military simulator created by combat
        veterans. Our mission is to redefine the genre by delivering unmatched
        realism and tactical gameplay, inspired by real-life combat experience.
      </p>
      {/* 3 Key Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg">
          <h3 className="text-xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-300">
            To shatter the glass ceiling of tactical FPS games, combining
            real-world military experience with innovative game mechanics.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg">
          <h3 className="text-xl font-bold mb-4">Our Game</h3>
          <p className="text-gray-300">
            Powered by Unreal Engine 5, Dust of War captures every nuance of
            combat, from weapon handling to teamwork under pressure.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg">
          <h3 className="text-xl font-bold mb-4">Our Team</h3>
          <p className="text-gray-300">
            Led by veterans from elite IDF units, our team brings a fresh
            perspective, grounded in real-life expertise, to redefine tactical
            FPS games.
          </p>
        </div>
      </div>
      {/* Meet the Team */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center mb-8 uppercase tracking-wide">
          Meet the Team
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[
            { name: "Itai Levin", role: "Team Lead", unit: "Sayeret Givati" },
            { name: "Ori Atias", role: "Software Engineer", unit: "Yahalom" },
            {
              name: "Chanan Berkotitz",
              role: "Software Engineer",
              unit: "Sayert Golani",
            },
            { name: "Yonatan Haba", role: "Software Engineer", unit: "Magav" },
            {
              name: "Shmuel Metzger",
              role: "Software Engineer",
              unit: "Nahal",
            },
            {
              name: "Saar Partush",
              role: "Lead Designer & Environment Artist",
              unit: "Nahal",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="text-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg"
            >
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
