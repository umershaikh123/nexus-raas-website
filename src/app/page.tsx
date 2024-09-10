"use client"
import Image from "next/image"
import HomePage from "./(pages)/Home"
import Footer from "@/components/Footer"
import WhyUs from "./(pages)/WhyUs"
import Form from "./(pages)/Form"
export default function Main() {
  return (
    <>
      <HomePage />

      <WhyUs />
      <Form />
      <Footer />
    </>
  )
}
