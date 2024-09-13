import { Heading } from "@/components/Heading"
import { FormButton, NexusButton } from "@/components/Button"
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const { rollup, description, telegram, timeline, email } = form
    console.log("client logs", {
      rollup,
      description,
      telegram,
      timeline,
      email,
    })
    if (!timeline || !description || !telegram || !email || !rollup) {
      window.alert("Please fill all fields")
      return
    }

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rollup,
          description,
          telegram,
          timeline,
          email,
        }),
      })

      if (response.ok) {
        window.alert("Email sent successfully!")
      } else {
        window.alert("Failed to send email.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      window.alert("Error sending email.")
    }
  }

  return (
    <div className="border min-h-[90vh] py-16  h-full flex flex-col justify-evenly items-center  border-x-2  border-t-2   border-[var(--page-border)]  relative">
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[50%] bg-[#0e223faf]  rounded-full blur-[6rem]  -z-20 " />
      <Fade cascade duration={300} triggerOnce={true} delay={1000}>
        <Heading text=" Lets build your Rollup together" />

        <form
          className=" bg-[var(--formBG)] rounded-2xl py-8 px-8 flex flex-col   items-center"
          onSubmit={handleSubmit}
        >
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
          <FormButton text="Submit" handleClick={handleSubmit} />
        </form>
      </Fade>
    </div>
  )
}

export default Form
