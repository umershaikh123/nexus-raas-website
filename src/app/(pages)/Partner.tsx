import React from "react"
import Image from "next/image"
import coin from "/public/Images/Funders/coin_T.png"
import founder from "/public/Images/Funders/founderHeads.png"
import hash from "/public/Images/Funders/hashWhite.png"
import mask from "/public/Images/Funders/Mask_T.png"
import orbit from "/public/Images/Funders/orbit_T.png"

const PartnerPage = () => {
  return (
    <div className="border w-full py-16  h-full flex flex-col justify-evenly items-center  border-x-2  border-t-2   border-[var(--page-border)]  relative">
      <div className="flex flex-col  items-center space-y-8  ">
        <h1
          className="lg:text-5xl text-4xl  font-bold bg-clip-text backdrop-blur py-4 text-transparent text-center "
          style={{
            backgroundImage:
              "linear-gradient(to bottom, white 44%, #0095FF 100%)",
          }}
        >
          Integration partners
        </h1>

        <div className="flex lg:space-x-16 space-x-4 justify-center items-center mt-[6rem]">
          <Image src={mask} width={100} height={100} alt="" />
          <Image src={coin} width={100} height={100} alt="" />
          <Image src={hash} width={100} height={100} alt="" />
          <Image src={founder} width={100} height={100} alt="" />
          <Image src={orbit} width={100} height={100} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PartnerPage
