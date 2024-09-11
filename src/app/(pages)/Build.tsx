import React from "react"

const BuildPage = () => {
  return (
    <div className="border w-full py-16  h-full flex flex-col justify-evenly items-center  border-x-2  border-t-2   border-[var(--page-border)]  relative">
      <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[35%] h-[70%] bg-[#0e223faf]  rounded-full blur-[6rem]  -z-20 " />
      <div className="flex flex-col  items-start space-y-4 ">
        <h1
          className="lg:text-5xl text-4xl font-bold bg-clip-text backdrop-blur py-4 text-transparent text-center "
          style={{
            backgroundImage:
              "linear-gradient(to bottom, white 44%, #0095FF 100%)",
          }}
        >
          Build the rollup you want
        </h1>

        <div className="flex text-3xl text-left ">
          Rollup stack - Arbitrum, zkSync, Optimism
        </div>

        <div className="flex text-3xl text-left">
          DA - Celestia, Avail, Arbitrum Anytrust
        </div>

        <div className="flex text-3xl text-left">
          Gas token - ETH, BTC, Rollup token
        </div>
      </div>
    </div>
  )
}

export default BuildPage
