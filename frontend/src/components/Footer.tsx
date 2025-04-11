import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c2535] text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">© 2025 Callout. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-sm text-white hover:underline">
            About Callout
          </a>
          <a href="#" className="text-sm text-white hover:underline">
            Terms of Use
          </a>
          <a href="#" className="text-sm text-white hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
