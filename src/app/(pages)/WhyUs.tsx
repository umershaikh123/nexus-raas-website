import { FeatureCard } from "@/components/Card"
import React from "react"
import d1 from "/public/Images/FeaturesPage/d1.svg"
import d2 from "/public/Images/FeaturesPage/d2.svg"
import d5 from "/public/Images/FeaturesPage/d5.svg"
import { Fade } from "react-awesome-reveal"
import { Heading } from "@/components/Heading"

const WhyUs = () => {
  return (
    <div
      className="border   py-24  h-full flex flex-col justify-evenly items-center  border-x-2  border-t-2   border-[var(--page-border)]  relative"
      id="whyus"
    >
      <Fade cascade duration={300} triggerOnce={true} delay={1000}>
        <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[10%] h-[40%] bg-[#0e223faf]  rounded-full blur-[6rem]  -z-20 " />

        <Heading text="Why Us" />
        <p className=" text-[var(--paragraph)] lg:text-xl   max-w-[50rem] text-center mb-12 mt-4">
          Quick customised rollup deployment and expert support every step of
          the way
        </p>

        <div className="flex min-[1380px]:flex-row  flex-col  w-full min-w-[80vw] max-w-[100rem]  h-full justify-evenly items-center ">
          <FeatureCard
            title="Quick Launch "
            description="Setup the rollup to start building and scaling without delays "
            imageUrl={d1}
            size={250}
          />

          <FeatureCard
            title="Built to your needs "
            description="Customize your rollup to align with your goals"
            imageUrl={d5}
            size={150}
          />

          <FeatureCard
            title="Personalized support "
            description="Dedicated assistance for any challenges with our personalized support"
            imageUrl={d2}
            size={250}
          />
        </div>
      </Fade>
    </div>
  )
}

export default WhyUs
