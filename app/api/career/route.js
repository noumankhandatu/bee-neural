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
    host: process.env.MAIL_HOST_NAME,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const templatePath = path.join(process.cwd(), "template", "template.html");
  let htmlTemplate = fs.readFileSync(templatePath, "utf-8");

  const pdfBuffer = Buffer.from(await pdfFile.arrayBuffer());

  htmlTemplate = htmlTemplate
    .replace(/{{firstName}}/g, firstName)
    .replace(/{{lastName}}/g, lastName)
    .replace(/{{email}}/g, email)
    .replace(/{{message}}/g, message);

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "BeeNeural Career Form Submission",
    html: htmlTemplate,
    attachments: [
      {
        filename: pdfFile.name,
        content: pdfBuffer,
        contentType: "application/pdf",
      },
    ],
  };

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
