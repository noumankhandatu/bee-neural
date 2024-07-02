import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

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

  // Read HTML template file
  // Read HTML template file
  const templatePath = path.join(process.cwd(), "template", "template.html");
  let htmlTemplate = fs.readFileSync(templatePath, "utf-8");

  // Replace placeholders with actual values
  htmlTemplate = htmlTemplate
    .replace(/{{firstName}}/g, firstName)
    .replace(/{{lastName}}/g, lastName)
    .replace(/{{email}}/g, email)
    .replace(/{{message}}/g, message);

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "BeeNeural  Contact Form Submission",
    html: htmlTemplate,
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
