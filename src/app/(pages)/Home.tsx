"use client"
import React from "react"
import NexusButton from "@/components/Button"
import Image from "next/image"
import coin from "/public/Images/Funders/coin_T.png"
import founder from "/public/Images/Funders/founderHeads.png"
import hash from "/public/Images/Funders/hashWhite.png"
import mask from "/public/Images/Funders/Mask_T.png"
import orbit from "/public/Images/Funders/orbit_T.png"

const HomePage = () => {
  return (
    <div className="border min-h-[87vh]  h-full flex flex-col justify-center items-center  border-x-2  border-t-2   border-[var(--page-border)]  relative">
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[70%] bg-[#0e223faf]  rounded-full blur-[6rem]  -z-20 " />

      <h1
        className="lg:text-7xl text-6xl font-bold bg-clip-text backdrop-blur py-4 text-transparent text-center "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white 44%, #0095FF 100%)",
        }}
      >
        Build your own Rollup
      </h1>
      <p className=" text-[var(--paragraph)] lg:text-xl my-6">
        Nexus Network provides customized and personal support for building your
        own Rollup
      </p>
      <NexusButton handleClick={() => {}} text={"Schedule Call"} />
      <div className="flex lg:space-x-16 space-x-4 justify-center items-center mt-[6rem]">
        <Image src={mask} width={100} height={100} alt="" />
        <Image src={coin} width={100} height={100} alt="" />
        <Image src={hash} width={100} height={100} alt="" />
        <Image src={founder} width={100} height={100} alt="" />
        <Image src={orbit} width={100} height={100} alt="" />
      </div>
    </div>
  )
}

export default HomePage
