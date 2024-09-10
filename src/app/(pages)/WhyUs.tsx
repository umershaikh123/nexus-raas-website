import { FeatureCard } from "@/components/Card"
import React from "react"
import d1 from "/public/Images/FeaturesPage/d1.svg"
import d2 from "/public/Images/FeaturesPage/d2.svg"
import d3 from "/public/Images/FeaturesPage/d3.svg"

import d5 from "/public/Images/FeaturesPage/d5.svg"

const WhyUs = () => {
  return (
    <div className="border min-h-[90vh] py-16  h-full flex flex-col justify-evenly items-center  border-x-2  border-t-2   border-[var(--page-border)]  relative">
      <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[35%] h-[70%] bg-[#0e223faf]  rounded-full blur-[6rem]  -z-20 " />

      <h1
        className="lg:text-5xl text-4xl font-bold bg-clip-text backdrop-blur py-4 text-transparent text-center "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white 44%, #0095FF 100%)",
        }}
      >
        Why Us
      </h1>
      <p className=" text-[var(--paragraph)] lg:text-xl   max-w-[50rem] text-center mb-12 mt-4">
        Rollups can integrate with Nexus Network within minutes to earn yields
        in a secure and non-custodial way
      </p>

      <div className="flex flex-wrap  lg:max-w-[50vw] w-full  h-full justify-evenly items-center  ">
        <FeatureCard
          title="Personalized Experience"
          description="We provide a personalized experience to our clients"
          imageUrl={d1}
          size={250}
        />

        <FeatureCard
          title="Customization"
          description="We provide tailored customization of
rollups according to our clients"
          imageUrl={d5}
          size={150}
        />

        <FeatureCard
          title="Expertise"
          description="We have been building Rollups for
years"
          imageUrl={d2}
          size={250}
        />

        <FeatureCard
          title="Security"
          description="we provide the best security and
optimal performance"
          imageUrl={d3}
          size={220}
        />
      </div>
    </div>
  )
}

export default WhyUs
