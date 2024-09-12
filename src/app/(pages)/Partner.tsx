import React from "react"
import Image from "next/image"
import biconomy from "/public/Images/icons/Biconomy white Horizontal Lockup.png"
import blockscout from "/public/Images/icons/blockscout.png"
import layeredge from "/public/Images/icons/layeredge.svg"
import { Fade } from "react-awesome-reveal"
const PartnerPage = () => {
  return (
    <div className="border w-full py-16  h-full flex flex-col justify-evenly items-center  border-x-2  border-t-2   border-[var(--page-border)]  relative">
      <div className="flex flex-col  items-center space-y-8  ">
        <Fade cascade duration={300} triggerOnce={true} delay={1000}>
          <h1
            className="lg:text-5xl text-4xl  font-bold bg-clip-text backdrop-blur py-4 text-transparent text-center "
            style={{
              backgroundImage:
                "linear-gradient(to bottom, white 44%, #0095FF 100%)",
            }}
          >
            Integration partners
          </h1>

          <div className="flex  lg:flex-row flex-col  lg:space-y-0 space-y-8   justify-center lg:items-center items-start  ">
            <Image
              src={layeredge}
              width={300}
              height={300}
              alt=""
              className=" "
            />
            <Image
              src={biconomy}
              width={300}
              height={300}
              alt=""
              className=" mr-6"
            />
            <Image
              src={blockscout}
              width={300}
              height={300}
              alt=""
              className=""
            />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default PartnerPage
