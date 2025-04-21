import React from 'react'
import Container from '../Container'
import Heading from '../Heading'

const Works = () => {
  return (
    <>
    <Container>
    <div className="mt-[150px]">
      <Heading text={"My Awesome Work"} as={"p"} className={"text-[20px] mt-[10px] text-white text-center"} />
      <Heading text={"My Recent Works"} as={"h1"} className={"text-[50px] mt-[10px] text-white text-center mb-[150px]"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-[70px]">
        <a href="https://react-orbi.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="w-full h-[300px] border-[2px] border-amber-400"></div>
        </a>
        <a href="https://react-orbi.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="w-full h-[300px] border-[2px] border-amber-400"></div>
        </a>
        <a href="https://react-orbi.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="w-full h-[300px] border-[2px] border-amber-400"></div>
        </a>
        <a href="https://react-orbi.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="w-full h-[300px] border-[2px] border-amber-400"></div>
        </a>
      </div>
    </div>
    </Container>
    </>
  )
}

export default Works;
