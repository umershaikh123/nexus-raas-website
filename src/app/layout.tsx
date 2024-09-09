"use client"

import type { Metadata } from "next"
import "./globals.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import ResponsiveAppBar from "@/components/navbar"

import NexusButton from "@/components/Button"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased md:mx-16`}>
        <ResponsiveAppBar />
        {children}
      </body>
    </html>
  )
}
