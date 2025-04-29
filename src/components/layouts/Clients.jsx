import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Images from "../Images";
import cliOne from "../../assets/clientsOne.png";
import cliTwo from "../../assets/clientsTwo.png";
import cliThree from "../../assets/clientsThree.png";
import cliFour from "../../assets/clientsFour.png";
import cliFive from "../../assets/clientsFive.png";
import cliSix from "../../assets/clientsSix.png";
import cliSeven from "../../assets/clientsSeven.png";
import cliEight from "../../assets/clientsEight.png";

const Clients = () => {
  return (
    <Container>
      <div className="mt-[100px] mb-[150px]">
        <Heading
          text={"My Awesome Clients"}
          as={"p"}
          className={"text-[20px] mt-[10px] text-white text-center"}
        />
        <Heading
          text={"My Awesome Clients"}
          as={"h1"}
          className={"text-[50px] mt-[10px] text-white text-center pb-[80px]"}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          <Images imgSrc={cliOne} imgAlt="Client 1" className="w-[120px] sm:w-[150px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={cliTwo} imgAlt="Client 2" className="w-[120px] sm:w-[150px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={cliThree} imgAlt="Client 3" className="w-[120px] sm:w-[150px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={cliFour} imgAlt="Client 4" className="w-[120px] sm:w-[150px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={cliFive} imgAlt="Client 5" className="w-[120px] sm:w-[150px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={cliSix} imgAlt="Client 6" className="w-[120px] sm:w-[150px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={cliSeven} imgAlt="Client 7" className="w-[120px] sm:w-[150px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={cliEight} imgAlt="Client 8" className="w-[120px] sm:w-[150px] transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </Container>
  );
};

export default Clients;
