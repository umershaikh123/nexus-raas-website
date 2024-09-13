import { NextResponse } from "next/server"
import { NextApiRequest } from "next"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { rollup, description, telegram, timeline, email } = await req.json()

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: "office@nexusnetwork.co.in",
      subject: "Nexus Rass New Form Submission",
      html: `
            <h3>Form Submission Details</h3>
            <p><strong>Rollup:</strong> ${rollup}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telegram:</strong> ${telegram}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
            <p><strong>Description:</strong> ${description}</p>
          `,
    })

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    )
  }
}
