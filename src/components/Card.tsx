import React from "react"

import Image from "next/image"
export const FeatureCard = ({
  imageUrl,
  title,
  description,
  size,
}: {
  imageUrl: string
  title: string
  description: string
  size: number
}) => {
  return (
    <div
      className={`my-2 px-4  h-full  max-h-[20rem]  min-h-[20rem] w-full max-w-[25rem]  shadow-innerC shadow-black    flex-col   py-8   bg-gradient-to-t from-[var(--box-shadow-from)]  to-[var(--box-shadow-to)]    border-8 border-[var(--box-shadow-border)] rounded-2xl    border-double flex justify-center items-center  `}
    >
      <div>
        <Image src={imageUrl} width={size} height={size} alt="box image" />
      </div>

      <div className="  h-[0.2rem]    min-h-[0.2rem] w-full  max-w-64  bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" />

      <h4 className=" text-center text-xl mb-2">{title}</h4>

      <p className=" text-center text-base text-gray-500">{description}</p>
    </div>
  )
}
