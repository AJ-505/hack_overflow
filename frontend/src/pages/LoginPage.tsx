import React, { FormEvent } from "react";
import InputGroup from "../components/InputGroup";
import ImageSection from "../components/ImageSection";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your login logic here.
  };

  return (
    <div className="min-h-screen pt-2 flex flex-col justify-center items-center bg-[#5f5a78]">
      <div className="w-[90%] bg-[#2c2535] rounded-[12px] flex gap-6 justify-between min-h-[80vh] max-w-[850px] shadow-md p-6">
        <ImageSection title="Capturing PAU's Incidents. All in one place." />
        <div className="flex flex-col font-poppins">
          <h2 className="text-white text-[2rem] mb-4 text-center font-medium">
            Login to your account
          </h2>
          <form onSubmit={handleSubmit}>
            <InputGroup
              label="Username"
              type="text"
              id="username"
              placeholder="Enter Username"
              required
            />
            <InputGroup
              label="Password"
              type="password"
              id="password"
              placeholder="Enter Password"
              minLength={6}
              maxLength={20}
              required
            />
            <button
              type="submit"
              className="py-2 px-4 bg-[#6a5acd] rounded-[5px] text-lg w-full transition-opacity duration-100 ease-out mb-6 cursor-pointer hover:opacity-80 focus:opacity-80"
            >
              Login
            </button>
            <p className="text-white text-center">
              Don&apos;t have an account?{" "}
              <Link to="/sign-up" className="hover:text-[#6a5acd] focus:text-[#6a5acd]">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
