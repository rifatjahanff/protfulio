import React from 'react'
import Container from '../Container'
import Heading from '../Heading'

const Works = () => {
  return (
    <>
    <Container>
    <div className="mt-[150px] mb-[150px]">
      <Heading text={"My Awesome Work"} as={"p"} className={"text-[20px] mt-[10px] text-white text-center"} />
      <Heading text={"My Recent Works"} as={"h1"} className={"text-[50px] mt-[10px] text-white text-center mb-[150px]"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-[70px]">
        <a href="https://react-orbi.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="bg-[url('/src/assets/orabi.jpg')] bg-cover bg-center bg-no-repeat w-full h-[300px] border-[2px] border-amber-400 rounded-2xl"></div>
          <p className="text-white text-2xl mt-2 text-center">Made By React</p>
        </a>
        <a href="https://react-first-projectt.vercel.app" target="_blank" rel="noopener noreferrer">
          <div className="bg-[url('/src/assets/WorkTwo.jpg')] bg-cover bg-center bg-no-repeat w-full h-[300px] border-[2px] border-amber-400 rounded-2xl"></div>
          <p className="text-white text-2xl mt-2 text-center">Made By React</p>
        </a>
        <a href="https://add-to-cart-five-blue.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="bg-[url('/src/assets/WorkThree.jpg')] bg-cover bg-center bg-no-repeat w-full h-[300px] border-[2px] border-amber-400 rounded-2xl"></div>
          <p className="text-white text-2xl mt-2 text-center">Made By React</p>
        </a>
        <a href="https://react2nd-project.vercel.app" target="_blank" rel="noopener noreferrer">
          <div className="bg-[url('/src/assets/WorkFour.png')] bg-cover bg-center bg-no-repeat w-full h-[300px] border-[2px] border-amber-400 rounded-2xl"></div>
          <p className="text-white text-2xl mt-2 text-center">Made By React</p>
        </a>
      </div>
    </div>
    </Container>
    </>
  )
}

export default Works;
