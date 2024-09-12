import NexusButton from "@/components/Button"
import React from "react"
import { Alert, TextField } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Fade } from "react-awesome-reveal"

const StyledTextField = styled(TextField)(({ width }: { width?: string }) => ({
  width: width || "37vw",
  color: "white",
  marginTop: "20px",
  marginBottom: "20px",

  backgroundColor: "#101A23",
  "& label": {
    color: "var(--formtext)",
    "&.Mui-focused": {
      color: "var(--formtext)",
    },
  },
  "& input": {
    color: "var(--formtext)",
    backgroundColor: "#101A23",
  },

  "& .MuiOutlinedInput-root": {
    color: "var(--paragraph)",

    "& fieldset": {
      borderColor: "var(--formBorder)",
    },
    "&:hover fieldset": {
      borderColor: "var(--formBorder)",
      color: "var(--formtext)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--formBorder)",
      color: "var(--formtext)",
    },
  },
}))

const Form = () => {
  const [form, setForm] = React.useState({
    rollup: "",
    description: "",
    timeline: "",
    telegram: "",
    email: "",
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event?.target
    setForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { rollup, description, telegram, timeline, email } = form
    if (!timeline || !description || !telegram || !email || !rollup) {
      window.alert("please fill all fields")
      return
    }
  }

  return (
    <div className="border min-h-[90vh] py-16  h-full flex flex-col justify-evenly items-center  border-x-2  border-t-2   border-[var(--page-border)]  relative">
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[50%] bg-[#0e223faf]  rounded-full blur-[6rem]  -z-20 " />
      <Fade cascade duration={300} triggerOnce={true} delay={1000}>
        <h1
          className="lg:text-5xl text-4xl font-bold bg-clip-text backdrop-blur py-4 text-transparent text-center  mb-8"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, white 44%, #0095FF 100%)",
          }}
        >
          Lets build your Rollup together
        </h1>

        <form className=" bg-[var(--formBG)] rounded-2xl py-8 px-8 flex flex-col   items-center">
          <div className="flex   space-x-6">
            <StyledTextField
              name="rollup"
              type="text"
              label="What Rollup do you want to use ?"
              placeholder="Arbitrum ..."
              value={form.rollup}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />

            <StyledTextField
              name="email"
              type="text"
              label="Your Email"
              placeholder="Enter your email ..."
              value={form.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </div>

          <div className="flex  space-x-6">
            <StyledTextField
              name="timeline"
              type="text"
              label="What is your timeline for mainnet deployment?"
              multiline
              placeholder="Enter your timeline ..."
              value={form.timeline}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />

            <StyledTextField
              name="telegram"
              type="text"
              label="Telegram handle"
              placeholder="@user ..."
              value={form.telegram}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <StyledTextField
              width="75vw"
              name="description"
              type="text"
              label="Describe your project at a high-level"
              multiline
              placeholder="description of the project ..."
              value={form.description}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              minRows={6}
            />
          </div>
          <NexusButton text="Submit" handleClick={handleSubmit} />
        </form>
      </Fade>
    </div>
  )
}

export default Form
