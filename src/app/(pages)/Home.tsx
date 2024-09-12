import React from "react"
import NexusButton from "@/components/Button"
import Image from "next/image"
import arbitrumLogo from "/public/Images/icons/arbitrum.png"
import optimismLogo from "/public/Images/icons/optimism.png"
import zkLogo from "/public/Images/icons/zksync.svg"
import { Fade } from "react-awesome-reveal"
const HomePage = () => {
  return (
    <div className="border min-h-[87vh]  h-full flex flex-col justify-center items-center  border-x-2  border-t-2   border-[var(--page-border)]  relative">
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[70%] bg-[#0e223faf]  rounded-full blur-[6rem]  -z-20 " />
      <Fade cascade duration={300} triggerOnce={true}>
        <h1
          className="lg:text-7xl text-6xl font-bold bg-clip-text backdrop-blur py-4 text-transparent text-center "
          style={{
            backgroundImage:
              "linear-gradient(to bottom, white 44%, #0095FF 100%)",
          }}
        >
          Rollup deployment made simple
        </h1>
        <p className=" text-[var(--paragraph)] lg:text-xl my-6">
          Deploy, customize, and scale your rollup effortlessly with our simple
          integration and ongoing support
        </p>

        <div className="flex space-x-8 justify-center items-center mb-4">
          <div className="flex items-center opacity-90">
            <Image src={arbitrumLogo} width={50} height={50} alt="" />
            <h1 className=" leading-loose   tracking-widest text-xl font-bold  ">
              ARBITRUM
            </h1>
          </div>
          <div className="flex items-center space-x-2 opacity-90">
            <Image src={optimismLogo} width={40} height={40} alt="" />
            <h1 className=" leading-loose   tracking-widest  text-xl font-bold">
              OPTIMISM
            </h1>
          </div>

          <Image
            src={zkLogo}
            width={150}
            height={150}
            alt=""
            className="opacity-90"
          />
        </div>

        <NexusButton handleClick={() => {}} text={"Schedule Call"} />
      </Fade>
    </div>
  )
}

export default HomePage
