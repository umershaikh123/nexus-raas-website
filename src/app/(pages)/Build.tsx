import React from "react"
import arbitrum from "/public/Images/icons/arbitrum.svg"
import optimism from "/public/Images/icons/optimism.svg"
import zksync from "/public/Images/icons/zksync.svg"
import celestia from "/public/Images/icons/celestia.svg"
import avail from "/public/Images/icons/avail.svg"
import anytrust from "/public/Images/icons/anytrust.svg"
import eth from "/public/Images/icons/eth.svg"
import btc from "/public/Images/icons/btc.svg"
import rtoken from "/public/Images/icons/rtoken.svg"
import { Fade } from "react-awesome-reveal"
import { BuildCard } from "@/components/Card"
import { Heading } from "@/components/Heading"

const BuildPage = () => {
  return (
    <div className="border w-full py-16  h-full flex flex-col justify-evenly items-center  border-x-2  border-t-2   border-[var(--page-border)]  relative">
      <div className="flex flex-col  items-center space-y-4 ">
        <Fade cascade duration={300} triggerOnce={true} delay={1000}>
          <Heading text="Build the rollup you want" />

          <div className="flex  min-[1400px]:flex-row flex-col items-center justify-between   ">
            <BuildCard
              title="Rollup Stack"
              image1={arbitrum}
              image2={optimism}
              image3={zksync}
              size1={200}
              size2={200}
              size3={170}
            />

            <div className=" min-[1520px]:w-[8rem] min-[1400px]:w-[4rem]  min-[1400px]:h-6 h-[4rem] w-[2rem] bg-gradient-to-r from-[var(--build-from)] to-[var(--build-to)]" />

            <BuildCard
              title="DA Layer"
              image1={celestia}
              image2={avail}
              image3={anytrust}
              size1={220}
              size2={130}
              size3={200}
            />
            <div className=" min-[1520px]:w-[8rem]  min-[1400px]:w-[4rem] min-[1400px]:h-6 h-[4rem] w-[2rem] bg-gradient-to-r from-[var(--build-from)] to-[var(--build-to)]" />
            <BuildCard
              title="Gas Token"
              image1={eth}
              image2={btc}
              image3={rtoken}
              size1={180}
              size2={200}
              size3={200}
            />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default BuildPage
