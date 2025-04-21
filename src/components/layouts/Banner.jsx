import React from "react";
import Container from "../Container";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import Heading from "../Heading";

const Banner = () => {
  return (
    <>
      <Container>
        <div className="bg-[url('/src/assets/BannerArea.png')] bg-cover bg-center bg-no-repeat h-[800px] w-full relative mt-[150px]">
          <h1 className="text-white absolute text-xl sm:text-2xl md:text-3xl top-[120px] sm:top-[160px] md:top-[195px] left-4 sm:left-6 md:left-7">
            Welcome <span className="text-red-500 text-2xl sm:text-3xl md:text-4xl">To</span> My World
          </h1>

          <div className="absolute flex gap-3 sm:gap-5 md:gap-7 text-2xl sm:text-3xl left-4 sm:left-40 md:left-96 top-[180px] sm:top-[200px]">
            <FaFacebookSquare className="hover:bg-white bg-[#93F2FF] hover:text-red-500 cursor-pointer" />
            <FaLinkedin className="hover:bg-white bg-[#93F2FF] hover:text-red-500 cursor-pointer" />
            <FaTwitterSquare className="hover:bg-white bg-[#93F2FF] hover:text-red-500 cursor-pointer" />
            <FaInstagramSquare className="hover:bg-white bg-[#93F2FF] hover:text-red-500 cursor-pointer" />
          </div>

          <Heading
            text={
              <h1>
                <span className="text-red-500"> I Design &</span> Developing website.
              </h1>
            }
            as={"h1"}
            className="text-[30px] sm:text-[40px] md:text-[50px] text-white absolute top-[260px] sm:top-[280px] md:top-[300px] left-4 sm:left-6 md:left-7"
          />

          <div className="absolute top-[400px] sm:top-[420px] md:top-[450px] left-4 sm:left-6 md:left-7 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10">
            <a
              href="https://surl.li/vsewoz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-transparent text-white hover:bg-white hover:text-red-500 text-xl sm:text-2xl md:text-3xl px-6 py-4 sm:px-8 sm:py-5 md:p-9 rounded-2xl"
            >
              Hi I am Rifat Jahan
            </a>
            <a
              href="https://surl.li/zttibf"
              className="btn bg-transparent text-white hover:bg-white hover:text-red-500 text-xl sm:text-2xl md:text-3xl px-6 py-4 sm:px-8 sm:py-5 md:p-9 rounded-2xl"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
