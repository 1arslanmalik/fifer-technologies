import applyRateLimit from '../../src/utils/rateLimiter';
import EmailTemplate  from '../../src/components/emailTemp';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND);

export async function POST(req, res) {
    const resp = await applyRateLimit(req, res)

    if(!resp){
        return new Response("Too many requests", {status: 429})
    }
    const data = await req.json()
    
    if(!data){
        return new Response('Invalid Request', {status: 422})
    }

    const userName = data.name
    const userEmail = data.email
    const userMessage = data.message
    
  try {
    const { data, error } = await resend.emails.send({
      from: 'Fifer Technologies <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL],
      subject: 'New Message From Client',
      react: EmailTemplate({ name: userName , email: userEmail, message: userMessage}),
    });

    if (error) {
      return new Response(error , { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return new Response( error , { status: 500 });
  }
}
