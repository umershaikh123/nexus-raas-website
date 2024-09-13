import type { Metadata } from "next"
import "./globals.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import ResponsiveAppBar from "@/components/navbar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>
      </head>
      <body className={`antialiased md:mx-16`}>
        <ResponsiveAppBar />
        {children}
      </body>
    </html>
  )
}
