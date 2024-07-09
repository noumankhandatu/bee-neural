import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(request) {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const message = formData.get("message");
  const pdfFile = formData.get("pdf");

  // Input validation
  if (!firstName || !lastName || !email || !message || !pdfFile) {
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
  const templatePath = path.join(process.cwd(), "template", "template.html");
  let htmlTemplate = fs.readFileSync(templatePath, "utf-8");

  // Read PDF file from form data
  const pdfBuffer = Buffer.from(await pdfFile.arrayBuffer());

  // Replace placeholders with actual values
  htmlTemplate = htmlTemplate
    .replace(/{{firstName}}/g, firstName)
    .replace(/{{lastName}}/g, lastName)
    .replace(/{{email}}/g, email)
    .replace(/{{message}}/g, message)
    .replace(/{{pdfBuffer}}/g, pdfBuffer);

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "BeeNeural Contact Form Submission",
    html: htmlTemplate,
    attachments: [
      {
        filename: pdfFile.name,
        content: pdfBuffer,
      },
    ],
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
