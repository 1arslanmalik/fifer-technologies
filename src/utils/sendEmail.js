// // "use client"

// import { Resend } from "resend"
// import EmailTemplate from "../components/emailTemp"
// import { render } from "@react-email/render"

// export const sendEmail = async (prevState, formData) => {
//   const name = formData.get("name")
//   const email = formData.get("email")
//   const message = formData.get("message")
//   try {
//     const resend = new Resend(process.env.RESEND)
//     await resend.emails.send({
//       from: "",
//       to: email,
//       subject: "Fifer Technologies",
//       html: render(EmailTemplate({ name, email, message }))
//     })
//     return {
//       error: null,
//       success: true
//     }
//   } catch (error) {
//     console.log(error)
//     return {
//       error: error.message,
//       success: false
//     }
//   }
// }


import EmailTemplate from '../components/emailTemp';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendMail() {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello world',
    react: EmailTemplate({ 
        name: 'John',
        email: req.body.email,
        message: req.body.message
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

