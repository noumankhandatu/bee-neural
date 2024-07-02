import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstName, lastName, email, message } = await request.json();

  // Input validation
  if (!firstName || !lastName || !email || !message) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "BeeNeural  Contact Form Submission",
    html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; border: 1px solid #ddd; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dd5f00; text-align: center;">New Contact Form Submission</h2>
        <div style="padding: 10px 20px; background-color: #ffffff; border-radius: 5px; margin-bottom: 20px;">
          <p><strong style="color: #dd5f00;">Name:</strong> ${firstName} ${lastName}</p>
          <p><strong style="color: #dd5f00;">Email:</strong> <a href="mailto:${email}" style="color: #dd5f00; text-decoration: none;">${email}</a></p>
          <p><strong style="color: #dd5f00;">Message:</strong></p>
          <p style="background-color: #f1f1f1; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
        <footer style="text-align: center; color: #aaa; font-size: 12px;">
          <p>Thank you for contacting beeneural!</p>
        </footer>
      </div>
    </div>
  `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
