import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Images from "../Images";
import skOne from "../../assets/skillsOne.png";
import skTwo from "../../assets/skillsTwo.png";
import skThree from "../../assets/skillsThree.png";
import skFour from "../../assets/skillsFour.png";
import skFive from "../../assets/skillsFive.png";
import skSix from "../../assets/skillsSix.png";

const Skills = () => {
  return (
    <Container>
      <div className="mt-[100px]">
        <Heading
          text={"My Awesome Skills"}
          as={"p"}
          className={"text-[20px] mt-[10px] text-white text-center"}
        />
        <Heading
          text={"My Awesome Skills"}
          as={"h1"}
          className={"text-[40px] sm:text-[50px] mt-[10px] text-white text-center mb-[100px]"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center">
          <div className="text-center">
            <Images imgSrc={skOne} imgAlt="Figma Design" className="w-[100px]" />
            <Heading
              text={"Figma Design"}
              as={"p"}
              className={"text-[18px] mt-[10px] text-white"}
            />
          </div>
          <div className="text-center">
            <Images imgSrc={skTwo} imgAlt="Adobe Photoshop" className="w-[100px]" />
            <Heading
              text={"Adobe Photoshop"}
              as={"p"}
              className={"text-[18px] mt-[10px] text-white"}
            />
          </div>
          <div className="text-center">
            <Images imgSrc={skThree} imgAlt="XD Design" className="w-[100px]" />
            <Heading
              text={"XD Design"}
              as={"p"}
              className={"text-[18px] mt-[10px] text-white"}
            />
          </div>
          <div className="text-center">
            <Images imgSrc={skFour} imgAlt="AI Generators" className="w-[100px]" />
            <Heading
              text={"AI Generators"}
              as={"p"}
              className={"text-[18px] mt-[10px] text-white"}
            />
          </div>
          <div className="text-center">
            <Images imgSrc={skFive} imgAlt="React Native" className="w-[100px]" />
            <Heading
              text={"React Native"}
              as={"p"}
              className={"text-[18px] mt-[10px] text-white"}
            />
          </div>
          <div className="text-center">
            <Images imgSrc={skSix} imgAlt="Postman Tools" className="w-[100px]" />
            <Heading
              text={"Postman Tools"}
              as={"p"}
              className={"text-[18px] mt-[10px] text-white"}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
