import React from "react"

import Image, { StaticImageData } from "next/image"
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
export const BuildCard = ({
  title,
  image1,
  image2,
  image3,
  size1 = 200,
  size2 = 200,
  size3 = 170,
}: {
  title: string
  image1: StaticImageData
  image2: StaticImageData
  image3: StaticImageData
  size1?: number
  size2?: number
  size3?: number
}) => {
  return (
    <div className="flex border w-fit h-full rounded-2xl border-[var(--build-border)] items-center justify-center">
      <div className="flex flex-col px-12 py-10 items-center justify-center">
        <h1 className="text-3xl font-semibold mb-7">{title}</h1>

        <div className="flex flex-col  space-y-8 items-center">
          <div className=" border border-[var(--formBorder)] px-8 py-2 w-[17rem] h-[6rem] rounded-2xl flex items-center justify-center">
            <Image src={image1} width={size1} height={size1} alt="logo" />
          </div>

          <div className=" border border-[var(--formBorder)] px-8 py-2 w-[17rem] h-[6rem] rounded-2xl flex items-center justify-center">
            <Image src={image2} width={size2} height={size2} alt="logo" />
          </div>

          <div className=" border border-[var(--formBorder)] px-8 py-2  w-[17rem] h-[6rem] rounded-2xl flex items-center justify-center">
            <Image src={image3} width={size3} height={size3} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
