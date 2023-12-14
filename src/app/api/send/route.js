// // import { EmailTemplate } from '../../../components/EmailTemplate';
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req,res) {
//   const {body} = req;
//   const {email, subject, message} = body;
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: ['burhaann321@gmail.com',email],
//       subject: subject,
//       react: <>
//       <h1>{subject}</h1>
//       <p>Thanks for Contacting us!.</p>
//       <p>New message submitted</p>
//       <p>{message}</p>
//       <p>Hello, This is an Email from Resend.</p>
//       </>
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
