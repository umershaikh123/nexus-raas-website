import React from "react"
export function Heading({ text }: { text: string }) {
  return (
    <h1
      className="lg:text-5xl text-4xl font-semibold bg-clip-text backdrop-blur py-4 text-transparent text-center  mb-8"
      style={{
        backgroundImage: "linear-gradient(to bottom, white 36%, #7d8b94 100%)",
      }}
    >
      {text}
    </h1>
  )
}

// "linear-gradient(to bottom, white 44%, #0095FF 100%)",
