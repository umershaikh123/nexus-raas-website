"use client"

import HomePage from "./(pages)/Home"
import Footer from "@/components/Footer"
import WhyUs from "./(pages)/WhyUs"
import Form from "./(pages)/Form"
import BuildPage from "./(pages)/Build"
export default function Main() {
  return (
    <>
      <HomePage />

      <WhyUs />
      <BuildPage />
      <Form />
      <Footer />
    </>
  )
}
