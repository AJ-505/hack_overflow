import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#2c2535] py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">
          Welcome to PAU's #1 Incident Reporting Platform!
        </h1>
        <p className="text-gray-200 max-w-2xl">
          If you see anything that's not right in PAU, report it, and get them fixed!
        </p>
      </div>
    </section>
  )
}

export default Hero;