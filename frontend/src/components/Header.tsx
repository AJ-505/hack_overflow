import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#2c2535]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-white text-xl font-bold">
          Callout
        </div>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            {/* Add more header features here */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;