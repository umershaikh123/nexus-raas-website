import React from "react"
import Image from "next/image"
import biconomy from "/public/Images/icons/Biconomy white Horizontal Lockup.png"
import blockscout from "/public/Images/icons/blockscout.png"
import layeredge from "/public/Images/icons/layeredge.svg"
import { Fade } from "react-awesome-reveal"
import { Heading } from "@/components/Heading"
const PartnerPage = () => {
  return (
    <div className="border w-full py-24  h-full flex flex-col justify-evenly items-center  border-x-2  border-t-2   border-[var(--page-border)]  relative">
      <div className="flex flex-col  items-center space-y-0 ">
        <Fade cascade duration={300} triggerOnce={true} delay={1000}>
          <Heading text="Integration partners" />

          <div className="flex  space-x-8 lg:flex-row flex-col  lg:space-y-0 space-y-8   justify-center lg:items-center items-start  ">
            <Image
              src={layeredge}
              width={200}
              height={200}
              alt=""
              className="  border py-4 px-4 rounded-2xl border-[var(--build-border)] "
            />
            <Image
              src={biconomy}
              width={200}
              height={200}
              alt=""
              className="  border py-3 px-4 rounded-2xl border-[var(--build-border)]  "
            />
            <Image
              src={blockscout}
              width={200}
              height={200}
              alt=""
              className="  border py-5 px-4 rounded-2xl border-[var(--build-border)] "
            />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default PartnerPage
