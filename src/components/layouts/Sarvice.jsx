import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import sOne from '../../assets/ServiceOne.png'
import sTwo from '../../assets/ServiceTwo.png'
import sThree from '../../assets/ServiceThree.png'
import sFour from '../../assets/ServiceFour.png'
import sFive from '../../assets/ServiceFive.png'
import sSix from '../../assets/ServiceSix.png'
import Images from '../Images'

const Sarvice = () => {
  return (
    <Container>
      <div className="mt-[100px]">
        <Heading
          text={"My Specializations Services"}
          as={"p"}
          className={"text-[20px] mt-[10px] text-white text-center"}
        />
        <Heading
          text={"What My Services"}
          as={"h1"}
          className={"text-[40px] sm:text-[50px] mt-[10px] text-white text-center mb-[80px]"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          <Images imgSrc={sOne} imgAlt="Service 1" className="w-[250px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={sTwo} imgAlt="Service 2" className="w-[250px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={sThree} imgAlt="Service 3" className="w-[250px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={sFour} imgAlt="Service 4" className="w-[250px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={sFive} imgAlt="Service 5" className="w-[250px] transition-transform duration-300 hover:scale-105" />
          <Images imgSrc={sSix} imgAlt="Service 6" className="w-[250px] transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </Container>
  )
}

export default Sarvice
