import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Logo from "../../assets/logo.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="h-[350px] md:h-[250px] bg-[#10102B] rounded-t-2xl border-2 border-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-[100px] h-[80px]">
              <img src={Logo} alt="Logo" className="w-full" />
            </div>
            <Heading
              text={"Rifat Jahan"}
              as={"p"}
              className={"text-[20px] mt-[10px] text-white"}
            />
            <div className="flex mt-[10px] items-center">
              <IoMdMail className="text-xl mt-[7px] bg-[#93F2FF]  mr-[10px]" />
              <Heading
                text={"jahanrifat953@gmail.com"}
                as={"p"}
                className={"text-[20px] text-white"}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
            <div className="flex gap-5 text-3xl mt-[30px] md:mt-[125px]">
              <FaFacebookSquare className="hover:bg-white bg-[#93F2FF]  hover:text-red-500 cursor-pointer" />
              <FaLinkedin className="hover:bg-white bg-[#93F2FF]  hover:text-red-500 cursor-pointer" />
              <FaTwitterSquare className="hover:bg-white bg-[#93F2FF]  hover:text-red-500 cursor-pointer" />
              <FaInstagramSquare className="hover:bg-white bg-[#93F2FF]  hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
