import React from "react"
import logo from "/public/Images/logo.png"
import Image from "next/image"
import Link from "next/link"

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import { Fade } from "react-awesome-reveal"

export default function Footer() {
  return (
    <Fade cascade duration={300} triggerOnce={true} delay={1000}>
      <div
        className={`justify-center items-center flex  z-10     md:px-16 px-0  mx-auto   `}
        id="footer"
      >
        <div
          className="h-full   w-full lg:p-16 py-24 flex    items-center   relative       "
          id="FooterM"
        >
          <div className=" w-full    px-8 flex md:flex-row flex-col justify-center">
            <div className="  w-full justify-center flex" id="c1">
              <div className="flex flex-col space-y-4">
                <Image
                  src={logo}
                  width={120}
                  height={120}
                  alt="nexus logo"
                  className=""
                />

                <p className=" xl:text-base text-sm lg:text-md  text-gray-400">
                  © 2024 Nexus Network, Inc.
                </p>
              </div>
            </div>

            <div className=" flex w-full space-x-24 md:mt-0 mt-16 justify-center">
              <div className="flex flex-col  " id="c2">
                <p className=" sm:text-base text-sm text-gray-400 mb-3">
                  Socials
                </p>

                <Link
                  href={"https://twitter.com/NexusNetwork_0x"}
                  target="_blank"
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Twitter
                </Link>

                <Link
                  href={
                    "https://www.linkedin.com/company/nexus-network-staking-infra/"
                  }
                  target="_blank"
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Linkedin
                </Link>

                <Link
                  href={"https://discord.gg/wnTfyh6T"}
                  target="_blank"
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Discord
                </Link>
              </div>

              <div className="flex flex-col " id="c3">
                <p className=" sm:text-lg text-sm text-gray-400 mb-2">Links</p>

                <Link
                  href={"https://docs.nexusnetwork.live/"}
                  target="_blank"
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Documentation
                </Link>

                <div className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out">
                  <ScrollLink
                    to="DemoPage"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Demo
                  </ScrollLink>
                </div>

                <div className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out">
                  Schedule Call
                </div>

                <Link
                  href={"/"}
                  target="_blank"
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Terms of service
                </Link>

                <Link
                  href={"/"}
                  target="_blank"
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
